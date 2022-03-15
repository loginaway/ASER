Search.setIndex({docnames:["about/index","api/aser-cs","api/conceptualizer","api/database","api/extractor","api/index","api/object","index","tutorial/get-started","tutorial/index"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["about/index.rst","api/aser-cs.rst","api/conceptualizer.rst","api/database.rst","api/extractor.rst","api/index.rst","api/object.rst","index.rst","tutorial/get-started.rst","tutorial/index.rst"],objects:{"aser.client":[[1,1,1,"","ASERClient"]],"aser.client.ASERClient":[[1,2,1,"","close"],[1,2,1,"","conceptualize_eventuality"],[1,2,1,"","exact_match_concept"],[1,2,1,"","exact_match_eventuality"],[1,2,1,"","extract_eventualities"],[1,2,1,"","extract_eventualities_and_relations"],[1,2,1,"","extract_relations"],[1,2,1,"","fetch_related_concepts"],[1,2,1,"","fetch_related_eventualities"],[1,2,1,"","parse_text"],[1,2,1,"","predict_concept_relation"],[1,2,1,"","predict_eventuality_relation"]],"aser.concept":[[6,1,1,"","ASERConcept"],[6,1,1,"","ASERConceptInstancePair"],[6,1,1,"","ProbaseConcept"]],"aser.concept.ASERConcept":[[6,2,1,"","generate_cid"],[6,2,1,"","instantiate"],[6,3,1,"","pattern"]],"aser.concept.ASERConceptInstancePair":[[6,2,1,"","generate_pid"]],"aser.concept.ProbaseConcept":[[6,3,1,"","concept_size"],[6,2,1,"","conceptualize"],[6,2,1,"","get_concept_chain"],[6,2,1,"","get_concept_freq"],[6,2,1,"","get_instance_freq"],[6,3,1,"","instance_size"],[6,2,1,"","instantiate"],[6,2,1,"","load"],[6,2,1,"","save"]],"aser.conceptualize":[[2,0,0,"-","aser_conceptualizer"]],"aser.conceptualize.aser_conceptualizer":[[2,1,1,"","BaseASERConceptualizer"],[2,1,1,"","ProbaseASERConceptualizer"],[2,1,1,"","SeedRuleASERConceptualizer"]],"aser.conceptualize.aser_conceptualizer.BaseASERConceptualizer":[[2,2,1,"","close"],[2,2,1,"","conceptualize"]],"aser.conceptualize.aser_conceptualizer.ProbaseASERConceptualizer":[[2,2,1,"","close"],[2,2,1,"","conceptualize"]],"aser.conceptualize.aser_conceptualizer.SeedRuleASERConceptualizer":[[2,2,1,"","conceptualize"],[2,2,1,"","conceptualize_from_text"],[2,2,1,"","is_pronoun"],[2,2,1,"","is_seed_concept"]],"aser.database":[[3,0,0,"-","db_connection"],[3,0,0,"-","kg_connection"]],"aser.database.db_connection":[[3,1,1,"","BaseDBConnection"],[3,1,1,"","MongoDBConnection"],[3,1,1,"","SqliteDBConnection"]],"aser.database.db_connection.BaseDBConnection":[[3,2,1,"","close"],[3,2,1,"","create_table"],[3,2,1,"","get_columns"],[3,2,1,"","get_rows_by_keys"],[3,2,1,"","get_update_op"],[3,2,1,"","insert_row"],[3,2,1,"","insert_rows"],[3,2,1,"","select_row"],[3,2,1,"","select_rows"],[3,2,1,"","update_row"],[3,2,1,"","update_rows"]],"aser.database.db_connection.MongoDBConnection":[[3,2,1,"","close"],[3,2,1,"","create_table"],[3,2,1,"","get_columns"],[3,2,1,"","get_rows_by_keys"],[3,2,1,"","get_update_op"],[3,2,1,"","insert_row"],[3,2,1,"","insert_rows"],[3,2,1,"","select_row"],[3,2,1,"","select_rows"],[3,2,1,"","update_row"],[3,2,1,"","update_rows"]],"aser.database.db_connection.SqliteDBConnection":[[3,2,1,"","close"],[3,2,1,"","create_table"],[3,2,1,"","get_columns"],[3,2,1,"","get_rows_by_keys"],[3,2,1,"","get_update_op"],[3,2,1,"","insert_row"],[3,2,1,"","insert_rows"],[3,2,1,"","select_row"],[3,2,1,"","select_rows"],[3,2,1,"","update_row"],[3,2,1,"","update_rows"]],"aser.database.kg_connection":[[3,1,1,"","ASERConceptConnection"],[3,1,1,"","ASERKGConnection"]],"aser.database.kg_connection.ASERConceptConnection":[[3,2,1,"","close"],[3,2,1,"","get_concept_columns"],[3,2,1,"","get_concept_given_str"],[3,2,1,"","get_concept_instance_pair_columns"],[3,2,1,"","get_concepts_by_keys"],[3,2,1,"","get_concepts_given_eventuality"],[3,2,1,"","get_concepts_given_strs"],[3,2,1,"","get_eventualities_given_concept"],[3,2,1,"","get_exact_match_concept"],[3,2,1,"","get_exact_match_concepts"],[3,2,1,"","get_exact_match_relation"],[3,2,1,"","get_exact_match_relations"],[3,2,1,"","get_related_concepts"],[3,2,1,"","get_relation_columns"],[3,2,1,"","get_relations_by_keys"],[3,2,1,"","init"],[3,2,1,"","insert_concept"],[3,2,1,"","insert_concept_instance_pair"],[3,2,1,"","insert_concept_instance_pairs"],[3,2,1,"","insert_concepts"],[3,2,1,"","insert_relation"],[3,2,1,"","insert_relations"]],"aser.database.kg_connection.ASERKGConnection":[[3,2,1,"","close"],[3,2,1,"","get_eventualities_by_keys"],[3,2,1,"","get_eventuality_columns"],[3,2,1,"","get_exact_match_eventualities"],[3,2,1,"","get_exact_match_eventuality"],[3,2,1,"","get_exact_match_relation"],[3,2,1,"","get_exact_match_relations"],[3,2,1,"","get_partial_match_eventualities"],[3,2,1,"","get_related_eventualities"],[3,2,1,"","get_relation_columns"],[3,2,1,"","get_relations_by_keys"],[3,2,1,"","init"],[3,2,1,"","insert_eventualities"],[3,2,1,"","insert_eventuality"],[3,2,1,"","insert_relation"],[3,2,1,"","insert_relations"]],"aser.eventuality":[[6,1,1,"","Eventuality"]],"aser.eventuality.Eventuality":[[6,2,1,"","decode"],[6,3,1,"","dependencies"],[6,2,1,"","extract_indices_from_dependencies"],[6,2,1,"","generate_eid"],[6,3,1,"","mentions"],[6,3,1,"","ners"],[6,3,1,"","phrases"],[6,3,1,"","phrases_ners"],[6,3,1,"","position"],[6,3,1,"","raw_dependencies"],[6,3,1,"","skeleton_dependencies"],[6,3,1,"","skeleton_ners"],[6,3,1,"","skeleton_phrases"],[6,3,1,"","skeleton_phrases_ners"],[6,3,1,"","skeleton_pos_tags"],[6,3,1,"","skeleton_words"],[6,2,1,"","sort_dependencies_position"],[6,2,1,"","to_dict"],[6,2,1,"","update"],[6,3,1,"","verbs"]],"aser.extract":[[4,0,0,"-","aser_extractor"],[4,0,0,"-","eventuality_extractor"],[4,0,0,"-","parsed_reader"],[4,0,0,"-","relation_extractor"],[4,0,0,"-","sentence_parser"]],"aser.extract.aser_extractor":[[4,1,1,"","BaseASERExtractor"],[4,1,1,"","DiscourseASERExtractor"],[4,1,1,"","SeedRuleASERExtractor"]],"aser.extract.aser_extractor.BaseASERExtractor":[[4,2,1,"","close"],[4,2,1,"","extract_eventualities_from_parsed_result"],[4,2,1,"","extract_eventualities_from_text"],[4,2,1,"","extract_from_parsed_result"],[4,2,1,"","extract_from_text"],[4,2,1,"","extract_relations_from_parsed_result"],[4,2,1,"","extract_relations_from_text"],[4,2,1,"","parse_text"]],"aser.extract.aser_extractor.DiscourseASERExtractor":[[4,2,1,"","extract_from_parsed_result"]],"aser.extract.eventuality_extractor":[[4,1,1,"","BaseEventualityExtractor"],[4,1,1,"","DiscourseEventualityExtractor"],[4,1,1,"","SeedRuleEventualityExtractor"]],"aser.extract.eventuality_extractor.BaseEventualityExtractor":[[4,2,1,"","close"],[4,2,1,"","extract_from_parsed_result"],[4,2,1,"","extract_from_text"],[4,2,1,"","parse_text"]],"aser.extract.eventuality_extractor.DiscourseEventualityExtractor":[[4,2,1,"","extract_from_parsed_result"]],"aser.extract.eventuality_extractor.SeedRuleEventualityExtractor":[[4,2,1,"","extract_from_parsed_result"]],"aser.extract.parsed_reader":[[4,1,1,"","ParsedReader"]],"aser.extract.parsed_reader.ParsedReader":[[4,2,1,"","close"],[4,2,1,"","generate_sid"],[4,2,1,"","get_parsed_paragraphs_from_file"],[4,2,1,"","get_parsed_sentence_and_context"]],"aser.extract.relation_extractor":[[4,1,1,"","BaseRelationExtractor"],[4,1,1,"","DiscourseRelationExtractor"],[4,1,1,"","SeedRuleRelationExtractor"]],"aser.extract.relation_extractor.BaseRelationExtractor":[[4,2,1,"","close"],[4,2,1,"","extract_from_parsed_result"]],"aser.extract.relation_extractor.DiscourseRelationExtractor":[[4,2,1,"","extract_from_parsed_result"]],"aser.extract.relation_extractor.SeedRuleRelationExtractor":[[4,2,1,"","extract_from_parsed_result"]],"aser.extract.sentence_parser":[[4,1,1,"","SentenceParser"]],"aser.extract.sentence_parser.SentenceParser":[[4,2,1,"","close"],[4,2,1,"","generate_sid"],[4,2,1,"","parse"],[4,2,1,"","parse_raw_file"]],"aser.relation":[[6,1,1,"","Relation"]],"aser.relation.Relation":[[6,2,1,"","generate_rid"],[6,2,1,"","to_triplets"],[6,2,1,"","update"]],"aser.server":[[1,1,1,"","ASERDataBase"],[1,1,1,"","ASERServer"],[1,1,1,"","ASERSink"],[1,1,1,"","ASERWorker"],[1,4,1,"","is_port_occupied"],[1,4,1,"","sockets_ipc_bind"]],"aser.server.ASERDataBase":[[1,2,1,"","close"],[1,2,1,"","handle_exact_match_concept"],[1,2,1,"","handle_exact_match_concept_relation"],[1,2,1,"","handle_exact_match_eventuality"],[1,2,1,"","handle_exact_match_eventuality_relation"],[1,2,1,"","handle_fetch_related_concepts"],[1,2,1,"","handle_fetch_related_eventualities"],[1,2,1,"","run"]],"aser.server.ASERServer":[[1,2,1,"","close"],[1,2,1,"","run"]],"aser.server.ASERSink":[[1,2,1,"","run"]],"aser.server.ASERWorker":[[1,2,1,"","close"],[1,2,1,"","handle_conceptualize_eventuality"],[1,2,1,"","handle_extract_eventualities"],[1,2,1,"","handle_extract_eventualities_and_relations"],[1,2,1,"","handle_extract_relations"],[1,2,1,"","handle_parse_text"],[1,2,1,"","run"]],aser:[[1,0,0,"-","client"],[6,0,0,"-","concept"],[6,0,0,"-","eventuality"],[6,0,0,"-","relation"],[1,0,0,"-","server"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","property","Python property"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:property","4":"py:function"},terms:{"0":[1,3,4,6,7,8],"0007729784027067319":8,"0008249433373424787":8,"0008733652082530607":8,"0009320788356986446":8,"0009970771833233895":8,"0011265677266121413":8,"0012023311220917638":8,"001299123365893667":8,"00135847802106472":8,"0014678406861395978":8,"0014738252464350657":8,"0015126101213412515":8,"0016652311225954636":8,"0017090529942427124":8,"0019171057650086054":8,"0020252501927783217":8,"0020555983700278548":8,"0020780068748090068":8,"0022177048159726376":8,"002322559197304199":8,"002413587001587757":8,"0024193220136665247":8,"002581965510383602":8,"0026804542460771644":8,"003120722093258921":8,"0032322408087401967":8,"0034924485290907673":8,"0035536929163400405":8,"003763140265248248":8,"0037925966418082785":8,"003962101636520241":8,"003976765548440927":8,"0039948421153371515":8,"004066087417926932":8,"004066367469060248":8,"004513652779666651":8,"004583965232421818":8,"004612881615465595":8,"004734273236925215":8,"005526089124620336":8,"005527600223642655":8,"00597259313670595":8,"006433755937359909":8,"00657681203983669":8,"006775768016078094":8,"006954077700711728":8,"0074309434735817135":8,"009450413285582604":8,"010739380751620654":8,"010ec054737a144cb77e99954ff032bc5dff472c":8,"012503337010340954":8,"016591251885369532":8,"01768052067852201":8,"018365897517264307":8,"020584567553255093":8,"02262443438914027":8,"022943297279580464":8,"025401507702392658":8,"025749215622633343":8,"026646556058320763":8,"026874115983026876":8,"02687880595658219":8,"027480255328356594":8,"0297029702970297":8,"030019493177387915":8,"030236252754573874":8,"031033712882339807":8,"03253182461103253":8,"03321432435356486":8,"03391812865497076":8,"033946251768033946":8,"040051679586563305":8,"04085733422638982":8,"041638758651484704":8,"0429367420517863":8,"04327599264308125":8,"047555257870060284":8,"04909560723514212":8,"05":8,"050387596899224806":8,"06014421501147165":8,"06364922206506365":8,"06847545219638243":8,"08070175438596491":8,"09395711500974659":8,"1":[1,4,6,7,8],"10":[1,4,8],"10155857214680744":8,"1024":4,"10k":7,"11":4,"12":4,"127":1,"13":4,"1330749354005168":8,"13801169590643275":8,"13bb4ed9f70c37253246c2051ef05fe4795f4fe":8,"15":7,"17291806206742577":8,"1a18ae76468276b651c178926b380e4e9d607f5":8,"2":[4,6,7,8],"2018":8,"2019":7,"2020":[7,8],"2020and":[],"2021":7,"2110783349721403":8,"21908471275559882":8,"224":7,"2342e1896c34cac33974473c5b52ac22d7182fe9":8,"25":8,"253e8b127b833c3aa7d79e2b91ce030299a646d6":8,"25edad6781577dcb3ba715c8230416fb0d4c45c4":4,"27017":3,"29160382101558574":8,"2dd66bdf5849fe8d4a28d3355f0fc0a50b7f61e2":8,"3":[4,8],"32768":3,"4":4,"41876cb7188cb3398572af71ff9d98d61f46c20b":8,"438":7,"45":8,"5":[1,4,6,8],"52":7,"53":7,"55704c606666f41a73ac5ae0eabe582892aa163c":8,"58004d785a3ee08eac2f51ea4cbc44bba3a1ba22":8,"5a49d855f23b29d0a769d638a0944c0d35815ca9":8,"5th":7,"6":[4,6],"602979237":[],"648":7,"69864d92726be0d4b7f52fd4f32e38ad1f97974":8,"6th":7,"7":[4,6],"766f00c08dcac14353629c12125f05697eb58a2":8,"7d9ea9023b66a0ebc167f0dbb6ea8cd75d7b46f9":4,"8":[3,4,6],"80":[1,8],"8000":[1,8],"8001":[1,8],"8540897b645962964fd644242d4cc0032f024e86":4,"86e7181b3e449dd70dd9bd0eebcca5b73b432a8c":8,"8dd8fbc06d2810add7b2cfd637a78f90fa2e5e9":8,"9":[4,8],"9000":[1,4,8],"abstract":7,"byte":6,"case":4,"class":[1,2,3,4,6],"default":[1,3,4,6],"do":[1,8],"final":8,"float":[1,2,3,6],"function":1,"import":8,"int":[1,3,4,6],"long":4,"new":[3,6,8],"return":[1,2,3,4,6,8],"static":6,"super":4,"true":[3,4,6,8],"try":8,"while":6,A:[1,7],And:8,As:8,IN:4,If:8,In:[4,7,8],It:[4,8],On:[7,8],The:[0,7,8],Then:8,To:8,With:7,__number__0:8,__person__0:8,__repr__:8,_id:3,a8eec375e86e467cf868a03f64ecd1f9d1fe5fe:8,about:8,abov:8,absolut:6,access:8,accommod:4,acl:7,acquisit:7,action:7,ad:8,addit:8,address:1,adjp:4,aggreg:8,akbc:7,algorithm:0,alibaba:0,all:[1,3,4,6,8],also:[7,8],alumni:0,am:8,amaz:8,ami:7,amod:4,an:[1,2,3,4,6,7,8],analog:7,analysi:[4,7],ancient:8,angl:7,anim:8,annot:[4,7],annual:7,appli:3,april:7,ar:[0,1,3,6,7,8],area:8,arg:1,argpars:1,armi:4,artifici:7,aser:[0,2,3,4,5,6,9],aser_conceptu:[2,8],aser_extractor:[5,7,8],aser_kg_dir:[1,8],aser_pip:8,asercli:[1,8],aserconcept:[1,2,3,6],aserconceptconnect:[3,8],aserconceptinstancepair:[3,6],aserconcpet:3,aserdatabas:1,aserextractor:8,aserkgconnect:[3,6],aserserv:1,asersink:1,aserwork:1,asia:[],associ:[1,6,7],atom:7,attent:8,autom:7,aux:4,avail:[1,8],averag:6,aw:7,b875a4b94675e057fa643beb334e071e4ddf3760:8,back:8,backend:3,bake:8,base:[1,2,3,4,6,7,8],base_corenlp_port:[1,8],baseaserconceptu:2,baseaserextractor:4,basedbconnect:3,baseeventualityextractor:4,baserelationextractor:4,becaus:8,been:[3,8],befor:8,beihang:7,benchmark:7,besid:7,between:[1,7,8],bin:7,boat:4,bool:[1,3,4,6],both:[1,4],bound:1,bread:8,breakfast:8,bridg:7,build:[3,7,8],build_concept_rel:8,built:3,bupt:7,busi:8,bys:3,c1:8,c2:8,cach:3,call:7,came:8,can:[1,8],cane:7,cannot:4,carbohydr:8,cck:7,ccomp:4,centric:7,chain:6,champion:8,changlong:7,characterist:8,check:[1,8],chees:8,chen:7,choi:7,choic:1,chunksiz:3,ciabatta:8,cid2concept:8,cid:[1,3,6],cid_to_filter_scor:8,clase:1,client:[5,7,9],clone:8,close:[1,2,3,4,8],cloud:0,cmu:0,co_occurr:[4,8],cocolm:7,code:[7,8],column:3,column_typ:3,com:[1,6,8],command:8,commonsens:7,complex:7,comput:[6,7],concept1:1,concept2:1,concept:[1,2,3,5,7,8],concept_instance_pair:[3,8],concept_kg_dir:[1,8],concept_method:[1,8],concept_s:6,concept_str:[3,6],concept_topk:[1,8],concept_weight_threshold:8,conceptu:[1,3,5,6,7,8],conceptuali:[6,7],conceptualizatoin:8,conceptualize_eventu:[1,8],conceptualize_from_text:2,concurr:1,condit:8,conduct:7,confer:[7,8],connect:[3,6,8],consid:3,consol:8,constitu:4,construct:[6,7],contain:[3,4,6,7],contamin:8,content:3,context:[1,4],context_window_s:4,contrari:8,contrast:8,contributor:0,convert:6,cook:8,cop:[4,6],copi:6,core:[7,8],core_kg_dir:8,corenlp:[1,4,8],corenlp_path:[1,4,8],corenlp_port:[4,8],correspond:[1,3,4,6,8],could:4,creat:3,create_t:3,crust:8,current:8,dac82e8bc75bd0221e86194e6e3cd607a72aba7:8,dai:8,daiya:8,dan:7,daniel:7,data:[1,8],data_concept_path:6,databas:[5,6,7,8],dataset:7,datatype3:3,db:[1,3,8],db_connect:[5,7],db_path:3,db_sender_addr_list:1,decod:6,definit:8,denser:8,depend:[4,6,7],det:4,dict:[1,3,4,6],dictionari:[4,6],ding:7,directori:[1,8],disco:7,discours:[4,7,8],discourseaserextractor:[4,8],discourseeventualityextractor:4,discourserelationextractor:4,disk:4,dobj:4,dong:7,down:8,download:[1,8],downloaddata:[],drop:4,dt:4,dure:8,e1:8,e2:8,e8809e959614713c0622e23b0ab5dc06e2f2bf46:8,e:[3,4,6,7],each:[3,8],edg:[6,7],edu:8,effect:7,egg:8,eid:[1,3,6],emnlp:7,empir:7,employe:8,encod:6,engin:0,enhanc:7,enrich:7,entail:7,evalu:7,event:3,eventu:[1,2,3,4,5,7,8],eventuality1:1,eventuality2:1,eventuality_conceptu:[5,7],eventuality_extractor:[5,7],eventuality_frequency_threshold:8,eventuality_output_format:4,eventuality_threshold_to_conceptu:8,exact:[1,3],exact_match_concept:1,exact_match_eventu:1,excipi:8,excit:8,exist:3,experi:8,extract:[1,4,6,7,9],extract_eventu:[1,8],extract_eventualities_and_rel:1,extract_eventualities_from_parsed_result:4,extract_eventualities_from_text:4,extract_from_parsed_result:4,extract_from_text:[4,8],extract_indices_from_depend:6,extract_rel:1,extract_relations_from_parsed_result:4,extract_relations_from_text:4,extractal:8,extractor:[5,7,8],f:8,factor:8,fals:[3,4,8],fang:[0,7],featur:8,fetch:[1,8],fetch_related_concept:[1,8],fetch_related_eventu:[1,8],file:[1,4,6,8],file_nam:[4,6],file_path:1,find:[4,8],finish:8,first:8,fix:6,flavor:8,follow:[4,8],food:8,forget:8,format:[4,6],forward:1,four:8,frequenc:6,fresh:8,freshli:8,friend:7,friendli:8,from:[0,1,3,4,6,7,8],fudan:7,full:[7,8],full_kg_dir:8,g:[3,4,6,7],gap:7,gener:[6,7],generate_cid:6,generate_eid:6,generate_pid:6,generate_rid:6,generate_sid:4,get:[1,3,6,7,9],get_column:3,get_concept_chain:6,get_concept_column:3,get_concept_freq:6,get_concept_given_str:3,get_concept_instance_pair_column:3,get_concepts_by_kei:3,get_concepts_given_eventu:3,get_concepts_given_str:3,get_eventualities_by_kei:3,get_eventualities_given_concept:3,get_eventuality_column:3,get_exact_match_concept:3,get_exact_match_eventu:3,get_exact_match_rel:3,get_instance_freq:6,get_parsed_paragraphs_from_fil:4,get_parsed_sentence_and_context:4,get_partial_match_eventu:3,get_related_concept:3,get_related_eventu:3,get_relation_column:3,get_relations_by_kei:3,get_rows_by_kei:3,get_update_op:3,git:8,github:[4,6,8],give:8,given:[1,2,3,4,6,8],go:8,good:8,got:8,grain:[3,8],graph:[7,8],great:8,h:1,had:8,handl:4,handle_conceptualize_eventu:1,handle_exact_match_concept:1,handle_exact_match_concept_rel:1,handle_exact_match_eventu:1,handle_exact_match_eventuality_rel:1,handle_extract_eventu:1,handle_extract_eventualities_and_rel:1,handle_extract_rel:1,handle_fetch_related_concept:1,handle_fetch_related_eventu:1,handle_parse_text:1,hantian:7,hao:7,haoji:[0,7],haowen:[0,7],haoyu:7,have:[3,8],he:7,head:[1,6],help:[1,7],here:8,hid:6,higher:7,highlight:8,hit:7,hkust:[0,7,8],home:[1,3,4,8],hongm:[0,7],hous:8,how:[1,3,8],html:[3,4,8],http:[1,3,4,6,8],huawei:7,i:[4,7,8],id:[1,3,4],ijcai:7,implement:8,in_ord:[4,8],includ:[1,3,4,7],indic:6,induct:7,inform:[3,6,8],ingredi:8,init:3,initi:3,inorgan:8,input:[4,6],insert:3,insert_concept:3,insert_concept_instance_pair:3,insert_eventu:3,insert_rel:3,insert_row:3,instal:[7,9],instanc:[3,4,6,8],instance_s:6,instanti:6,instead:6,intellig:7,interest:8,intern:7,invers:6,involv:6,io:[4,8],iobj:4,ip:1,is_port_occupi:1,is_pronoun:2,is_seed_concept:2,item:8,its:4,jalapeno:8,jiefu:[0,7],jj:4,joint:7,json:4,jsonserializedobject:6,juic:8,juli:7,ke:[0,7],keep:8,kei:3,kept:1,kg:[1,3,6,8],kg_conn:6,kg_connect:[5,6,7,8],khashabi:7,ki:7,kind:8,kneader:8,knowcomp:[0,8],knowledg:7,known:7,kun:7,kw:[2,4,6],languag:7,larg:7,led:0,left_context:4,lemma:4,length:[4,6],let:8,leung:7,level:7,lifeng:7,like:8,likelihood:6,line:[4,8],line_no:4,linguist:7,link:3,list:[1,2,3,4,6,8],littl:8,liu:[0,7],load:[3,6,8],local:[7,9],localhost:[1,3],locat:8,log:[1,8],log_path:[1,8],look:8,m:4,made:8,mai:7,main:0,make:[6,8],mani:[1,3,8],map:6,march:7,master:0,match:[1,3],max:4,max_chain_length:6,max_len:4,maximum:6,md:4,mean:1,meaning:8,meantim:4,meat:8,meet:7,memori:3,mention:[4,6],mesh:8,messag:1,method:[1,4,6,7],microsoft:[1,7,8],million:7,millisecond:1,minimum:3,minut:8,mkdir:8,mode:[3,7,9],model:7,mongodb:3,mongodbconnect:3,more:[7,8],move:8,mphil:0,msg:[1,6],msra:7,much:8,muhao:7,multipl:[3,8],multiprocess:1,mushroom:8,mutian:7,my:[4,8],n:8,n_concurrent_back_sock:[1,8],n_extractor:8,n_worker:[1,8],name:[3,4,6],namespac:1,natur:[7,8],necessari:[3,6],need:8,neighbor:8,ner:[2,4,6],nest:8,next:8,ng:7,nice:8,nlp:[7,8],nmod:4,nn:4,node:7,none:[1,2,3,4,6],novermb:7,now:[7,8],np:4,nsubj:[4,6],num:1,number:[1,4],o:4,object:[1,2,3,4,5,7],occupi:1,octob:7,omc:7,one:1,onedr:7,onli:[3,6,8],open:8,oper:3,opt:1,option:[6,8],orang:8,order:[3,4,7,8],order_bi:3,org:3,origin:3,os:8,other:[1,4,6,8],ou:[0,7],out:8,output:[1,4,6,8],output_format:4,over:7,overridden:1,overview:7,owner:8,packag:8,pair:[1,2,3,6],pan:[0,7],para_eventu:4,paragraph:[1,4],paramet:[1,2,3,4,6],pars:[1,4,6,8],parse_raw_fil:4,parse_text:[1,4],parsed_read:[5,7],parsed_result:[4,6],parsedread:4,parser:4,partial:3,pastri:8,path:[1,3,4,6],patient:8,pattern:[6,7],pdf:7,perfectli:8,person:8,phd:0,phrase:6,phrases_n:6,pid:6,pie:8,pip:8,pipe:[7,9],pipelin:[7,9],pipeplin:8,pku:7,place:8,pleas:[3,4,8],pmi:6,popul:7,port:[1,4,8],port_out:[1,8],pos_tag:4,posit:6,poss:4,possibl:1,power:8,pp:4,pprint:8,ppt:7,predict:[1,7],predict_concept_rel:[1,8],predict_eventuality_rel:[1,8],prefer:7,present:7,previous:7,print:8,probabl:6,probas:[1,2,6,7,8],probase_path:[1,2,8],probase_topk:[2,8],probaseaserconceptu:[2,8],probaseconcept:6,process:[1,4,7,8],processed_dir:8,processed_path:4,product:8,prof:0,properti:[3,6],protein:8,provid:[1,3,8],prp:4,punct:4,push:1,py:8,python:8,r:8,raw:[1,4,8],raw_depend:6,raw_dir:8,raw_path:4,read:4,reader:4,readi:8,reason:7,receiv:1,recev:1,recov:6,refer:[3,4],relat:[1,3,4,5,8],relation_extractor:[5,7],relation_output_format:4,relation_weight_threshold:8,relev:6,renmin:7,repo:8,report:7,represent:[3,6,8],request:[1,8],requir:8,research:[1,8],reserv:1,reset:6,reset_posit:6,result:[1,4,6,7,8],retriev:[1,3,4,6,8],revers:3,review:8,rid:[1,3,6],right_context:4,rmtree:8,role:7,root:4,roth:7,row:3,rtype:4,rule:[2,4],run:[1,8],rxtractor:4,s:[3,4,6,8],safe:[1,2,3,4],salt:8,same:[1,8],sausag:8,save:6,sbar:4,scale:7,scarletpan:6,score:[1,2,6],score_method:6,season:8,see:8,seed:1,seedruleaserconceptu:[2,8],seedruleaserextractor:[4,8],seedruleeventualityextractor:4,seedrulerelationextractor:4,sehyun:7,select:[3,7],select_row:3,send:1,senior:0,sens:6,sentenc:[4,6,8],sentence_pars:4,sentence_read:[5,7],sentencepars:4,septemb:7,sequenc:7,serv:1,server:[5,7,9],set:[7,8],setup:8,sever:3,shang:7,shibo:7,should:[1,8],show:8,shown:8,shutil:8,sid:4,similar:3,similarli:8,sink_addr:1,sink_addr_receiver_addr:1,size:4,skeleton_depend:6,skeleton_n:6,skeleton_phras:6,skeleton_phrases_n:6,skeleton_pos_tag:6,skeleton_word:[3,6],skip_word:4,smell:8,so:8,socket:1,sockets_ipc_bind:1,softwar:8,some:[3,8],song:[0,7],sort:[3,6],sort_dependencies_posit:6,sourc:[1,2,3,4,6,8],sp:7,specif:3,spinach:8,sqlite:3,sqlitedbconnect:3,squeez:8,sscore:6,stanford:[4,8],stanfordcorenlp:1,stanfordnlp:[4,8],starchi:8,start:[1,7,9],startdownload:8,step:[7,9],store:[1,4],str:[1,2,3,4,6],string:3,structur:7,student:0,sub:[1,7],subscrib:1,substanc:8,succe:8,sugar:1,suggest:3,suit:3,suitabl:4,summer:[],support:8,sure:4,surpris:8,sweet:8,synchron:4,syntax_tree_cach:4,system:8,t9rdyhnkv94tfcd8tkvdzf9cewnfdaf:[],t:8,tabl:3,table_nam:3,tail:[1,6],technic:7,text:[1,4,8],thei:8,them:6,thi:[3,4,6,8],think:8,three:8,threshold:3,thu:7,tianq:[0,7],tid:6,time:8,timeout:1,to_dict:6,to_triplet:6,toast:8,togeth:8,token:[4,8],top:[1,8],top_n:3,total:7,toward:7,town:8,transfer:7,transomc:7,triplet:[4,6],tupl:[1,2,3,4,6],two:[1,3,8],txt:[1,6,8],type:[1,2,3,4,6],undergradu:[],union:[1,3,4,6],uniqu:6,univers:7,unknown:6,until:8,up:8,updat:[3,6],update_column:3,update_op:3,update_row:3,urllib:8,urlretriev:8,us:[1,2,3,7,8],usag:[1,7],utf:6,util:8,v1:4,v2:4,valu:[3,8],vb:4,vbp:4,vegan:8,verb:[3,6],veri:8,via:[1,7],video:7,vp:4,w:8,wa:8,wait:8,wang:7,want:[3,8],wasn:8,wasnt:8,we:[4,8],web:7,weight:7,weiqi:7,well:8,went:8,were:8,what:8,when:6,whether:[1,3,4,6],which:[1,3,4,8],whose:3,wild:8,wilfr:7,window:4,wing:7,within:8,without:[3,6],word:[2,3,4,6],work:7,worker:1,worker_addr_list:1,workhop:7,workshop:7,would:8,write:[3,8],www:[3,7,8],x:6,xin:[0,7],xliucr:[3,4],xu:7,xx:8,yangqiu:[0,7],yelp:8,you:[1,3,4,8],your:[4,8],yu:7,zhang:[0,7],zip:8,zip_ref:8,zipfil:8,zmq:1},titles:["About","Server/Client","Conceptualization","Database","Extractor","API Reference","Object","ASER (Activities, States, Events, and their Relations)","Get Started","Tutorial"],titleterms:{"public":7,about:[0,7],activ:7,api:[5,7],argument:1,aser:[1,7,8],aser_extractor:4,client:[1,8],concept:6,conceptu:2,data:7,databas:3,db_connect:3,download:7,event:7,eventu:6,eventuality_conceptu:2,eventuality_extractor:4,extract:8,extractor:4,get:8,index:7,instal:8,introduct:7,kg_connect:3,local:8,mode:8,name:1,object:6,parsed_read:4,pipe:8,pipelin:8,project:7,refer:[5,7],relat:[6,7],relation_extractor:4,sentence_read:4,server:[1,8],start:8,state:7,step:8,talk:7,tutori:[7,9]}})