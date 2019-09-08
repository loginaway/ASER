import time
from functools import wraps
import json
import uuid
import zmq
from aser.database.db_API import preprocess_event
from aser.utils.config import ASERCmd

class ASERClient(object):
    def __init__(self, port=8000, port_out=8001, timeout=-1):
        self.client_id = str(uuid.uuid4()).encode("ascii")
        context = zmq.Context()
        self.sender = context.socket(zmq.PUSH)
        self.sender.setsockopt(zmq.LINGER, 0)
        self.sender.connect("tcp://localhost:%d" % port)
        self.receiver = context.socket(zmq.SUB)
        self.receiver.setsockopt(zmq.LINGER, 0)
        self.receiver.setsockopt(zmq.SUBSCRIBE, self.client_id)
        self.receiver.connect("tcp://localhost:%d" % port_out)
        self.receiver_poller = zmq.Poller()
        self.receiver_poller.register(self.receiver)
        self.request_num = 0
        self.timeout = timeout
        # this is a hack, waiting for connection between SUB/PUB
        time.sleep(1)

    def close(self):
        self.sender.close()
        self.receiver.close()

    def _timeout(func):
        """
            Raise timeout error while there's no response for a while
            this code is from https://github.com/hanxiao/bert-as-service/
            blob/master/client/bert_serving/client/__init__.py
        """
        @wraps(func)
        def arg_wrapper(self, *args, **kwargs):
            if 'blocking' in kwargs and not kwargs['blocking']:
                # override client timeout setting if `func` is called in non-blocking way
                self.receiver.setsockopt(zmq.RCVTIMEO, -1)
            else:
                self.receiver.setsockopt(zmq.RCVTIMEO, self.timeout)
            try:
                return func(self, *args, **kwargs)
            except zmq.error.Again as _e:
                t_e = TimeoutError(
                    'no response from the server (with "timeout"=%d ms), please check the following:'
                    'is the server still online? is the network broken? are "port" and "port_out" correct? '
                    'are you encoding a huge amount of data whereas the timeout is too small for that?' % self.timeout)
                raise t_e
            finally:
                self.receiver.setsockopt(zmq.RCVTIMEO, -1)

        return arg_wrapper

    def _send(self, cmd, data):
        request_id = b"%d" % self.request_num
        self.sender.send_multipart([
            self.client_id, request_id, cmd, data])
        self.request_num += 1
        return request_id

    @_timeout
    def _recv(self, request_id):
        try:
            while True:
                response = self.receiver.recv_multipart()
                if response[1] == request_id:
                    msg = json.loads(response[-1].decode("ascii"))
                    return msg
        except Exception as e:
            raise e

    def extract_eventualities_struct(self, sentence):
        request_id = self._send(
            ASERCmd.extract_events, sentence.encode("ascii"))
        msg = self._recv(request_id)
        if msg and msg[0]['activity_list']:
            pattern, event  = msg[0]['activity_list'][0]
            event['pattern'] = pattern
        else:
            pattern, event = None, None
        return event

    def extract_eventualities(self, sentence):
        event = self.extract_eventualities_struct(sentence)
        if event is None:
            return None
        else:
            pattern = event["pattern"]
            del event["pattern"]
            e = preprocess_event(event, pattern)
            return e

    def get_exact_match_event(self, event):
        eid = event['_id'].encode("ascii")
        request_id = self._send(ASERCmd.exact_match_event, eid)
        msg = self._recv(request_id)
        return msg

    def get_exact_match_relation(self, event1, event2):
        data = (event1['_id'] + "$" + event2['_id']).encode("ascii")
        request_id = self._send(ASERCmd.exact_match_relation, data)
        msg = self._recv(request_id)
        return msg

    def get_related_events(self, event):
        eid = event['_id'].encode("ascii")
        request_id = self._send(ASERCmd.fetch_related_events, eid)
        msg = self._recv(request_id)
        return msg