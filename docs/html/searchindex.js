Search.setIndex({docnames:["api/aser-cs","api/conceptualizer","api/database","api/extractor","api/index","index","tutorial/get-started","tutorial/index"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api/aser-cs.rst","api/conceptualizer.rst","api/database.rst","api/extractor.rst","api/index.rst","index.rst","tutorial/get-started.rst","tutorial/index.rst"],objects:{"aser.client":{ASERClient:[0,1,1,""]},"aser.client.ASERClient":{close:[0,2,1,""],conceptualize_eventuality:[0,2,1,""],exact_match_concept:[0,2,1,""],exact_match_eventuality:[0,2,1,""],extract_eventualities:[0,2,1,""],extract_eventualities_and_relations:[0,2,1,""],extract_relations:[0,2,1,""],fetch_related_concepts:[0,2,1,""],fetch_related_eventualities:[0,2,1,""],parse_text:[0,2,1,""],predict_concept_relation:[0,2,1,""],predict_eventuality_relation:[0,2,1,""]},"aser.conceptualize":{aser_conceptualizer:[1,0,0,"-"]},"aser.conceptualize.aser_conceptualizer":{BaseASERConceptualizer:[1,1,1,""],ProbaseASERConceptualizer:[1,1,1,""],SeedRuleASERConceptualizer:[1,1,1,""]},"aser.conceptualize.aser_conceptualizer.BaseASERConceptualizer":{close:[1,2,1,""],conceptualize:[1,2,1,""]},"aser.conceptualize.aser_conceptualizer.ProbaseASERConceptualizer":{close:[1,2,1,""],conceptualize:[1,2,1,""]},"aser.conceptualize.aser_conceptualizer.SeedRuleASERConceptualizer":{conceptualize:[1,2,1,""],conceptualize_from_text:[1,2,1,""],is_pronoun:[1,2,1,""],is_seed_concept:[1,2,1,""]},"aser.database":{db_connection:[2,0,0,"-"],kg_connection:[2,0,0,"-"]},"aser.database.db_connection":{BaseDBConnection:[2,1,1,""],MongoDBConnection:[2,1,1,""],SqliteDBConnection:[2,1,1,""]},"aser.database.db_connection.BaseDBConnection":{close:[2,2,1,""],create_table:[2,2,1,""],get_columns:[2,2,1,""],get_rows_by_keys:[2,2,1,""],get_update_op:[2,2,1,""],insert_row:[2,2,1,""],insert_rows:[2,2,1,""],select_row:[2,2,1,""],select_rows:[2,2,1,""],update_row:[2,2,1,""],update_rows:[2,2,1,""]},"aser.database.db_connection.MongoDBConnection":{close:[2,2,1,""],create_table:[2,2,1,""],get_columns:[2,2,1,""],get_rows_by_keys:[2,2,1,""],get_update_op:[2,2,1,""],insert_row:[2,2,1,""],insert_rows:[2,2,1,""],select_row:[2,2,1,""],select_rows:[2,2,1,""],update_row:[2,2,1,""],update_rows:[2,2,1,""]},"aser.database.db_connection.SqliteDBConnection":{close:[2,2,1,""],create_table:[2,2,1,""],get_columns:[2,2,1,""],get_rows_by_keys:[2,2,1,""],get_update_op:[2,2,1,""],insert_row:[2,2,1,""],insert_rows:[2,2,1,""],select_row:[2,2,1,""],select_rows:[2,2,1,""],update_row:[2,2,1,""],update_rows:[2,2,1,""]},"aser.database.kg_connection":{ASERConceptConnection:[2,1,1,""],ASERKGConnection:[2,1,1,""]},"aser.database.kg_connection.ASERConceptConnection":{close:[2,2,1,""],get_concept_columns:[2,2,1,""],get_concept_given_str:[2,2,1,""],get_concept_instance_pair_columns:[2,2,1,""],get_concepts_by_keys:[2,2,1,""],get_concepts_given_eventuality:[2,2,1,""],get_concepts_given_strs:[2,2,1,""],get_eventualities_given_concept:[2,2,1,""],get_exact_match_concept:[2,2,1,""],get_exact_match_concepts:[2,2,1,""],get_exact_match_relation:[2,2,1,""],get_exact_match_relations:[2,2,1,""],get_related_concepts:[2,2,1,""],get_relation_columns:[2,2,1,""],get_relations_by_keys:[2,2,1,""],init:[2,2,1,""],insert_concept:[2,2,1,""],insert_concept_instance_pair:[2,2,1,""],insert_concept_instance_pairs:[2,2,1,""],insert_concepts:[2,2,1,""],insert_relation:[2,2,1,""],insert_relations:[2,2,1,""]},"aser.database.kg_connection.ASERKGConnection":{close:[2,2,1,""],get_eventualities_by_keys:[2,2,1,""],get_eventuality_columns:[2,2,1,""],get_exact_match_eventualities:[2,2,1,""],get_exact_match_eventuality:[2,2,1,""],get_exact_match_relation:[2,2,1,""],get_exact_match_relations:[2,2,1,""],get_partial_match_eventualities:[2,2,1,""],get_related_eventualities:[2,2,1,""],get_relation_columns:[2,2,1,""],get_relations_by_keys:[2,2,1,""],init:[2,2,1,""],insert_eventualities:[2,2,1,""],insert_eventuality:[2,2,1,""],insert_relation:[2,2,1,""],insert_relations:[2,2,1,""]},"aser.extract":{aser_extractor:[3,0,0,"-"],eventuality_extractor:[3,0,0,"-"],parsed_reader:[3,0,0,"-"],relation_extractor:[3,0,0,"-"],sentence_parser:[3,0,0,"-"]},"aser.extract.aser_extractor":{BaseASERExtractor:[3,1,1,""],DiscourseASERExtractor:[3,1,1,""],SeedRuleASERExtractor:[3,1,1,""]},"aser.extract.aser_extractor.BaseASERExtractor":{close:[3,2,1,""],extract_eventualities_from_parsed_result:[3,2,1,""],extract_eventualities_from_text:[3,2,1,""],extract_from_parsed_result:[3,2,1,""],extract_from_text:[3,2,1,""],extract_relations_from_parsed_result:[3,2,1,""],extract_relations_from_text:[3,2,1,""],parse_text:[3,2,1,""]},"aser.extract.aser_extractor.DiscourseASERExtractor":{extract_from_parsed_result:[3,2,1,""]},"aser.extract.eventuality_extractor":{BaseEventualityExtractor:[3,1,1,""],DiscourseEventualityExtractor:[3,1,1,""],SeedRuleEventualityExtractor:[3,1,1,""]},"aser.extract.eventuality_extractor.BaseEventualityExtractor":{close:[3,2,1,""],extract_from_parsed_result:[3,2,1,""],extract_from_text:[3,2,1,""],parse_text:[3,2,1,""]},"aser.extract.eventuality_extractor.DiscourseEventualityExtractor":{extract_from_parsed_result:[3,2,1,""]},"aser.extract.eventuality_extractor.SeedRuleEventualityExtractor":{extract_from_parsed_result:[3,2,1,""]},"aser.extract.parsed_reader":{ParsedReader:[3,1,1,""]},"aser.extract.parsed_reader.ParsedReader":{close:[3,2,1,""],generate_sid:[3,2,1,""],get_parsed_paragraphs_from_file:[3,2,1,""],get_parsed_sentence_and_context:[3,2,1,""]},"aser.extract.relation_extractor":{BaseRelationExtractor:[3,1,1,""],DiscourseRelationExtractor:[3,1,1,""],SeedRuleRelationExtractor:[3,1,1,""]},"aser.extract.relation_extractor.BaseRelationExtractor":{close:[3,2,1,""],extract_from_parsed_result:[3,2,1,""]},"aser.extract.relation_extractor.DiscourseRelationExtractor":{extract_from_parsed_result:[3,2,1,""]},"aser.extract.relation_extractor.SeedRuleRelationExtractor":{extract_from_parsed_result:[3,2,1,""]},"aser.extract.sentence_parser":{SentenceParser:[3,1,1,""]},"aser.extract.sentence_parser.SentenceParser":{close:[3,2,1,""],generate_sid:[3,2,1,""],parse:[3,2,1,""],parse_raw_file:[3,2,1,""]},"aser.server":{ASERDataBase:[0,1,1,""],ASERServer:[0,1,1,""],ASERSink:[0,1,1,""],ASERWorker:[0,1,1,""],is_port_occupied:[0,3,1,""],sockets_ipc_bind:[0,3,1,""]},"aser.server.ASERDataBase":{close:[0,2,1,""],handle_exact_match_concept:[0,2,1,""],handle_exact_match_concept_relation:[0,2,1,""],handle_exact_match_eventuality:[0,2,1,""],handle_exact_match_eventuality_relation:[0,2,1,""],handle_fetch_related_concepts:[0,2,1,""],handle_fetch_related_eventualities:[0,2,1,""],run:[0,2,1,""]},"aser.server.ASERServer":{close:[0,2,1,""],run:[0,2,1,""]},"aser.server.ASERSink":{run:[0,2,1,""]},"aser.server.ASERWorker":{close:[0,2,1,""],handle_conceptualize_eventuality:[0,2,1,""],handle_extract_eventualities:[0,2,1,""],handle_extract_eventualities_and_relations:[0,2,1,""],handle_extract_relations:[0,2,1,""],handle_parse_text:[0,2,1,""],run:[0,2,1,""]},aser:{client:[0,0,0,"-"],server:[0,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function"},terms:{"0007729784027067319":6,"0008249433373424787":6,"0008733652082530607":6,"0009320788356986446":6,"0009970771833233895":6,"0011265677266121413":6,"0012023311220917638":6,"001299123365893667":6,"00135847802106472":6,"0014678406861395978":6,"0014738252464350657":6,"0015126101213412515":6,"0016652311225954636":6,"0017090529942427124":6,"0019171057650086054":6,"0020252501927783217":6,"0020555983700278548":6,"0020780068748090068":6,"0022177048159726376":6,"002322559197304199":6,"002413587001587757":6,"0024193220136665247":6,"002581965510383602":6,"0026804542460771644":6,"003120722093258921":6,"0032322408087401967":6,"0034924485290907673":6,"0035536929163400405":6,"003763140265248248":6,"0037925966418082785":6,"003962101636520241":6,"003976765548440927":6,"0039948421153371515":6,"004066087417926932":6,"004066367469060248":6,"004513652779666651":6,"004583965232421818":6,"004612881615465595":6,"004734273236925215":6,"005526089124620336":6,"005527600223642655":6,"00597259313670595":6,"006433755937359909":6,"00657681203983669":6,"006775768016078094":6,"006954077700711728":6,"0074309434735817135":6,"009450413285582604":6,"010739380751620654":6,"010ec054737a144cb77e99954ff032bc5dff472c":6,"012503337010340954":6,"016591251885369532":6,"01768052067852201":6,"018365897517264307":6,"020584567553255093":6,"02262443438914027":6,"022943297279580464":6,"025401507702392658":6,"025749215622633343":6,"026646556058320763":6,"026874115983026876":6,"02687880595658219":6,"027480255328356594":6,"0297029702970297":6,"030019493177387915":6,"030236252754573874":6,"031033712882339807":6,"03253182461103253":6,"03321432435356486":6,"03391812865497076":6,"033946251768033946":6,"040051679586563305":6,"04085733422638982":6,"041638758651484704":6,"0429367420517863":6,"04327599264308125":6,"047555257870060284":6,"04909560723514212":6,"050387596899224806":6,"06014421501147165":6,"06364922206506365":6,"06847545219638243":6,"08070175438596491":6,"09395711500974659":6,"10155857214680744":6,"1024":3,"10k":5,"127":0,"1330749354005168":6,"13801169590643275":6,"13bb4ed9f70c37253246c2051ef05fe4795f4fe":6,"17291806206742577":6,"1a18ae76468276b651c178926b380e4e9d607f5":6,"2018":6,"2019":5,"2020":5,"2020and":6,"2021":5,"2110783349721403":6,"21908471275559882":6,"224":5,"2342e1896c34cac33974473c5b52ac22d7182fe9":6,"253e8b127b833c3aa7d79e2b91ce030299a646d6":6,"25edad6781577dcb3ba715c8230416fb0d4c45c4":3,"27017":2,"29160382101558574":6,"2dd66bdf5849fe8d4a28d3355f0fc0a50b7f61e2":6,"32768":2,"41876cb7188cb3398572af71ff9d98d61f46c20b":6,"438":5,"55704c606666f41a73ac5ae0eabe582892aa163c":6,"58004d785a3ee08eac2f51ea4cbc44bba3a1ba22":6,"5a49d855f23b29d0a769d638a0944c0d35815ca9":6,"5th":5,"602979237":6,"648":5,"69864d92726be0d4b7f52fd4f32e38ad1f97974":6,"6th":5,"766f00c08dcac14353629c12125f05697eb58a2":6,"7d9ea9023b66a0ebc167f0dbb6ea8cd75d7b46f9":3,"8000":[0,6],"8001":[0,6],"8540897b645962964fd644242d4cc0032f024e86":3,"86e7181b3e449dd70dd9bd0eebcca5b73b432a8c":6,"8dd8fbc06d2810add7b2cfd637a78f90fa2e5e9":6,"9000":[0,3,6],"abstract":5,"case":3,"class":[0,1,2,3],"default":[0,2,3],"final":6,"float":[0,1,2],"function":0,"import":6,"int":[0,2,3],"long":3,"new":[2,6],"return":[0,1,2,3,6],"super":3,"true":[2,3,6],"try":6,And:6,NNS:3,The:[5,6],Then:6,With:5,__number__0:6,__person__0:6,__repr__:6,_id:2,a8eec375e86e467cf868a03f64ecd1f9d1fe5fe:6,about:6,abov:6,access:6,accommod:3,acl:5,acquisit:5,action:5,added:6,addit:6,address:0,adjp:3,aggreg:6,akbc:5,all:[0,2,3,6],also:[5,6],amaz:6,amod:3,analog:5,analysi:[3,5],ancient:6,angl:5,anim:6,annot:[3,5],annual:5,appli:2,april:5,area:6,arg:0,argpars:0,armi:3,artifici:5,aser:[1,2,3,4,7],aser_conceptu:[1,6],aser_extractor:[4,5,6],aser_kg_dir:[0,6],aser_pip:6,asercli:[0,6],aserconcept:[0,1,2],aserconceptconnect:[2,6],aserconceptinstancepair:2,aserconcpet:2,aserdatabas:0,aserextractor:6,aserkgconnect:2,aserserv:0,asersink:0,aserwork:0,asia:5,associ:[0,5],atom:5,attent:6,autom:5,aux:3,avail:[0,6],b875a4b94675e057fa643beb334e071e4ddf3760:6,back:6,backend:2,bake:6,base:[0,1,2,3,5,6],base_corenlp_port:[0,6],baseaserconceptu:1,baseaserextractor:3,basedbconnect:2,baseeventualityextractor:3,baserelationextractor:3,becaus:6,been:[2,6],befor:6,besid:5,between:[0,5,6],bin:5,boat:3,bool:[0,2,3],both:[0,3],bound:0,bread:6,breakfast:6,bridg:5,build:[2,5,6],build_concept_rel:6,built:2,busi:6,bys:2,cach:2,call:5,came:6,can:[0,6],cane:5,cannot:3,carbohydr:6,ccomp:3,centric:5,champion:6,changlong:5,characterist:6,check:[0,6],chees:6,chen:5,choic:0,chunksiz:2,ciabatta:6,cid2concept:6,cid:[0,2],cid_to_filter_scor:6,clase:0,client:[4,5,7],clone:6,close:[0,1,2,3,6],co_occurr:[3,6],cocolm:5,code:[5,6],column:2,column_typ:2,com:[0,6],command:6,commonsens:5,complex:5,comput:5,concept1:0,concept2:0,concept:[0,1,2,5,6],concept_instance_pair:[2,6],concept_kg_dir:[0,6],concept_method:[0,6],concept_str:2,concept_topk:[0,6],concept_weight_threshold:6,conceptu:[0,2,4,5,6],conceptuali:5,conceptualizatoin:6,conceptualize_eventu:[0,6],conceptualize_from_text:1,concurr:0,condit:6,conduct:5,confer:[5,6],connect:[2,6],consid:2,consol:6,constitu:3,construct:5,contain:[2,3,5],contamin:6,content:2,context:[0,3],context_window_s:3,contrari:6,contrast:6,cook:6,cop:3,core:[5,6],core_kg_dir:6,corenlp:[0,3,6],corenlp_path:[0,3,6],corenlp_port:[3,6],correspond:[0,2,3,6],could:3,creat:2,create_t:2,crust:6,current:6,dac82e8bc75bd0221e86194e6e3cd607a72aba7:6,dai:6,daiya:6,dan:5,daniel:5,data:[0,6],databas:[4,5,6],datatype3:2,db_connect:[4,5],db_path:2,db_sender_addr_list:0,definit:6,denser:6,depend:[3,5],det:3,dict:[0,2,3],dictionari:3,ding:5,directori:[0,6],disco:5,discours:[3,5,6],discourseaserextractor:[3,6],discourseeventualityextractor:3,discourserelationextractor:3,disk:3,dobj:3,dong:5,down:6,download:[0,6],downloaddata:6,drop:3,dure:6,e8809e959614713c0622e23b0ab5dc06e2f2bf46:6,each:[2,6],edg:5,edu:6,egg:6,eid:[0,2],emnlp:5,empir:5,employe:6,enhanc:5,enrich:5,entail:5,evalu:5,event:2,eventu:[0,1,2,3,5,6],eventuality1:0,eventuality2:0,eventuality_conceptu:[4,5],eventuality_extractor:[4,5],eventuality_frequency_threshold:6,eventuality_output_format:3,eventuality_threshold_to_conceptu:6,exact:[0,2],exact_match_concept:0,exact_match_eventu:0,excipi:6,excit:6,exist:2,experi:6,extract:[0,3,5,7],extract_eventu:[0,6],extract_eventualities_and_rel:0,extract_eventualities_from_parsed_result:3,extract_eventualities_from_text:3,extract_from_parsed_result:3,extract_from_text:[3,6],extract_rel:0,extract_relations_from_parsed_result:3,extract_relations_from_text:3,extractal:6,extractor:[4,5,6],factor:6,fals:[2,3,6],fang:5,featur:6,fetch:[0,6],fetch_related_concept:[0,6],fetch_related_eventu:[0,6],file:[0,3,6],file_nam:3,file_path:0,find:[3,6],finish:6,first:6,flavor:6,follow:[3,6],food:6,forget:6,format:3,forward:0,four:6,fresh:6,freshli:6,friend:5,friendli:6,from:[0,2,3,5,6],fudan:5,full:[5,6],full_kg_dir:6,gap:5,gener:5,generate_sid:3,get:[0,2,5,7],get_column:2,get_concept_column:2,get_concept_given_str:2,get_concept_instance_pair_column:2,get_concepts_by_kei:2,get_concepts_given_eventu:2,get_concepts_given_str:2,get_eventualities_by_kei:2,get_eventualities_given_concept:2,get_eventuality_column:2,get_exact_match_concept:2,get_exact_match_eventu:2,get_exact_match_rel:2,get_parsed_paragraphs_from_fil:3,get_parsed_sentence_and_context:3,get_partial_match_eventu:2,get_related_concept:2,get_related_eventu:2,get_relation_column:2,get_relations_by_kei:2,get_rows_by_kei:2,get_update_op:2,git:6,github:[3,6],give:6,given:[0,1,2,3,6],going:6,good:6,got:6,grain:[2,6],graph:[5,6],great:6,had:6,handl:3,handle_conceptualize_eventu:0,handle_exact_match_concept:0,handle_exact_match_concept_rel:0,handle_exact_match_eventu:0,handle_exact_match_eventuality_rel:0,handle_extract_eventu:0,handle_extract_eventualities_and_rel:0,handle_extract_rel:0,handle_fetch_related_concept:0,handle_fetch_related_eventu:0,handle_parse_text:0,hantian:5,haoji:5,haowen:5,haoyu:5,have:[2,6],head:0,help:[0,5],here:6,higher:5,highlight:6,hkust:[5,6],home:[0,2,3,6],hongm:5,hous:6,how:[0,2,6],html:[2,3,6],http:[0,2,3,6],ids:2,ijcai:5,implement:6,in_ord:[3,6],includ:[0,2,3,5],induct:5,inform:[2,6],ingredi:6,init:2,initi:2,inorgan:6,input:3,insert:2,insert_concept:2,insert_concept_instance_pair:2,insert_eventu:2,insert_rel:2,insert_row:2,instal:[5,7],instanc:[2,3,6],intellig:5,interest:6,intern:5,iobj:3,is_port_occupi:0,is_pronoun:1,is_seed_concept:1,item:6,its:3,jalapeno:6,jiefu:5,joint:5,json:3,juic:6,keep:6,kei:[2,6],kept:0,kg_connect:[4,5,6],khashabi:5,kind:6,kneader:6,knowcomp:6,knowledg:5,known:5,kun:5,languag:5,larg:5,left_context:3,lemma:3,length:3,let:6,leung:5,level:5,lifeng:5,like:6,line:[3,6],line_no:3,linguist:5,link:2,list:[0,1,2,3,6],littl:6,liu:5,load:[2,6],local:[5,7],localhost:[0,2],locat:6,log:[0,6],log_path:[0,6],look:6,made:6,mai:5,make:6,mani:[0,2,6],march:5,match:[0,2],max:3,max_len:3,mean:0,meaning:6,meantim:3,meat:6,meet:5,memori:2,mention:3,mesh:6,messag:0,method:[0,3,5],microsoft:[0,5,6],million:5,millisecond:0,minimum:2,minut:6,mkdir:6,mode:[2,5,7],model:5,mongodb:2,mongodbconnect:2,more:[5,6],move:6,msg:0,msra:5,much:6,muhao:5,multipl:[2,6],multiprocess:0,mushroom:6,mutian:5,n_concurrent_back_sock:[0,6],n_extractor:6,n_worker:[0,6],name:[2,3],namespac:0,natur:[5,6],necessari:2,need:6,neighbor:6,ner:[1,3],nest:6,next:6,nice:6,nlp:[5,6],nmod:3,node:5,none:[0,1,2,3],now:[5,6],nsubj:3,num:0,number:[0,3],object:[0,1,2,3],occupi:0,octob:5,omc:5,one:0,onli:[2,6],open:6,oper:2,opt:0,option:6,orang:6,order:[2,3,5,6],order_bi:2,org:2,origin:2,other:[0,3,6],out:6,output:[0,3,6],output_format:3,over:5,overridden:0,overview:5,owner:6,packag:6,pair:[0,1,2],pan:5,para_eventu:3,paragraph:[0,3],paramet:[0,1,2,3],pars:[0,3,6],parse_raw_fil:3,parse_text:[0,3],parsed_read:[4,5],parsed_result:3,parsedread:3,parser:3,partial:2,pastri:6,path:[0,2,3],patient:6,pattern:5,pdf:5,perfectli:6,person:6,pie:6,pip:6,pipe:[5,7],pipelin:[5,7],pipeplin:6,place:6,pleas:[2,3,6],port:[0,3,6],port_out:[0,6],pos_tag:3,poss:3,possibl:0,power:6,pprint:6,ppt:5,predict:[0,5],predict_concept_rel:[0,6],predict_eventuality_rel:[0,6],prefer:5,present:5,previous:5,print:6,probas:[0,1,5,6],probase_path:[0,1,6],probase_topk:[1,6],probaseaserconceptu:[1,6],process:[0,3,5,6],processed_dir:6,processed_path:3,product:6,properti:2,protein:6,provid:[0,2,6],prp:3,punct:3,push:0,python:6,raw:[0,3,6],raw_dir:6,raw_path:3,read:3,reader:3,readi:6,reason:5,receiv:0,recev:0,refer:[2,3],relat:[0,2,3,6],relation_extractor:[4,5],relation_output_format:3,relation_weight_threshold:6,repo:6,report:5,represent:[2,6],request:[0,6],requir:6,research:[0,5,6],reserv:0,result:[0,3,5,6],retriev:[0,2,3,6],revers:2,review:6,rid:[0,2],right_context:3,rmtree:6,role:5,root:3,roth:5,row:2,rtype:3,rule:[1,3],run:[0,6],rxtractor:3,safe:[0,1,2,3],salt:6,same:[0,6],sausag:6,sbar:3,scale:5,score:[0,1],season:6,see:6,seed:0,seedruleaserconceptu:[1,6],seedruleaserextractor:[3,6],seedruleeventualityextractor:3,seedrulerelationextractor:3,select:[2,5],select_row:2,send:0,sentenc:[3,6],sentence_pars:3,sentence_read:[4,5],sentencepars:3,septemb:5,sequenc:5,serv:0,server:[4,5,7],set:[5,6],setup:6,sever:2,shang:5,should:[0,6],show:6,shown:6,shutil:6,sid:3,similar:2,similarli:6,sink_addr:0,sink_addr_receiver_addr:0,size:3,skeleton_word:2,skip_word:3,smell:6,socket:0,sockets_ipc_bind:0,softwar:6,some:[2,6],song:5,sort:2,sourc:[0,1,2,3,6],specif:2,spinach:6,sqlite:2,sqlitedbconnect:2,squeez:6,stanford:[3,6],stanfordcorenlp:0,stanfordnlp:[3,6],starchi:6,start:[0,5,7],step:[5,7],store:[0,3],str:[0,1,2,3],string:2,structur:5,sub:[0,5],subscrib:0,substanc:6,succe:6,sugar:0,suggest:2,suit:2,suitabl:3,summer:5,support:6,sure:3,surpris:6,sweet:6,synchron:3,syntax_tree_cach:3,system:6,t9rdyhnkv94tfcd8tkvdzf9cewnfdaf:6,tabl:2,table_nam:2,tail:0,technic:5,text:[0,3,6],thei:6,thi:[2,3,6],think:6,three:6,threshold:2,tianq:5,time:6,timeout:0,toast:6,togeth:6,token:[3,6],top:[0,6],top_n:2,total:5,toward:5,town:6,transfer:5,transomc:5,triplet:3,tupl:[0,1,2,3],two:[0,2,6],txt:[0,6],type:[0,1,2,3],union:[0,2,3],until:6,updat:2,update_column:2,update_op:2,update_row:2,urllib:6,urlretriev:6,usag:[0,5],use:[1,2,6],used:2,using:[0,5],util:6,valu:[2,6],vbp:3,vegan:6,verb:2,veri:6,via:[0,5],video:5,wait:6,wang:5,want:[2,6],wasn:6,wasnt:6,web:5,weight:5,weiqi:5,well:6,went:6,were:6,what:6,whether:[0,2,3],which:[0,2,3,6],whose:2,wild:6,wilfr:5,window:3,wing:5,within:6,without:2,word:[1,2,3],work:5,worker:0,worker_addr_list:0,would:6,write:[2,6],www:[2,5,6],xin:5,xliucr:[2,3],yangqiu:5,yelp:6,you:[0,2,3,6],your:[3,6],zhang:5,zip:6,zip_ref:6,zipfil:6,zmq:0},titles:["Server/Client","Conceptualization","Database","Extractor","API Reference","ASER (Activities, States, Events, and their Relations)","Get Started","Tutorial"],titleterms:{"public":5,activ:5,api:[3,4,5],argument:0,aser:[0,5,6],aser_extractor:3,client:[0,6],conceptu:1,data:5,databas:2,db_connect:2,event:5,eventuality_conceptu:1,eventuality_extractor:3,extract:6,extractor:3,get:6,index:5,instal:6,introduct:5,kg_connect:2,local:6,mode:6,name:0,parsed_read:3,pipe:6,pipelin:6,project:5,refer:[4,5],relat:5,relation_extractor:3,sentence_read:3,server:[0,6],start:6,state:5,step:6,talk:5,tutori:[5,7]}})