import { Hymn, HymnLyrics } from './types.model';

/**
 * Stores hymn databases
 */
export abstract class Dictionary {

  protected constructor() {}
  /**
   * Dictionary of hymn number and name
   */
  protected readonly index: Hymn = {
    '001':'CANTAD ALEGRES AL SEÑOR','002':'DA GLORIA AL SEÑOR','003':'UNIDOS EN ESPÍRITU','004':'ALABANZAS SIN CESAR','005':'A TI GLORIOSO DIOS','006':'HOSANNA','007':'OH DIOS MI SOBERANO REY','008':'SUENEN DUCES HIMNOS','009':'ALABEMOS AL SEÑOR','010':'ALABA AL DIOS DE ABRAHAM','011':'ALMA BENDICE AL SEÑOR','012':'TODOS JUNTOS REUNIDOS','013':'AL DIOS INVISIBLE','014':'ENGRANDECIDO SEA DIOS','015':'LOÁMOSTE ¡OH DIOS!','016':'A NUESTRO PADRE DIOS','017':'OH PADRE ETERNO DIOS','018':'LOAD AL PADRE','019':'PADRE NUESTRO','020':'A DIOS EL PADRE','021':'GLORIA SEA AL PADRE','022':'JEHOVÁ ESTÁ EN SU SANTO TEMPLO','023':'SILENCIO SILENCIO','024':'IMPLORAMOS TU PRESENCIA','025':'SIENTO LA PRESENCIA DEL SEÑOR','026':'AQUÍ REUNIDOS','027':'¡OH PASTOR DIVINO, ESCUCHA!','028':'TU PUEBLO JUBILOSO','029':'DEL CULTO EL TIEMPO LLEGA','030':'ABRE MIS OJOS','031':'¡OH, SEÑOR! AL ORAR','032':'NOS REUNIMOS EN TU SANTUARIO','033':'TU PRESENCIA PADRE AMANTE, INVOCAMOS','034':'EN MOMENTOS ASÍ','035':'OYE, OH SEÑOR','036':'¡OH, DIOS, QUE OYES CADA ORACIÓN!','037':'DIOS OS GUARDE','038':'QUE DIOS TE GUARDE','039':'DESPIDE HOY TU GREY','040':'SHALOM','041':'GRACIA, AMOR Y COMUNIÓN','042':'QUEDA, SEÑOR','043':'AGUA DE VIDA','044':'DESPÍDENOS CON TU BENDICIÓN','045':'DESPUÉS, SEÑOR','046':'HOY AMANECE','047':'POR LA MAÑANA','048':'OH DIOS, SI HE OFENDIDO UN CORAZÓN','049':'CRISTO, YA LA NOCHE CIERRA','050':'BAJA EL SOL','051':'NUESTRO SOL SE PONE YA','052':'SEÑOR JESÚS, EL DÍA YA SE FUE','053':'¡OH AMOR DE DIOS!','054':'TAN BUENO ES DIOS','055':'GRANDE, SEÑOR, ES TU MISERICORDIA','056':'DE TAL MANERA AMÓ','057':'MI DIOS ME AMA','058':'GRANDE ES EL AMOR DIVINO','059':'MIRAD QUÉ AMOR','060':'¡SANTO! ¡SANTO! ¡SANTO! TU GLORIA LLENA','061':'SANTO, SANTO, SANTO, DIOS OMNIPOTENTE','062':'SANTO, SANTO, SANTO, SANTO ES EL SEÑOR','063':'AL REY ADORAD','064':'YO CANTO EL PODER DE DIOS','065':'EL MUNDO ES DE MI DIOS','066':'¿SABES CUÁNTOS?','067':'¡SEÑOR, YO TE CONOZCO!','068':'TODO LO QUE HA CREADO DIOS','069':'SEÑOR, MI DIOS','070':'¡NUESTRO DIOS REINA!','071':'CADA COSA HERMOSA','072':'FUE UN MILAGRO','073':'LA CREACIÓN','074':'HIMNO AL CREADOR','075':'GRANDE ES JEHOVÁ','076':'ETERNO DIOS, MI CREADOR','077':'SEA EXALTADO','078':'¡AL MUNDO PAZ!','079':'SE OYE UN CANTO EN ALTA ESFERA','080':'VENID, PASTORCILLOS','081':'NOCHE DE PAZ','082':'YA REPICAN LAS CAMPANAS','083':'LA PRIMERA NAVIDAD','084':'VE, DILO EN LAS MONTAÑAS','085':'ALLÁ EN EL PESEBRE','086':'A MEDIANOCHE EN BELÉN','087':'VENID, FIELES TODOS','088':'OH, ALDEHUELA DE BELÉN','089':'CRISTIANOS, ALEGRAOS HOY','090':'SOMOS DEL ORIENTE','091':'¿QUÉ NIÑO ES ESTE?','092':'ÁNGELES CANTANDO ESTÁN','093':'HUBO UNO QUE QUISO','094':'SANGRÓ MI SOBERANO DIOS','095':'UN DÍA','096':'AL CONTEMPLAR LA EXCELSA CRUZ','097':'EN EL MONTE CALVARIO','098':'ROSTRO DIVINO','099':'JAMÁS PODRÁ ALGUIEN SEPARARNOS','100':'¡DULCES MOMENTOS!','101':'CABEZA SACROSANTA','102':'CORDERO DE DIOS','103':'JESÚS RESUCITADO','104':'LA TUMBA LE ENCERRÓ','105':'CRISTO HA RESUCITADO','106':'TUYA ES LA GLORIA','107':'CANTO EL GRAN AMOR','108':'AMIGO FIEL ES CRISTO','109':'UN BUEN AMIGO TENGO YO','110':'CRISTO ES EL MEJOR AMIGO','111':'COMO JESÚS NO HAY OTRO AMIGO','112':'NINGÚN OTRO ME AMÓ CUAL CRISTO','113':'AMOR QUE NO ME DEJARÁS','114':'DIME LA ANTIGUA HISTORIA','115':'¡OH, CUÁN GRANDE AMOR!','116':'CRISTO ESTÁ A MI LADO','117':'NO SÉ POR QUÉ','118':'CUANDO ESTÉS CANSADO Y ABATIDO','119':'DE SU TRONO, MI JESÚS','120':'¡CUÁNTO ME ALEGRA!','121':'ES JESUCRISTO LA VIDA, LA LUZ','122':'DIVINO PASTOR','123':'¡CUÁNTO NOS AMA JESÚS!','124':'AMA EL PASTOR SUS OVEJAS','125':'INFINITO AMOR DE CRISTO','126':'ABRIGADAS Y SALVAS EN EL REDIL','127':'CRISTO, NOMBRE DULCE','128':'¡TU NOMBRE ES DULCE, BUEN JESÚS!','129':'CUAL JESÚS NO HAY OTRO NOMBRE','130':'CRISTO, CRISTO, CRISTO','131':'BENDITO ES EL NOMBRE DE JESÚS','132':'DULCE, HERMOSO NOMBRE ES JESÚS','133':'VENID, CON CÁNTICOS VENID','134':'CUAL MIRRA FRAGANTE','135':'CRISTO, NOMBRE SUBLIME','136':'¡OH, CUÁNTO AMO A CRISTO!','137':'DE JESÚS EL NOMBRE INVOCA','138':'DE MI AMANTE SALVADOR','139':'LA TIERNA VOZ DEL SALVADOR','140':'TE QUIERO, TE QUIERO','141':'¡ALABADLE!','142':'VENID, CANTAD DE GOZO EN PLENITUD','143':'DIGNO ERES TÚ','144':'MI SALVADOR','145':'CON ACENTOS DE ALEGRÍA','146':'NI EN LA TIERRA','147':'A DIOS SEA GLORIA','148':'SOLO CRISTO','149':'JUNTO A LA CRUZ DO JESÚS MURIÓ','150':'A CRISTO DOY MI CANTO','151':'POR ESO LO AMO','152':'A TI, JESÚS','153':'VED A CRISTO','154':'DAD GLORIA AL CORDERO REY','155':'EN SION JESÚS HOY REINA','156':'A CRISTO CORONAD','157':'¡MAJESTAD!','158':'AMANECE YA LA MAÑANA DE ORO','159':'YO ESPERO LA MAÑANA','160':'VIENE OTRA VEZ NUESTRO SALVADOR','161':'¡OH! CUÁN GRATAS LAS NUEVAS','162':'EN PRESENCIA ESTAR DE CRISTO','163':'CRISTO VIENE, ESTO ES CIERTO','164':'JESÚS PRONTO VOLVERÁ','165':'¡VENDRÁ EL SEÑOR!','166':'SIERVOS DE DIOS, LA TROMPETA TOCAD','167':'¿QUIÉN EN DESLUMBRANTE GLORIA?','168':'EL REY QUE VIENE','169':'CUANDO SUENE LA TROMPETA','170':'LA SEGUNDA VENIDA DE CRISTO','171':'¿HAS OÍDO EL MENSAJE?','172':'PROMESA DULCE','173':'¿SERÁ AL ALBOR?','174':'MIRA LOS HITOS','175':'VED A CRISTO, QUE SE ACERCA','176':'TÚ VERÁS AL REY VINIENDO','177':'LOS TRES MENSAJES ANGÉLICOS','178':'CONTEMPLÉ LA GLORIA','179':'¡CRISTO VIENE! AQUEL DÍA SE ACERCA','180':'SÍ, LO VEREMOS','181':'UNA ESPERANZA','182':'VEREMOS A CRISTO','183':'NO ME OLVIDÉ DE TI','184':'NUNCA TE RINDAS','185':'AL CIELO VOY','186':'HACE AÑOS ESCUCHÉ','187':'AUNQUE ANOCHEZCA','188':'GRAN ALEGRÍA','189':'CRISTO MUY PRONTO VENDRÁ','190':'SANTO ESPÍRITU DE CRISTO','191':'LA NUEVA PROCLAMAD','192':'LLENA MI SER','193':'DIOS NOS HA DADO PROMESA','194':'VIVE EN MÍ','195':'ABRE MIS OJOS A LA LUZ','196':'SANTO ESPÍRITU DE DIOS','197':'DULCE ESPÍRITU','198':'VEN, SEÑOR JESÚS','199':'MOVIDOS POR TU ESPÍRITU','200':'BAUTÍZANOS HOY','201':'CANCIÓN DEL ESPÍRITU','202':'DANOS EL FUEGO','203':'SANTO ESPÍRITU LLENA MI VIDA','204':'OH, CANTÁDMELAS OTRA VEZ','205':'DADME LA BIBLIA','206':'PADRE, TU PALABRA ES MI DELICIA','207':'DIOS NOS HABLA','208':'¡SANTA BIBLIA!','209':'LA BIBLIA NOS HABLA DE CRISTO','210':'HUYE CUAL AVE','211':'FIJA TUS OJOS EN CRISTO','212':'A TU PUERTA CRISTO ESTÁ','213':'TIERNO Y AMANTE, JESÚS NOS INVITA','214':'MIENTRAS JESÚS TE LLAMA','215':'CON VOZ BENIGNA TE LLAMA JESÚS','216':'DIOS AL PRÓDIGO LLAMA','217':'BIENVENIDA DA JESÚS','218':'A JESUCRISTO VEN SIN TARDAR','219':'TAN TRISTE Y TAN LEJOS DE DIOS','220':'ALLÁ LA PUERTA ABIERTA ESTÁ','221':'PUERTAS ABIERTAS ENCONTRARÁN','222':'DEL TRONO CELESTIAL','223':'OÍ LA VOZ DEL SALVADOR','224':'OÍ LA VOZ DEL BUEN JESÚS','225':'UN HOMBRE LLEGOSE DE NOCHE A JESÚS','226':'BUSCAD PRIMERO','227':'PRESTE OÍDOS EL HUMANO','228':'ME BUSCARÉIS Y ME HALLARÉIS','229':'¿HAS PENSADO LO QUE PUEDE COSTAR?','230':'ABRE TU CORAZÓN','231':'TODO EN EL ALTAR','232':'ENTRÉGATE EN ORACIÓN','233':'VEN A LA FUENTE DE VIDA','234':'¿TEMES QUE EN LA LUCHA?','235':'LA RAZÓN DE VIVIR','236':'A JESÚS ENTREGA TODO','237':'JESÚS HOY ESPERA ENTRAR EN TU SER','238':'YO ESCUCHO, BUEN JESÚS','239':'DE DIOS VAGABA LEJOS YO','240':'TE RUEGO, OH DIOS','241':'PERDÓN TE RUEGO, MI SEÑOR Y DIOS','242':'UNA ES, SEÑOR, MI PETICIÓN','243':'ENTREGO TODO A CRISTO','244':'PADRE, DIOS','245':'CÚMPLASE, OH CRISTO, TU VOLUNTAD','246':'TE QUIERO, MI SEÑOR','247':'YO TE SEGUIRÉ','248':'QUE MI VIDA ENTERA ESTÉ','249':'TAL COMO SOY','250':'PADRE, A TUS PIES ME POSTRO','251':'NO YO, SINO ÉL','252':'DEJO EL MUNDO','253':'TUYO SOY, JESÚS','254':'ANHELO SER LIMPIO','255':'OH CRISTO, TE ADORO','256':'JESÚS, YO HE PROMETIDO','257':'¡OH! VEN, TE INVITO, CRISTO','258':'TÚ DEJASTE TU TRONO','259':'MI ESPÍRITU, ALMA Y CUERPO','260':'JUNTO A LA CRUZ DE CRISTO','261':'SALVADOR, A TI ME RINDO','262':'LOS TESOROS DEL MUNDO','263':'ENTRA EN ESTE CORAZÓN','264':'UN DÍA MÁS POR CRISTO','265':'LA SENDA ANCHA DEJARÉ','266':'VIVO POR CRISTO','267':'A LA CRUZ DE CRISTO VOY','268':'PUEDO OÍR TU VOZ LLAMANDO','269':'PREFIERO A MI CRISTO','270':'MEDITAR EN JESÚS','271':'HOY ME LLAMA EL MUNDO EN VANO','272':'DE ESCLAVITUD','273':'TU VIDA, OH SALVADOR','274':'¿QUÉ TE DARÉ, MAESTRO?','275':'HUMILDE ORACIÓN','276':'CON NUESTRAS MENTES','277':'AMARTE MÁS','278':'¿PUEDE EL MUNDO VER A JESÚS EN MÍ?','279':'TRANSFÓRMAME A TU IMAGEN','280':'SER SEMEJANTE A JESÚS','281':'HE DECIDIDO SEGUIR A CRISTO','282':'¡BRILLA, JESÚS!','283':'VEN, SEÑOR JESÚS','284':'ME DICE EL SALVADOR','285':'CONFÍO EN JESUCRISTO','286':'HAY UNA FUENTE SIN IGUAL','287':'REY DE MI VIDA','288':'AL CONTEMPLARTE, MI SALVADOR','289':'¿QUÉ ME PUEDE DAR PERDÓN?','290':'FUENTE DE LA VIDA ETERNA','291':'PERDIDO, FUI A MI JESÚS','292':'POR FE EN CRISTO, EL REDENTOR','293':'¿QUIERES SER SALVO DE TODA MALDAD?','294':'EN JESÚS POR FE CONFÍO','295':'LAS MANOS, PADRE','296':'COMPRADO CON SANGRE POR CRISTO','297':'SALVADO CON SANGRE POR CRISTO','298':'AL CALVARIO, SOLO, JESÚS ASCENDIÓ','299':'HAY VIDA EN MIRAR','300':'LEJOS DE MI PADRE DIOS','301':'CRISTO ES MI AMANTE SALVADOR','302':'GRATO ES CONTAR LA HISTORIA','303':'SUBLIME GRACIA','304':'MI REDENTOR, EL REY DE GLORIA','305':'MARAVILLOSA SU GRACIA ES','306':'LLEGÓ JESÚS','307':'ROCA DE LA ETERNIDAD','308':'DIOS DESCENDIÓ','309':'LA VOZ DE JESÚS','310':'CRISTO, CENTRO DE MI VIDA','311':'CUANDO JUNTE JESÚS LAS NACIONES','312':'DÍA GRANDE VIENE','313':'LA HORA DEL JUICIO','314':'CRISTO, REY OMNIPOTENTE','315':'EL JUICIO EMPEZÓ','316':'HAY UN MUNDO FELIZ MÁS ALLÁ','317':'EN EL HOGAR DO NUNCA HABRÁ','318':'EN LA MANSIÓN DE MI SEÑOR','319':'CUANDO MI LUCHA TERMINE AL FINAL','320':'JAMÁS SE DICE “ADIÓS” ALLÁ','321':'ALLÁ SOBRE MONTES','322':'BUSQUEMOS LA PATRIA','323':'HE DE CONOCERLE ENTONCES','324':'PRONTO YO VERÉ A JESÚS','325':'NO PUEDE EL MUNDO SER MI HOGAR','326':'UN DÍA YO HE DE FALTAR','327':'JERUSALÉN, MI AMADO HOGAR','328':'¿NOS VEREMOS JUNTO AL RÍO?','329':'EN LA CÉLICA MORADA','330':'HAY UN FELIZ EDÉN','331':'ALMA BENDICE AL SEÑOR','332':'EN LA TIERRA ADONDE IRÉ','333':'AUNQUE EN ESTA VIDA','334':'CUÁNTO ANHELO LLEGAR','335':'MI HOGAR CELESTIAL','336':'DEL BELLO PAÍS HE LEÍDO','337':'NUNCA MÁS ADIÓS','338':'LAS RIBERAS DE DICHA INMORTAL','339':'A VECES OIGO UN HIMNO','340':'¡OH, QUÉ MÚSICA DIVINA!','341':'MÁS CERCA DEL HOGAR','342':'DESPUÉS DEL RÍO','343':'QUIERO LLEGAR A SER PARTE DEL CIELO','344':'ENTONAD UN HIMNO','345':'CANTA, Y TUS PENAS SE IRÁN','346':'¡FELIZ EL DÍA!','347':'CON GOZO CANTO AL SEÑOR','348':'DICHA GRANDE','349':'GRAN GOZO HAY EN MI ALMA HOY','350':'ANDANDO EN LA LUZ DE DIOS','351':'YO TENGO GOZO','352':'GOZAOS, CRISTO ES REY','353':'SUENAN MELODÍAS EN MI SER','354':'VOY CAMINANDO','355':'YO VOY FELIZ','356':'GOZO ES CONOCER A CRISTO','357':'JESÚS, TÚ ERES MI ALEGRÍA','358':'EN EL SENO DE MI ALMA','359':'REGOCIJAOS SIEMPRE','360':'EN JESUCRISTO, MÁRTIR DE PAZ','361':'PERCIBE MI ALMA UN SON','362':'CON SIN IGUAL AMOR','363':'HAY UN CANTO NUEVO EN MI SER','364':'JESÚS DA PAZ','365':'ELEVEMOS AL SEÑOR','366':'EN CRISTO HALLO AMIGO','367':'GRACIAS, DIOS','368':'PADRE AMADO','369':'GRATITUD Y ALABANZA','370':'POR LA EXCELSA MAJESTAD','371':'JESÚS TE AMA','372':'¿CÓMO AGRADECER?','373':'MI REDENTOR ES CRISTO','374':'DULCE COMUNIÓN','375':'SED PUROS Y SANTOS','376':'DULCE ORACIÓN','377':'A LOS PIES DE JESUCRISTO','378':'¡OH, QUÉ AMIGO NOS ES CRISTO!','379':'HABLA, SEÑOR, A MI ALMA','380':'ANDO CON CRISTO','381':'ALMA BENDICE AL SEÑOR','382':'A SOLAS AL HUERTO YO VOY','383':'HABLA A TU DIOS DE MAÑANA','384':'EL JARDÍN DE ORACIÓN','385':'HABLANDO CON JESÚS','386':'HAY UN LUGAR DE PAZ','387':'APARTE DEL MUNDO','388':'DEBO DECIR A CRISTO','389':'CONVERSAR CON JESUCRISTO','390':'SOY YO, SEÑOR','391':'¿LE IMPORTARÁ A JESÚS?','392':'HAY QUIEN VELA MIS PISADAS','393':'MI FE CONTEMPLA A TI','394':'¡CUÁN FIRME CIMIENTO!','395':'¡OH, CUÁN DULCE ES FIAR EN CRISTO!','396':'¡OH QUÉ SALVADOR!','397':'OH BUEN SEÑOR, VELADA ESTÁ','398':'CUANDO SOPLA AIRADA LA TEMPESTAD','399':'EN ESTOS TIEMPOS','400':'CASTILLO FUERTE ES NUESTRO DIOS','401':'ETERNA ROCA ES MI JESÚS','402':'¡OH!, SALVO EN LA ROCA','403':'CUANDO EN LA LUCHA','404':'A CUALQUIERA PARTE','405':'SÉ QUIÉN ES JESÚS','406':'JESÚS ES MI LUZ','407':'MUY CERCA DE MI REDENTOR','408':'CRISTO ME AYUDA POR ÉL A VIVIR','409':'SI MI DÉBIL FE FLAQUEARE','410':'CUANDO TE QUIERO','411':'BAJO SUS ALAS','412':'TODAS LAS PROMESAS','413':'SI LA CARGA ES PESADA','414':'¡OH, BUEN MAESTRO, DESPIERTA!','415':'SALVO EN LOS TIERNOS BRAZOS','416':'¡OH!, TENGA YO LA ARDIENTE FE','417':'DAME LA FE DE MI JESÚS','418':'PADRE, YO VENGO A TI','419':'POR LA JUSTICIA DE JESÚS','420':'NUNCA DESMAYES','421':'CARIÑOSO SALVADOR','422':'NADA PUEDE YA FALTARME','423':'PERTENEZCO A MI REY','424':'¿CÓMO PODRÉ ESTAR TRISTE?','425':'DÍA EN DÍA','426':'TENGO PAZ','427':'LLEVA TODO TU PESAR A CRISTO','428':'SU OVEJA SOY','429':'ÉL PUEDE','430':'SOLO NO ESTOY','431':'A ÉL MIS PROBLEMAS LE DOY','432':'COMO EL CIERVO','433':'CONMIGO MARCHA UN ÁNGEL','434':'JESÚS ES MI VIDA','435':'DIOS SABE, DIOS OYE, DIOS VE','436':'ÉL VIVE HOY','437':'TU PRESENCIA, PADRE AMADO, DA CONSUELO','438':'MIRA HACIA DIOS','439':'¡OH!, QUIÉN PUDIERA ANDAR CON DIOS','440':'QUIERO, JESÚS, CONTIGO ANDAR','441':'JESÚS, TE NECESITO','442':'¡OH! ¡MAESTRO Y SALVADOR!','443':'HAY UN LUGAR DO QUIERO ESTAR, CERCA DE TI','444':'NO ME PASES','445':'MÁS DE JESÚS','446':'MÁS CERCA, OH DIOS, DE TI','447':'MÁS SANTIDAD DAME','448':'SALVADOR, MI BIEN ETERNO','449':'CRISTO, MI PILOTO SÉ','450':'¡OH JESÚS, PASTOR DIVINO!','451':'CERCA, MÁS CERCA','452':'CONTIGO QUIERO ANDAR','453':'CÓMO SER CUAL CRISTO','454':'YO QUISIERA ANDAR CON CRISTO','455':'MI MANO TEN','456':'COMO LA MUJER DE JUNTO AL POZO','457':'MORE EN MÍ LA BELLEZA DEL SALVADOR','458':'ORAD POR MÍ','459':'HÁBLAME MÁS DE CRISTO','460':'QUIERO ESTAR CERCA DE CRISTO','461':'A TU LADO ANHELO ESTAR','462':'DAME A CRISTO','463':'MI ORACIÓN','464':'VEN, INSPÍRANOS','465':'VEN JUNTO A MÍ','466':'GUÍAME, ¡OH SALVADOR!','467':'¡SIEMPRE EL SALVADOR CONMIGO!','468':'PASO A PASO DIOS ME GUÍA','469':'JESÚS ME GUÍA','470':'GUÍAME, DIOS','471':'CONDÚCEME, MAESTRO','472':'JESÚS, MI GUÍA ES','473':'HÁBLAME, Y HABLARÉ','474':'¿QUÉ ME IMPORTAN?','475':'EL CAMINO ES ESCABROSO','476':'¿MUY LEJOS EL HOGAR ESTÁ?','477':'LOS QUE AMAN AL SEÑOR','478':'SÉ FIEL SIEMPRE, HERMANO','479':'DE LA MANO, SEÑOR','480':'DIGNO ERES, OH SEÑOR','481':'VOY AL CIELO','482':'QUIERO CANTAR','483':'CUANDO AL CIELO LLEGUEMOS','484':'BUSCA AL SEÑOR','485':'UNIDOS EN VERDAD','486':'EN LOS PASOS DE JESÚS','487':'CRISTO, ERES JUSTO REY','488':'AL ANDAR CON JESÚS','489':'SOLO ANHELO, CRISTO AMADO','490':'MEJOR QUE LOS SACRIFICIOS','491':'LEVÁNTATE, CRISTIANO','492':'¡TRABAJAD! ¡TRABAJAD!','493':'HOY QUIERO TRABAJAR CONTIGO','494':'CERCA UN ALMA AGOBIADA ESTÁ','495':'MI DEBER','496':'SUS MANOS SOMOS','497':'MANOS','498':'PUEDES DEMOSTRAR CON TUS MANOS','499':'JESÚS ANDUVO POR AQUÍ','500':'HAZME TU SIERVO','501':'MI VIDA AL SERVICIO DE DIOS','502':'BRILLA EN EL SITIO DONDE ESTÉS','503':'OH DIOS, QUE DESEAS LA VIDA','504':'SEÑOR DE TODOS','505':'HIJO DEL REINO','506':'¡DE PIE, DE PIE, CRISTIANOS!','507':'TENTADO, NO CEDAS','508':'CONTENDAMOS SIEMPRE POR NUESTRA FE','509':'¡FIRMES! ¡FUERTES!','510':'¿QUIÉN ESTÁ POR CRISTO?','511':'MARCHARÉ EN LA DIVINA LUZ','512':'NUNCA ESTÉIS DESANIMADOS','513':'HONRA AL HOMBRE DE VALOR','514':'¡DESPERTAD, DESPERTAD, OH CRISTIANOS!','515':'DESPLIEGUE EL CRISTIANO SU SANTA BANDERA','516':'¡FIRMES Y ADELANTE!','517':'DE PIE, OH GREY DE DIOS','518':'JESÚS ESTÁ BUSCANDO VOLUNTARIOS HOY','519':'DESPIERTA, HERMANO, SIN DEMORAR','520':'¡ADELANTE! MANDA EL SEÑOR','521':'AL CRISTO VED','522':'SUENEN LAS PALABRAS','523':'LOS SABIOS DAN SU CIENCIA','524':'TRAÍAN EN SILENCIO PRESENTES AL SEÑOR','525':'CON GRATITUD, LLEGAMOS','526':'OH, MI PATRIA, TE PROMETO HOY','527':'SEÑOR JEHOVÁ, OMNIPOTENTE DIOS','528':'POR MONTAÑAS, MUY CANSADO','529':'IGLESIA DE CRISTO','530':'SOMOS UN PEQUEÑO PUEBLO MUY FELIZ','531':'LA FAMILIA DE DIOS','532':'SAGRADO ES EL AMOR','533':'CUÁN BUENO Y AGRADABLE','534':'EN TU NOMBRE COMENZAMOS','535':'LAS FAENAS TERMINADAS','536':'EN SOMBRAS DE LA TARDE','537':'SÁBADO SANTO','538':'HOY ES DÍA DE REPOSO','539':'¡OH, DÍA DELICIOSO!','540':'YA ASOMA EL SOL BRILLANTE','541':'SEÑOR, REPOSAMOS','542':'AMO TU SÁBADO','543':'NO TE OLVIDES NUNCA DEL DÍA DEL SEÑOR','544':'HOY EL SÁBADO GLORIOSO','545':'SANTO DÍA','546':'SANTO SÁBADO, BENDITO','547':'SÁBADO ES','548':'MI CORAZÓN SE LLENA DE ALEGRÍA','549':'YA EL FIN SE ACERCA','550':'DÍA SANTO DEL SEÑOR','551':'EMBAJADOR SOY DE MI REY','552':'¡OH!, CUÁNTO NECESITA','553':'¿OS PUSISTEIS A ARAR?','554':'CON CRISTO AVANZA HOY','555':'HOY GOZOSO MEDITO','556':'YO QUIERO SIEMPRE BRILLAR','557':'¿QUÉ ESTÁS HACIENDO POR CRISTO?','558':'AMA A TUS PRÓJIMOS','559':'NO TE DÉ TEMOR','560':'CRISTO ESTÁ BUSCANDO OBREROS','561':'OIGO DEL SEÑOR LA VOZ LLAMANDO','562':'ESPARCID LA LUZ DE CRISTO','563':'ESCUCHAD, JESÚS NOS DICE','564':'PRONTO LA NOCHE VIENE','565':'¡VE, VE OH SION!','566':'CENTINELAS DEL MAESTRO','567':'SI EN VALLES DE PELIGROS','568':'HAY LUGAR EN LA AMPLIA VIÑA','569':'ID Y PREDICAD EL EVANGELIO','570':'VOLUNTARIO DEL SEÑOR','571':'LA HISTORIA DE CRISTO CONTEMOS','572':'PESCADORES DE HOMBRES','573':'TE ENVÍO A TI','574':'TESTIMONIO','575':'TOCAD TROMPETA YA','576':'PROCLAMO HOY QUE SOY CRISTIANO','577':'YO QUIERO TRABAJAR','578':'EL PUEBLO QUE CONOCE A SU DIOS','579':'LA FUENTE VEO','580':'LAS AGUAS DEL BAUTISMO','581':'EL PAN DE VIDA SOY','582':'HOY VENIMOS CUAL HERMANOS','583':'LA CENA DE LA COMUNIÓN','584':'AMÉMONOS, HERMANOS','585':'DE RODILLAS PARTIMOS HOY EL PAN','586':'EN MEMORIA DE MÍ','587':'TE DEDICAMOS, OH SEÑOR','588':'VEN, ALMA QUE LLORAS','589':'PERFECTO AMOR','590':'GUÍA A TI, SEÑOR','591':'TODO ES BELLO EN EL HOGAR','592':'SI DIOS ESTÁ, ¡FELIZ HOGAR!','593':'HOGAR DE MIS RECUERDOS','594':'SEÑOR, GRACIAS POR MI HOGAR','595':'FELIZ HOGAR','596':'EDIFICAMOS FAMILIAS','597':'ORACIÓN POR UN NIÑO','598':'CRISTO, YO TE SEGUIRÉ','599':'EN ESTE BELLO DÍA','600':'CUANDO VENGA JESUCRISTO','601':'CUANDO LEO EN LA BIBLIA','602':'ES EL AMOR DIVINO','603':'YO TEMPRANO BUSCO A CRISTO','604':'BELLAS LAS MANITAS SON','605':'JESÚS TIENE TIEMPO','606':'LLAMA JESÚS, EL BUEN PASTOR','607':'NÍTIDO RAYO POR CRISTO','608':'CORAZONES SIEMPRE ALEGRES','609':'¡OH JÓVENES, VENID!','610':'ESCUCHAMOS TU LLAMADA','611':'OH, JUVENTUD DEL REY','612':'JESÚS TE NECESITA HOY','613':'HOY NOS TOCA TRABAJAR','614':'AMENES'
  };

  /**
   * Dictionary of hymn number and data
   */
  protected readonly hymnLyrics: HymnLyrics = {
    '001':{
      name: 'Cantad Alegres al Señor',
      lyrics: {
        '27': {ordinal: '1', text: 'Cantad alegres al Señor,\nmortales todos por doquier;\nservidle siempre con fervor,\nobedecedle con placer.'},
        '64': {ordinal: '2', text: 'Con gratitud canción alzad\nal Hacedor que el ser os dio;\nal Dios excelso venerad,\nque como Padre nos amó.'},
        '101': {ordinal: '3', text: 'Su pueblo somos, salvará\na los que busquen al Señor;\nninguno de ellos dejará;\nÉl los ampara con su amor.'}
      },
      authors: {
        writers: ['Tomás J. Gonzales Carvajal'], composers: ['John Hatton']
      },
      verses: 'Salmo 100:1-5'
    },
    '002':{
      name: 'Da gloria al señor',
      lyrics: {
        '18': {ordinal: '1', text: 'Da gloria al Señor, de rodillas adórale\nen la hermosura de su santidad,'},
        '33': {ordinal: '', text: 'tu plena obediencia cual oro ofreciéndole\ncon el incienso de grata humildad.'},
        '51': {ordinal: '2', text: 'La carga del mal deposita hoy a sus pies,\nla llevará sobre su corazón;'},
        '66': {ordinal: '', text: 'tus penas te quitará,\nlimpiando tus lágrimas,\nguiando tus pies a mayor bendición.'},
        '85': {ordinal: '3', text: 'En sus santos atrios adonde convídate,\naunque eres pobre no temas entrar;'},
        '100': {ordinal: '', text: 'la firme, constante fe y el puro, sencillo amor:\ntales ofrendas pon sobre el altar.'},
        '119': {ordinal: '4', text: 'Y cuando tus dones le entregues a tu Señor,\npor su Hijo amado los aceptará;'},
        '134': {ordinal: '', text: 'y tras noche lúgubre habrá aurora espléndida:\ngozo, alegría y paz te dará.'}
      },
      authors: {
        writers: ['John S.B. Monsell','(Vers Esp) Edgar L. Maxwell'], composers: ['Edwin Barnes']
      },
      verses: 'Salmo 29:2'
    },
    '003':{
      name: 'Unidos en espíritu',
      lyrics: {
        '10': {ordinal: '1', text: 'Unidos en espíritu al coro celestial,\ncantemos con los ángeles un cántico triunfal.'},
        '25': {ordinal: '', text: 'Y si vertimos lágrimas al frente de la cruz,\nrebose hoy el júbilo, pues vive el buen Jesús.'},
        '42': {ordinal: '2', text: 'Lo que en el triste Gólgota derrota pareció,\ndesde el sellado túmulo en triunfo se cambió.'},
        '58': {ordinal: '', text: 'Vencido el enemigo está, menguado su poder;\ny el mortal su súbdito ya no habrá de ser.'},
        '75': {ordinal: '3', text: 'Jesús, de gloria Príncipe, autor de nuestra paz,\nven, muéstranos benévolo tu esplendorosa faz.'},
        '91': {ordinal: '', text: 'Y acepta el dulce cántico de nuestra gratitud,\npor tu valiosa dádiva de la eternal salud.'}
      },
      authors: {
        writers: ['Juan B. Cabrera'], composers: ['Louis Spohr']
      },
      verses: 'Apocalipsis 5:11-13'
    },
    '004':{
      name: 'Alabanzas sin cesar',
      lyrics: {
        '11': {ordinal: '1', text: 'Alabanzas sin cesar entonemos al Señor;\nhimnos mil a su bondad entonemos con amor.'},
        '29': {ordinal: '', text: 'Él nos da la plenitud de su gracia celestial;\nes la fuente de salud para el infeliz mortal.'},
        '48': {ordinal: '2', text: 'Del pecado abrumador él nos vino a libertar;\nnos ofrece salvación, y nos llama sin cesar.'},
        '66': {ordinal: '', text: 'Ya podemos recorrer el camino terrenal\nsin temor hasta obtener nuestra herencia celestial.'},
        '85': {ordinal: '3', text: 'Y entretanto que el Señor nos reciba donde está,\nentonemos el loor que bondadoso aceptará.'},
        '103': {ordinal: '', text: 'Mientras huelle nuestro pie este mundo pecador,\nofrezcámosle con fe nuestro canto, nuestro amor.'},
      },
      authors: {
        writers: ['G. A. Sherwell'], composers: ['John B. Dykes']
      },
      verses: 'Salmo 34:1'
    },
    '005':{
      name: 'A ti, glorioso Dios',
      lyrics: {
        '10': {ordinal: '1', text: 'A ti, glorioso Dios, cantamos alabanzas;\nrendímoste honor por todas tus grandezas.'},
        '34': {ordinal: '', text: 'Nos das tu bendición en nuestra senda aquí;\nnos guiarás, Señor, a tu mansión allí.'},
        '61': {ordinal: '2', text: 'Ven siempre, oh gran Dios, muy cerca de nosotros;\ncon celo y con fervor queremos ir a otros.'},
        '85': {ordinal: '', text: 'Tu brazo protector del mal nos guardará;\nen lucha y aflicción consuelo nos será.'},
        '107': {ordinal: '3', text: 'Oh Padre, eterno Dios, cantámoste loores,\ny al Hijo Redentor, Señor de los señores,'},
        '131': {ordinal: '', text: 'y al Santo Espíritu, el gran Consolador:\nal grande, trino Dios cantamos con fervor.'}
      },
      authors: {
        writers: ['Martin Rinkart','(Vers Esp) Walton J. Brown'], composers: ['Johann Crüger']
      },
      verses: 'Salmo 96:1-3'
    },
    '006':{
      name: '¡Hosanna!',
      lyrics: {
        '8': {ordinal: '', text: '¡Hosanna! ¡Hosanna! ¡Hosanna!\nEn cielo y tierra, es del Señor\nla gloria y potestad,'},
        '25': {ordinal: '', text: 'y nos circunda con su amor\npor la eternidad.\nAlzad, pues, himnos de loor,\nque es grato a nuestro Dios;'},
        '42': {ordinal: '', text: 'a él rindamos todo honor\nahora y siempre, amén.\n¡A Dios rindamos todo honor,\ntodo honor, todo honor!'},
        '59': {ordinal: '', text: '¡A Dios rindamos todo honor,\nahora y siempre! Amén.'}
      },
      authors: {
        writers: ['Anónimo','(Vers Esp) Anónimo'], composers: ['Anónimo']
      },
      verses: 'Marcos 11:9,10',
    },
    '007':{
      name: 'Oh Dios, mi soberano Rey',
      lyrics: {
        '7': {ordinal: '1', text: 'Oh Dios, mi soberano Rey;\na ti daré loor;\ntu nombre yo exaltaré,\nsantísimo Señor.'},
        '24': {ordinal: '2', text: 'Tus obras evidencia son\nde tu infinito amor,\ny cantan con alegre voz\nlas glorias del Señor.'},
        '41': {ordinal: '3', text: 'Aquel que busca salvación,\nen Cristo la hallará;\ny su ferviente petición\nél pronto atenderá.'},
        '57': {ordinal: '4', text: 'Eternamente durará\nel reino del Señor.\nAllí sus siervos gozarán\nla plenitud de amor.'},
      },
      authors: {
        writers: ['Anónimo'], composers: ['Thomas A. Arne']
      },
      verses: 'Salmo 105:1-3',
    },
    '008':{
      name: '¡Suenen dulces himnos!',
      lyrics: {
        '10': {ordinal: '1', text: '¡Suenen dulces himnos gratos al Señor\ny óiganse en concierto universal!'},
        '20': {ordinal: '', text: 'Desde el alto cielo baja el Salvador\npara beneficio del mortal.'},
        '31': {ordinal: 'coro', text: '¡Gloria!, ¡gloria sea a nuestro Dios!\n¡Gloria!, sí, cantemos a una voz.'},
        '42': {ordinal: '', text: 'Y el cantar de gloria que se oyó en Belén,\nsea nuestro cántico también.'},
        '53': {ordinal: '2', text: 'Montes y collados fluyan leche y miel,\ny abundancia esparzan y solaz.'},
        '63': {ordinal: '', text: 'Gócense los pueblos, gócese Israel,\nque a la tierra viene ya la paz.'},
        '74': {ordinal: 'coro', text: '¡Gloria!, ¡gloria sea a nuestro Dios!\n¡Gloria!, sí, cantemos a una voz.'},
        '84': {ordinal: '', text: 'Y el cantar de gloria que se oyó en Belén,\nsea nuestro cántico también.'},
        '95': {ordinal: '3', text: 'Salte, de alegría lleno el corazón,\nla abatida y pobre humanidad;'},
        '106': {ordinal: '', text: 'Dios se compadece viendo su aflicción\ny le muestra buena voluntad.'},
        '116': {ordinal: 'coro', text: '¡Gloria!, ¡gloria sea a nuestro Dios!\n¡Gloria!, sí, cantemos a una voz.'},
        '127': {ordinal: '', text: 'Y el cantar de gloria que se oyó en Belén,\nsea nuestro cántico también.'},
        '138': {ordinal: '4', text: 'Vibre en nuestros pechos noble gratitud\nhacia quien nos brinda redención;'},
        '149': {ordinal: '', text: 'y a Jesús el Cristo, que nos da salud,\ntributemos nuestra adoración.'},
        '160': {ordinal: 'coro', text: '¡Gloria!, ¡gloria sea a nuestro Dios!\n¡Gloria!, sí, cantemos a una voz.'},
        '170': {ordinal: '', text: 'Y el cantar de gloria que se oyó en Belén,\nsea nuestro cántico también.'},
      },
      authors: {
        writers: ['Juan B. Cabrera'], composers: ['George F. Root']
      },
      verses: 'Isaías 52:9',
    },
    '009':{
      name: 'Alabemos al Señor',
      lyrics: {
        '11': {ordinal: '1', text: 'Alabemos al Señor;\ndemos gloria al Señor.\nAleluya, amén, aleluya, amén.'},
        '33': {ordinal: '2', text: 'Prediquemos de su amor;\nanunciemos su perdón.\nAleluya, amén,\naleluya, amén.'}
      },
      authors: {
        writers: ['Ursula Schlenker','(Vers Esp) Anónimo'], composers: ['Alfred Stier','(Arr) Melvin West']
      },
      verses: 'Salmo 106:48',
    },
    '010':{
      name: 'Alaba al Dios de Abraham',
      lyrics: {
        '11': {ordinal: '1', text: 'Alaba al Dios de Abraham, quien reina con honor;\nquien es anciano eterno y gran Dios de amor.'},
        '32': {ordinal: '', text: 'Yo soy el gran Jehová proclama a gran voz.\nMe inclino y bendigo el nombre del santo Dios.'},
        '54': {ordinal: '2', text: 'Alaba al Dios de Abraham, quien reina en majestad.\nMe elevo y busco el gozo que a su diestra va.'},
        '76': {ordinal: '', text: 'La fama y el poder todo esto lo dejé.\nÉl es mi parte, torre y escudo que yo busqué.'},
        '97': {ordinal: '3', text: 'Triunfante multitud las gracias todos dan.\nAl Padre, Hijo, Espíritu, cantando están.'},
        '119': {ordinal: '', text: 'Alaba al Dios de Abraham, Señor del gran confín.\nPues suyo es el poder, majestad y loor sin fin.'},
      },
      authors: {
        writers: ['Thomas Olivers','(Vers Esp) Haroldo Castellanos A.'], composers: ['Melodia Tradicional Judía','(Arr) Mayer Lyon']
      },
      verses: 'Éxodo 3:14,15',
    },
    '011':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '012':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '013':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '014':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '015':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '016':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '017':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '018':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '019':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '020':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '021':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '022':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '023':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '024':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '025':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '026':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '027':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '028':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '029':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '030':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '031':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '032':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '033':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '034':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '035':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '036':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '037':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '038':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '039':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '040':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '041':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '042':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '043':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '044':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '045':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '046':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '047':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '048':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '049':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '050':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '051':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '052':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '053':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '054':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '055':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '056':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '057':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '058':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '059':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '060':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '061':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '062':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '063':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '064':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '065':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '066':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '067':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '068':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '069':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '070':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '071':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '072':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '073':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '074':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '075':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '076':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '077':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '078':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '079':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '080':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '081':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '082':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '083':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '084':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '085':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '086':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '087':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '088':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '089':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '090':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '091':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '092':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '093':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '094':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '095':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '096':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '097':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '098':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '099':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '100':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '101':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '102':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '103':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '104':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '105':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '106':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '107':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '108':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '109':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '110':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '111':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '112':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '113':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '114':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '115':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '116':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '117':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '118':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '119':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '120':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '121':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '122':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '123':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '124':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '125':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '126':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '127':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '128':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '129':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '130':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '131':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '132':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '133':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '134':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '135':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '136':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '137':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '138':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '139':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '140':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '141':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '142':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '143':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '144':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '145':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '146':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '147':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '148':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '149':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '150':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '151':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '152':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '153':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '154':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '155':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '156':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '157':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '158':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '159':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '160':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '161':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '162':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '163':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '164':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '165':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '166':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '167':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '168':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '169':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '170':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '171':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '172':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '173':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '174':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '175':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '176':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '177':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '178':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '179':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '180':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '181':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '182':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '183':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '184':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '185':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '186':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '187':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '188':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '189':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '190':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '191':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '192':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '193':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '194':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '195':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '196':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '197':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '198':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '199':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '200':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '201':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '202':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '203':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '204':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '205':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '206':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '207':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '208':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '209':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '210':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '211':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '212':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '213':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '214':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '215':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '216':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '217':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '218':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '219':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '220':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '221':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '222':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '223':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '224':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '225':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '226':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '227':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '228':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '229':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '230':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '231':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '232':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '233':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '234':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '235':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '236':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '237':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '238':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '239':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '240':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '241':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '242':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '243':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '244':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '245':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '246':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '247':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '248':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '249':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '250':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '251':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '252':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '253':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '254':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '255':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '256':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '257':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '258':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '259':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '260':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '261':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '262':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '263':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '264':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '265':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '266':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '267':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '268':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '269':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '270':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '271':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '272':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '273':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '274':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '275':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '276':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '277':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '278':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '279':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '280':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '281':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '282':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '283':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '284':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '285':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '286':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '287':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '288':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '289':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '290':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '291':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '292':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '293':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '294':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '295':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '296':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '297':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '298':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '299':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '300':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '301':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '302':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '303':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '304':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '305':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '306':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '307':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '308':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '309':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '310':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '311':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '312':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '313':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '314':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '315':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '316':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '317':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '318':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '319':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '320':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '321':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '322':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '323':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '324':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '325':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '326':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '327':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '328':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '329':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '330':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '331':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '332':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '333':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '334':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '335':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '336':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '337':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '338':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '339':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '340':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '341':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '342':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '343':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '344':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '345':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '346':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '347':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '348':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '349':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '350':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '351':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '352':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '353':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '354':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '355':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '356':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '357':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '358':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '359':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '360':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '361':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '362':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '363':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '364':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '365':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '366':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '367':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '368':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '369':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '370':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '371':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '372':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '373':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '374':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '375':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '376':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '377':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '378':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '379':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '380':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '381':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '382':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '383':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '384':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '385':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '386':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '387':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '388':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '389':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '390':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '391':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '392':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '393':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '394':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '395':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '396':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '397':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '398':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '399':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '400':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '401':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '402':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '403':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '404':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '405':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '406':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '407':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '408':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '409':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '410':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '411':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '412':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '413':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '414':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '415':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '416':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '417':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '418':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '419':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '420':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '421':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '422':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '423':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '424':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '425':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '426':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '427':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '428':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '429':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '430':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '431':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '432':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '433':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '434':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '435':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '436':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '437':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '438':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '439':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '440':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '441':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '442':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '443':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '444':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '445':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '446':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '447':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '448':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '449':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '450':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '451':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '452':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '453':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '454':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '455':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '456':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '457':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '458':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '459':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '460':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '461':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '462':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '463':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '464':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '465':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '466':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '467':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '468':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '469':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '470':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '471':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '472':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '473':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '474':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '475':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '476':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '477':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '478':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '479':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '480':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '481':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '482':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '483':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '484':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '485':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '486':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '487':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '488':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '489':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '490':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '491':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '492':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '493':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '494':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '495':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '496':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '497':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '498':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '499':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '500':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '501':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '502':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '503':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '504':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '505':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '506':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '507':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '508':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '509':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '510':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '511':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '512':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '513':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '514':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '515':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '516':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '517':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '518':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '519':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '520':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '521':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '522':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '523':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '524':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '525':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '526':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '527':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '528':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '529':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '530':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '531':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '532':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '533':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '534':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '535':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '536':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '537':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '538':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '539':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '540':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '541':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '542':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '543':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '544':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '545':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '546':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '547':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '548':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '549':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '550':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '551':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '552':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '553':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '554':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '555':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '556':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '557':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '558':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '559':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '560':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '561':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '562':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '563':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '564':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '565':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '566':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '567':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '568':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '569':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '570':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '571':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '572':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '573':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '574':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '575':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '576':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '577':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '578':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '579':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '580':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '581':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '582':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '583':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '584':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '585':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '586':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '587':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '588':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '589':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '590':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '591':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '592':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '593':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '594':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '595':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '596':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '597':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '598':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '599':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '600':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '601':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '602':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '603':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '604':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '605':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '606':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '607':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '608':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '609':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '610':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '611':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '612':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '613':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: '',
    },
    '614':{
      name: '',
      lyrics: {
        '': {ordinal: '', text: ''}
      },
      authors: {
        writers: [''], composers: ['']
      },
      verses: ''
    }
  };
}
