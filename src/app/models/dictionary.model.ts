/**
 * Stores hymn databases
 */
export abstract class Dictionary {

  protected constructor() {}
  /**
   * Dictionary of hymn number and name
   */
  protected readonly index: {[key: string]: string} = {
    '001':'CANTAD ALEGRES AL SEÑOR','002':'DA GLORIA AL SEÑOR','003':'UNIDOS EN ESPÍRITU','004':'ALABANZAS SIN CESAR','005':'A TI GLORIOSO DIOS','006':'HOSANNA','007':'OH DIOS MI SOBERANO REY','008':'SUENEN DUCES HIMNOS','009':'ALABEMOS AL SEÑOR','010':'ALABA AL DIOS DE ABRAHAM','011':'ALMA BENDICE AL SEÑOR','012':'TODOS JUNTOS REUNIDOS','013':'AL DIOS INVISIBLE','014':'ENGRANDECIDO SEA DIOS','015':'LOÁMOSTE ¡OH DIOS!','016':'A NUESTRO PADRE DIOS','017':'OH PADRE ETERNO DIOS','018':'LOAD AL PADRE','019':'PADRE NUESTRO','020':'A DIOS EL PADRE','021':'GLORIA SEA AL PADRE','022':'JEHOVÁ ESTÁ EN SU SANTO TEMPLO','023':'SILENCIO SILENCIO','024':'IMPLORAMOS TU PRESENCIA','025':'SIENTO LA PRESENCIA DEL SEÑOR','026':'AQUÍ REUNIDOS','027':'¡OH PASTOR DIVINO, ESCUCHA!','028':'TU PUEBLO JUBILOSO','029':'DEL CULTO EL TIEMPO LLEGA','030':'ABRE MIS OJOS','031':'¡OH, SEÑOR! AL ORAR','032':'NOS REUNIMOS EN TU SANTUARIO','033':'TU PRESENCIA PADRE AMANTE, INVOCAMOS','034':'EN MOMENTOS ASÍ','035':'OYE, OH SEÑOR','036':'¡OH, DIOS, QUE OYES CADA ORACIÓN!','037':'DIOS OS GUARDE','038':'QUE DIOS TE GUARDE','039':'DESPIDE HOY TU GREY','040':'SHALOM','041':'GRACIA, AMOR Y COMUNIÓN','042':'QUEDA, SEÑOR','043':'AGUA DE VIDA','044':'DESPÍDENOS CON TU BENDICIÓN','045':'DESPUÉS, SEÑOR','046':'HOY AMANECE','047':'POR LA MAÑANA','048':'OH DIOS, SI HE OFENDIDO UN CORAZÓN','049':'CRISTO, YA LA NOCHE CIERRA','050':'BAJA EL SOL','051':'NUESTRO SOL SE PONE YA','052':'SEÑOR JESÚS, EL DÍA YA SE FUE','053':'¡OH AMOR DE DIOS!','054':'TAN BUENO ES DIOS','055':'GRANDE, SEÑOR, ES TU MISERICORDIA','056':'DE TAL MANERA AMÓ','057':'MI DIOS ME AMA','058':'GRANDE ES EL AMOR DIVINO','059':'MIRAD QUÉ AMOR','060':'¡SANTO! ¡SANTO! ¡SANTO! TU GLORIA LLENA','061':'SANTO, SANTO, SANTO, DIOS OMNIPOTENTE','062':'SANTO, SANTO, SANTO, SANTO ES EL SEÑOR','063':'AL REY ADORAD','064':'YO CANTO EL PODER DE DIOS','065':'EL MUNDO ES DE MI DIOS','066':'¿SABES CUÁNTOS?','067':'¡SEÑOR, YO TE CONOZCO!','068':'TODO LO QUE HA CREADO DIOS','069':'SEÑOR, MI DIOS','070':'¡NUESTRO DIOS REINA!','071':'CADA COSA HERMOSA','072':'FUE UN MILAGRO','073':'LA CREACIÓN','074':'HIMNO AL CREADOR','075':'GRANDE ES JEHOVÁ','076':'ETERNO DIOS, MI CREADOR','077':'SEA EXALTADO','078':'¡AL MUNDO PAZ!','079':'SE OYE UN CANTO EN ALTA ESFERA','080':'VENID, PASTORCILLOS','081':'NOCHE DE PAZ','082':'YA REPICAN LAS CAMPANAS','083':'LA PRIMERA NAVIDAD','084':'VE, DILO EN LAS MONTAÑAS','085':'ALLÁ EN EL PESEBRE','086':'A MEDIANOCHE EN BELÉN','087':'VENID, FIELES TODOS','088':'OH, ALDEHUELA DE BELÉN','089':'CRISTIANOS, ALEGRAOS HOY','090':'SOMOS DEL ORIENTE','091':'¿QUÉ NIÑO ES ESTE?','092':'ÁNGELES CANTANDO ESTÁN','093':'HUBO UNO QUE QUISO','094':'SANGRÓ MI SOBERANO DIOS','095':'UN DÍA','096':'AL CONTEMPLAR LA EXCELSA CRUZ','097':'EN EL MONTE CALVARIO','098':'ROSTRO DIVINO','099':'JAMÁS PODRÁ ALGUIEN SEPARARNOS','100':'¡DULCES MOMENTOS!','101':'CABEZA SACROSANTA','102':'CORDERO DE DIOS','103':'JESÚS RESUCITADO','104':'LA TUMBA LE ENCERRÓ','105':'CRISTO HA RESUCITADO','106':'TUYA ES LA GLORIA','107':'CANTO EL GRAN AMOR','108':'AMIGO FIEL ES CRISTO','109':'UN BUEN AMIGO TENGO YO','110':'CRISTO ES EL MEJOR AMIGO','111':'COMO JESÚS NO HAY OTRO AMIGO','112':'NINGÚN OTRO ME AMÓ CUAL CRISTO','113':'AMOR QUE NO ME DEJARÁS','114':'DIME LA ANTIGUA HISTORIA','115':'¡OH, CUÁN GRANDE AMOR!','116':'CRISTO ESTÁ A MI LADO','117':'NO SÉ POR QUÉ','118':'CUANDO ESTÉS CANSADO Y ABATIDO','119':'DE SU TRONO, MI JESÚS','120':'¡CUÁNTO ME ALEGRA!','121':'ES JESUCRISTO LA VIDA, LA LUZ','122':'DIVINO PASTOR','123':'¡CUÁNTO NOS AMA JESÚS!','124':'AMA EL PASTOR SUS OVEJAS','125':'INFINITO AMOR DE CRISTO','126':'ABRIGADAS Y SALVAS EN EL REDIL','127':'CRISTO, NOMBRE DULCE','128':'¡TU NOMBRE ES DULCE, BUEN JESÚS!','129':'CUAL JESÚS NO HAY OTRO NOMBRE','130':'CRISTO, CRISTO, CRISTO','131':'BENDITO ES EL NOMBRE DE JESÚS','132':'DULCE, HERMOSO NOMBRE ES JESÚS','133':'VENID, CON CÁNTICOS VENID','134':'CUAL MIRRA FRAGANTE','135':'CRISTO, NOMBRE SUBLIME','136':'¡OH, CUÁNTO AMO A CRISTO!','137':'DE JESÚS EL NOMBRE INVOCA','138':'DE MI AMANTE SALVADOR','139':'LA TIERNA VOZ DEL SALVADOR','140':'TE QUIERO, TE QUIERO','141':'¡ALABADLE!','142':'VENID, CANTAD DE GOZO EN PLENITUD','143':'DIGNO ERES TÚ','144':'MI SALVADOR','145':'CON ACENTOS DE ALEGRÍA','146':'NI EN LA TIERRA','147':'A DIOS SEA GLORIA','148':'SOLO CRISTO','149':'JUNTO A LA CRUZ DO JESÚS MURIÓ','150':'A CRISTO DOY MI CANTO','151':'POR ESO LO AMO','152':'A TI, JESÚS','153':'VED A CRISTO','154':'DAD GLORIA AL CORDERO REY','155':'EN SION JESÚS HOY REINA','156':'A CRISTO CORONAD','157':'¡MAJESTAD!','158':'AMANECE YA LA MAÑANA DE ORO','159':'YO ESPERO LA MAÑANA','160':'VIENE OTRA VEZ NUESTRO SALVADOR','161':'¡OH! CUÁN GRATAS LAS NUEVAS','162':'EN PRESENCIA ESTAR DE CRISTO','163':'CRISTO VIENE, ESTO ES CIERTO','164':'JESÚS PRONTO VOLVERÁ','165':'¡VENDRÁ EL SEÑOR!','166':'SIERVOS DE DIOS, LA TROMPETA TOCAD','167':'¿QUIÉN EN DESLUMBRANTE GLORIA?','168':'EL REY QUE VIENE','169':'CUANDO SUENE LA TROMPETA','170':'LA SEGUNDA VENIDA DE CRISTO','171':'¿HAS OÍDO EL MENSAJE?','172':'PROMESA DULCE','173':'¿SERÁ AL ALBOR?','174':'MIRA LOS HITOS','175':'VED A CRISTO, QUE SE ACERCA','176':'TÚ VERÁS AL REY VINIENDO','177':'LOS TRES MENSAJES ANGÉLICOS','178':'CONTEMPLÉ LA GLORIA','179':'¡CRISTO VIENE! AQUEL DÍA SE ACERCA','180':'SÍ, LO VEREMOS','181':'UNA ESPERANZA','182':'VEREMOS A CRISTO','183':'NO ME OLVIDÉ DE TI','184':'NUNCA TE RINDAS','185':'AL CIELO VOY','186':'HACE AÑOS ESCUCHÉ','187':'AUNQUE ANOCHEZCA','188':'GRAN ALEGRÍA','189':'CRISTO MUY PRONTO VENDRÁ','190':'SANTO ESPÍRITU DE CRISTO','191':'LA NUEVA PROCLAMAD','192':'LLENA MI SER','193':'DIOS NOS HA DADO PROMESA','194':'VIVE EN MÍ','195':'ABRE MIS OJOS A LA LUZ','196':'SANTO ESPÍRITU DE DIOS','197':'DULCE ESPÍRITU','198':'VEN, SEÑOR JESÚS','199':'MOVIDOS POR TU ESPÍRITU','200':'BAUTÍZANOS HOY','201':'CANCIÓN DEL ESPÍRITU','202':'DANOS EL FUEGO','203':'SANTO ESPÍRITU LLENA MI VIDA','204':'OH, CANTÁDMELAS OTRA VEZ','205':'DADME LA BIBLIA','206':'PADRE, TU PALABRA ES MI DELICIA','207':'DIOS NOS HABLA','208':'¡SANTA BIBLIA!','209':'LA BIBLIA NOS HABLA DE CRISTO','210':'HUYE CUAL AVE','211':'FIJA TUS OJOS EN CRISTO','212':'A TU PUERTA CRISTO ESTÁ','213':'TIERNO Y AMANTE, JESÚS NOS INVITA','214':'MIENTRAS JESÚS TE LLAMA','215':'CON VOZ BENIGNA TE LLAMA JESÚS','216':'DIOS AL PRÓDIGO LLAMA','217':'BIENVENIDA DA JESÚS','218':'A JESUCRISTO VEN SIN TARDAR','219':'TAN TRISTE Y TAN LEJOS DE DIOS','220':'ALLÁ LA PUERTA ABIERTA ESTÁ','221':'PUERTAS ABIERTAS ENCONTRARÁN','222':'DEL TRONO CELESTIAL','223':'OÍ LA VOZ DEL SALVADOR','224':'OÍ LA VOZ DEL BUEN JESÚS','225':'UN HOMBRE LLEGOSE DE NOCHE A JESÚS','226':'BUSCAD PRIMERO','227':'PRESTE OÍDOS EL HUMANO','228':'ME BUSCARÉIS Y ME HALLARÉIS','229':'¿HAS PENSADO LO QUE PUEDE COSTAR?','230':'ABRE TU CORAZÓN','231':'TODO EN EL ALTAR','232':'ENTRÉGATE EN ORACIÓN','233':'VEN A LA FUENTE DE VIDA','234':'¿TEMES QUE EN LA LUCHA?','235':'LA RAZÓN DE VIVIR','236':'A JESÚS ENTREGA TODO','237':'JESÚS HOY ESPERA ENTRAR EN TU SER','238':'YO ESCUCHO, BUEN JESÚS','239':'DE DIOS VAGABA LEJOS YO','240':'TE RUEGO, OH DIOS','241':'PERDÓN TE RUEGO, MI SEÑOR Y DIOS','242':'UNA ES, SEÑOR, MI PETICIÓN','243':'ENTREGO TODO A CRISTO','244':'PADRE, DIOS','245':'CÚMPLASE, OH CRISTO, TU VOLUNTAD','246':'TE QUIERO, MI SEÑOR','247':'YO TE SEGUIRÉ','248':'QUE MI VIDA ENTERA ESTÉ','249':'TAL COMO SOY','250':'PADRE, A TUS PIES ME POSTRO','251':'NO YO, SINO ÉL','252':'DEJO EL MUNDO','253':'TUYO SOY, JESÚS','254':'ANHELO SER LIMPIO','255':'OH CRISTO, TE ADORO','256':'JESÚS, YO HE PROMETIDO','257':'¡OH! VEN, TE INVITO, CRISTO','258':'TÚ DEJASTE TU TRONO','259':'MI ESPÍRITU, ALMA Y CUERPO','260':'JUNTO A LA CRUZ DE CRISTO','261':'SALVADOR, A TI ME RINDO','262':'LOS TESOROS DEL MUNDO','263':'ENTRA EN ESTE CORAZÓN','264':'UN DÍA MÁS POR CRISTO','265':'LA SENDA ANCHA DEJARÉ','266':'VIVO POR CRISTO','267':'A LA CRUZ DE CRISTO VOY','268':'PUEDO OÍR TU VOZ LLAMANDO','269':'PREFIERO A MI CRISTO','270':'MEDITAR EN JESÚS','271':'HOY ME LLAMA EL MUNDO EN VANO','272':'DE ESCLAVITUD','273':'TU VIDA, OH SALVADOR','274':'¿QUÉ TE DARÉ, MAESTRO?','275':'HUMILDE ORACIÓN','276':'CON NUESTRAS MENTES','277':'AMARTE MÁS','278':'¿PUEDE EL MUNDO VER A JESÚS EN MÍ?','279':'TRANSFÓRMAME A TU IMAGEN','280':'SER SEMEJANTE A JESÚS','281':'HE DECIDIDO SEGUIR A CRISTO','282':'¡BRILLA, JESÚS!','283':'VEN, SEÑOR JESÚS','284':'ME DICE EL SALVADOR','285':'CONFÍO EN JESUCRISTO','286':'HAY UNA FUENTE SIN IGUAL','287':'REY DE MI VIDA','288':'AL CONTEMPLARTE, MI SALVADOR','289':'¿QUÉ ME PUEDE DAR PERDÓN?','290':'FUENTE DE LA VIDA ETERNA','291':'PERDIDO, FUI A MI JESÚS','292':'POR FE EN CRISTO, EL REDENTOR','293':'¿QUIERES SER SALVO DE TODA MALDAD?','294':'EN JESÚS POR FE CONFÍO','295':'LAS MANOS, PADRE','296':'COMPRADO CON SANGRE POR CRISTO','297':'SALVADO CON SANGRE POR CRISTO','298':'AL CALVARIO, SOLO, JESÚS ASCENDIÓ','299':'HAY VIDA EN MIRAR','300':'LEJOS DE MI PADRE DIOS','301':'CRISTO ES MI AMANTE SALVADOR','302':'GRATO ES CONTAR LA HISTORIA','303':'SUBLIME GRACIA','304':'MI REDENTOR, EL REY DE GLORIA','305':'MARAVILLOSA SU GRACIA ES','306':'LLEGÓ JESÚS','307':'ROCA DE LA ETERNIDAD','308':'DIOS DESCENDIÓ','309':'LA VOZ DE JESÚS','310':'CRISTO, CENTRO DE MI VIDA','311':'CUANDO JUNTE JESÚS LAS NACIONES','312':'DÍA GRANDE VIENE','313':'LA HORA DEL JUICIO','314':'CRISTO, REY OMNIPOTENTE','315':'EL JUICIO EMPEZÓ','316':'HAY UN MUNDO FELIZ MÁS ALLÁ','317':'EN EL HOGAR DO NUNCA HABRÁ','318':'EN LA MANSIÓN DE MI SEÑOR','319':'CUANDO MI LUCHA TERMINE AL FINAL','320':'JAMÁS SE DICE “ADIÓS” ALLÁ','321':'ALLÁ SOBRE MONTES','322':'BUSQUEMOS LA PATRIA','323':'HE DE CONOCERLE ENTONCES','324':'PRONTO YO VERÉ A JESÚS','325':'NO PUEDE EL MUNDO SER MI HOGAR','326':'UN DÍA YO HE DE FALTAR','327':'JERUSALÉN, MI AMADO HOGAR','328':'¿NOS VEREMOS JUNTO AL RÍO?','329':'EN LA CÉLICA MORADA','330':'HAY UN FELIZ EDÉN','331':'ALMA BENDICE AL SEÑOR','332':'EN LA TIERRA ADONDE IRÉ','333':'AUNQUE EN ESTA VIDA','334':'CUÁNTO ANHELO LLEGAR','335':'MI HOGAR CELESTIAL','336':'DEL BELLO PAÍS HE LEÍDO','337':'NUNCA MÁS ADIÓS','338':'LAS RIBERAS DE DICHA INMORTAL','339':'A VECES OIGO UN HIMNO','340':'¡OH, QUÉ MÚSICA DIVINA!','341':'MÁS CERCA DEL HOGAR','342':'DESPUÉS DEL RÍO','343':'QUIERO LLEGAR A SER PARTE DEL CIELO','344':'ENTONAD UN HIMNO','345':'CANTA, Y TUS PENAS SE IRÁN','346':'¡FELIZ EL DÍA!','347':'CON GOZO CANTO AL SEÑOR','348':'DICHA GRANDE','349':'GRAN GOZO HAY EN MI ALMA HOY','350':'ANDANDO EN LA LUZ DE DIOS','351':'YO TENGO GOZO','352':'GOZAOS, CRISTO ES REY','353':'SUENAN MELODÍAS EN MI SER','354':'VOY CAMINANDO','355':'YO VOY FELIZ','356':'GOZO ES CONOCER A CRISTO','357':'JESÚS, TÚ ERES MI ALEGRÍA','358':'EN EL SENO DE MI ALMA','359':'REGOCIJAOS SIEMPRE','360':'EN JESUCRISTO, MÁRTIR DE PAZ','361':'PERCIBE MI ALMA UN SON','362':'CON SIN IGUAL AMOR','363':'HAY UN CANTO NUEVO EN MI SER','364':'JESÚS DA PAZ','365':'ELEVEMOS AL SEÑOR','366':'EN CRISTO HALLO AMIGO','367':'GRACIAS, DIOS','368':'PADRE AMADO','369':'GRATITUD Y ALABANZA','370':'POR LA EXCELSA MAJESTAD','371':'JESÚS TE AMA','372':'¿CÓMO AGRADECER?','373':'MI REDENTOR ES CRISTO','374':'DULCE COMUNIÓN','375':'SED PUROS Y SANTOS','376':'DULCE ORACIÓN','377':'A LOS PIES DE JESUCRISTO','378':'¡OH, QUÉ AMIGO NOS ES CRISTO!','379':'HABLA, SEÑOR, A MI ALMA','380':'ANDO CON CRISTO','381':'ALMA BENDICE AL SEÑOR','382':'A SOLAS AL HUERTO YO VOY','383':'HABLA A TU DIOS DE MAÑANA','384':'EL JARDÍN DE ORACIÓN','385':'HABLANDO CON JESÚS','386':'HAY UN LUGAR DE PAZ','387':'APARTE DEL MUNDO','388':'DEBO DECIR A CRISTO','389':'CONVERSAR CON JESUCRISTO','390':'SOY YO, SEÑOR','391':'¿LE IMPORTARÁ A JESÚS?','392':'HAY QUIEN VELA MIS PISADAS','393':'MI FE CONTEMPLA A TI','394':'¡CUÁN FIRME CIMIENTO!','395':'¡OH, CUÁN DULCE ES FIAR EN CRISTO!','396':'¡OH QUÉ SALVADOR!','397':'OH BUEN SEÑOR, VELADA ESTÁ','398':'CUANDO SOPLA AIRADA LA TEMPESTAD','399':'EN ESTOS TIEMPOS','400':'CASTILLO FUERTE ES NUESTRO DIOS','401':'ETERNA ROCA ES MI JESÚS','402':'¡OH!, SALVO EN LA ROCA','403':'CUANDO EN LA LUCHA','404':'A CUALQUIERA PARTE','405':'SÉ QUIÉN ES JESÚS','406':'JESÚS ES MI LUZ','407':'MUY CERCA DE MI REDENTOR','408':'CRISTO ME AYUDA POR ÉL A VIVIR','409':'SI MI DÉBIL FE FLAQUEARE','410':'CUANDO TE QUIERO','411':'BAJO SUS ALAS','412':'TODAS LAS PROMESAS','413':'SI LA CARGA ES PESADA','414':'¡OH, BUEN MAESTRO, DESPIERTA!','415':'SALVO EN LOS TIERNOS BRAZOS','416':'¡OH!, TENGA YO LA ARDIENTE FE','417':'DAME LA FE DE MI JESÚS','418':'PADRE, YO VENGO A TI','419':'POR LA JUSTICIA DE JESÚS','420':'NUNCA DESMAYES','421':'CARIÑOSO SALVADOR','422':'NADA PUEDE YA FALTARME','423':'PERTENEZCO A MI REY','424':'¿CÓMO PODRÉ ESTAR TRISTE?','425':'DÍA EN DÍA','426':'TENGO PAZ','427':'LLEVA TODO TU PESAR A CRISTO','428':'SU OVEJA SOY','429':'ÉL PUEDE','430':'SOLO NO ESTOY','431':'A ÉL MIS PROBLEMAS LE DOY','432':'COMO EL CIERVO','433':'CONMIGO MARCHA UN ÁNGEL','434':'JESÚS ES MI VIDA','435':'DIOS SABE, DIOS OYE, DIOS VE','436':'ÉL VIVE HOY','437':'TU PRESENCIA, PADRE AMADO, DA CONSUELO','438':'MIRA HACIA DIOS','439':'¡OH!, QUIÉN PUDIERA ANDAR CON DIOS','440':'QUIERO, JESÚS, CONTIGO ANDAR','441':'JESÚS, TE NECESITO','442':'¡OH! ¡MAESTRO Y SALVADOR!','443':'HAY UN LUGAR DO QUIERO ESTAR, CERCA DE TI','444':'NO ME PASES','445':'MÁS DE JESÚS','446':'MÁS CERCA, OH DIOS, DE TI','447':'MÁS SANTIDAD DAME','448':'SALVADOR, MI BIEN ETERNO','449':'CRISTO, MI PILOTO SÉ','450':'¡OH JESÚS, PASTOR DIVINO!','451':'CERCA, MÁS CERCA','452':'CONTIGO QUIERO ANDAR','453':'CÓMO SER CUAL CRISTO','454':'YO QUISIERA ANDAR CON CRISTO','455':'MI MANO TEN','456':'COMO LA MUJER DE JUNTO AL POZO','457':'MORE EN MÍ LA BELLEZA DEL SALVADOR','458':'ORAD POR MÍ','459':'HÁBLAME MÁS DE CRISTO','460':'QUIERO ESTAR CERCA DE CRISTO','461':'A TU LADO ANHELO ESTAR','462':'DAME A CRISTO','463':'MI ORACIÓN','464':'VEN, INSPÍRANOS','465':'VEN JUNTO A MÍ','466':'GUÍAME, ¡OH SALVADOR!','467':'¡SIEMPRE EL SALVADOR CONMIGO!','468':'PASO A PASO DIOS ME GUÍA','469':'JESÚS ME GUÍA','470':'GUÍAME, DIOS','471':'CONDÚCEME, MAESTRO','472':'JESÚS, MI GUÍA ES','473':'HÁBLAME, Y HABLARÉ','474':'¿QUÉ ME IMPORTAN?','475':'EL CAMINO ES ESCABROSO','476':'¿MUY LEJOS EL HOGAR ESTÁ?','477':'LOS QUE AMAN AL SEÑOR','478':'SÉ FIEL SIEMPRE, HERMANO','479':'DE LA MANO, SEÑOR','480':'DIGNO ERES, OH SEÑOR','481':'VOY AL CIELO','482':'QUIERO CANTAR','483':'CUANDO AL CIELO LLEGUEMOS','484':'BUSCA AL SEÑOR','485':'UNIDOS EN VERDAD','486':'EN LOS PASOS DE JESÚS','487':'CRISTO, ERES JUSTO REY','488':'AL ANDAR CON JESÚS','489':'SOLO ANHELO, CRISTO AMADO','490':'MEJOR QUE LOS SACRIFICIOS','491':'LEVÁNTATE, CRISTIANO','492':'¡TRABAJAD! ¡TRABAJAD!','493':'HOY QUIERO TRABAJAR CONTIGO','494':'CERCA UN ALMA AGOBIADA ESTÁ','495':'MI DEBER','496':'SUS MANOS SOMOS','497':'MANOS','498':'PUEDES DEMOSTRAR CON TUS MANOS','499':'JESÚS ANDUVO POR AQUÍ','500':'HAZME TU SIERVO','501':'MI VIDA AL SERVICIO DE DIOS','502':'BRILLA EN EL SITIO DONDE ESTÉS','503':'OH DIOS, QUE DESEAS LA VIDA','504':'SEÑOR DE TODOS','505':'HIJO DEL REINO','506':'¡DE PIE, DE PIE, CRISTIANOS!','507':'TENTADO, NO CEDAS','508':'CONTENDAMOS SIEMPRE POR NUESTRA FE','509':'¡FIRMES! ¡FUERTES!','510':'¿QUIÉN ESTÁ POR CRISTO?','511':'MARCHARÉ EN LA DIVINA LUZ','512':'NUNCA ESTÉIS DESANIMADOS','513':'HONRA AL HOMBRE DE VALOR','514':'¡DESPERTAD, DESPERTAD, OH CRISTIANOS!','515':'DESPLIEGUE EL CRISTIANO SU SANTA BANDERA','516':'¡FIRMES Y ADELANTE!','517':'DE PIE, OH GREY DE DIOS','518':'JESÚS ESTÁ BUSCANDO VOLUNTARIOS HOY','519':'DESPIERTA, HERMANO, SIN DEMORAR','520':'¡ADELANTE! MANDA EL SEÑOR','521':'AL CRISTO VED','522':'SUENEN LAS PALABRAS','523':'LOS SABIOS DAN SU CIENCIA','524':'TRAÍAN EN SILENCIO PRESENTES AL SEÑOR','525':'CON GRATITUD, LLEGAMOS','526':'OH, MI PATRIA, TE PROMETO HOY','527':'SEÑOR JEHOVÁ, OMNIPOTENTE DIOS','528':'POR MONTAÑAS, MUY CANSADO','529':'IGLESIA DE CRISTO','530':'SOMOS UN PEQUEÑO PUEBLO MUY FELIZ','531':'LA FAMILIA DE DIOS','532':'SAGRADO ES EL AMOR','533':'CUÁN BUENO Y AGRADABLE','534':'EN TU NOMBRE COMENZAMOS','535':'LAS FAENAS TERMINADAS','536':'EN SOMBRAS DE LA TARDE','537':'SÁBADO SANTO','538':'HOY ES DÍA DE REPOSO','539':'¡OH, DÍA DELICIOSO!','540':'YA ASOMA EL SOL BRILLANTE','541':'SEÑOR, REPOSAMOS','542':'AMO TU SÁBADO','543':'NO TE OLVIDES NUNCA DEL DÍA DEL SEÑOR','544':'HOY EL SÁBADO GLORIOSO','545':'SANTO DÍA','546':'SANTO SÁBADO, BENDITO','547':'SÁBADO ES','548':'MI CORAZÓN SE LLENA DE ALEGRÍA','549':'YA EL FIN SE ACERCA','550':'DÍA SANTO DEL SEÑOR','551':'EMBAJADOR SOY DE MI REY','552':'¡OH!, CUÁNTO NECESITA','553':'¿OS PUSISTEIS A ARAR?','554':'CON CRISTO AVANZA HOY','555':'HOY GOZOSO MEDITO','556':'YO QUIERO SIEMPRE BRILLAR','557':'¿QUÉ ESTÁS HACIENDO POR CRISTO?','558':'AMA A TUS PRÓJIMOS','559':'NO TE DÉ TEMOR','560':'CRISTO ESTÁ BUSCANDO OBREROS','561':'OIGO DEL SEÑOR LA VOZ LLAMANDO','562':'ESPARCID LA LUZ DE CRISTO','563':'ESCUCHAD, JESÚS NOS DICE','564':'PRONTO LA NOCHE VIENE','565':'¡VE, VE OH SION!','566':'CENTINELAS DEL MAESTRO','567':'SI EN VALLES DE PELIGROS','568':'HAY LUGAR EN LA AMPLIA VIÑA','569':'ID Y PREDICAD EL EVANGELIO','570':'VOLUNTARIO DEL SEÑOR','571':'LA HISTORIA DE CRISTO CONTEMOS','572':'PESCADORES DE HOMBRES','573':'TE ENVÍO A TI','574':'TESTIMONIO','575':'TOCAD TROMPETA YA','576':'PROCLAMO HOY QUE SOY CRISTIANO','577':'YO QUIERO TRABAJAR','578':'EL PUEBLO QUE CONOCE A SU DIOS','579':'LA FUENTE VEO','580':'LAS AGUAS DEL BAUTISMO','581':'EL PAN DE VIDA SOY','582':'HOY VENIMOS CUAL HERMANOS','583':'LA CENA DE LA COMUNIÓN','584':'AMÉMONOS, HERMANOS','585':'DE RODILLAS PARTIMOS HOY EL PAN','586':'EN MEMORIA DE MÍ','587':'TE DEDICAMOS, OH SEÑOR','588':'VEN, ALMA QUE LLORAS','589':'PERFECTO AMOR','590':'GUÍA A TI, SEÑOR','591':'TODO ES BELLO EN EL HOGAR','592':'SI DIOS ESTÁ, ¡FELIZ HOGAR!','593':'HOGAR DE MIS RECUERDOS','594':'SEÑOR, GRACIAS POR MI HOGAR','595':'FELIZ HOGAR','596':'EDIFICAMOS FAMILIAS','597':'ORACIÓN POR UN NIÑO','598':'CRISTO, YO TE SEGUIRÉ','599':'EN ESTE BELLO DÍA','600':'CUANDO VENGA JESUCRISTO','601':'CUANDO LEO EN LA BIBLIA','602':'ES EL AMOR DIVINO','603':'YO TEMPRANO BUSCO A CRISTO','604':'BELLAS LAS MANITAS SON','605':'JESÚS TIENE TIEMPO','606':'LLAMA JESÚS, EL BUEN PASTOR','607':'NÍTIDO RAYO POR CRISTO','608':'CORAZONES SIEMPRE ALEGRES','609':'¡OH JÓVENES, VENID!','610':'ESCUCHAMOS TU LLAMADA','611':'OH, JUVENTUD DEL REY','612':'JESÚS TE NECESITA HOY','613':'HOY NOS TOCA TRABAJAR','614':'AMENES'
  };

  /**
   * Dictionary of hymn number and max lyrics images
   */
  protected readonly limit: {[key: string]: number} = {
    '001':4,'002':9,'003':7,'004':7,'005':7,'006':5,'007':5,'008':17,'009':3,'010':7,'011':7,'012':5,'013':9,'014':9,'015':7,'016':7,'017':7,'018':7,'019':7,'020':2,'021':3,'022':3,'023':7,'024':4,'025':3,'026':7,'027':9,'028':7,'029':7,'030':3,'031':3,'032':3,'033':3,'034':4,'035':2,'036':3,'037':9,'038':5,'039':3,'040':4,'041':4,'042':3,'043':3,'044':3,'045':7,'046':5,'047':5,'048':9,'049':5,'050':13,'051':7,'052':7,'053':10,'054':4,'055':7,'056':2,'057':9,'058':9,'059':4,'060':7,'061':7,'062':5,'063':8,'064':7,'065':7,'066':7,'067':9,'068':9,'069':15,'070':3,'071':10,'072':10,'073':10,'074':7,'075':7,'076':5,'077':4,'078':4,'079':7,'080':7,'081':7,'082':7,'083':9,'084':8,'085':7,'086':7,'087':7,'088':7,'089':7,'090':11,'091':7,'092':5,'093':7,'094':5,'095':9,'096':5,'097':9,'098':5,'099':7,'100':5,'101':7,'102':7,'103':7,'104':10,'105':5,'106':7,'107':9,'108':9,'109':9,'110':9,'111':7,'112':7,'113':5,'114':10,'115':3,'116':7,'117':7,'118':9,'119':7,'120':7,'121':7,'122':7,'123':3,'124':10,'125':4,'126':9,'127':7,'128':9,'129':13,'130':3,'131':5,'132':7,'133':9,'134':10,'135':2,'136':7,'137':7,'138':17,'139':9,'140':9,'141':12,'142':13,'143':7,'144':3,'145':10,'146':4,'147':13,'148':2,'149':9,'150':9,'151':5,'152':3,'153':9,'154':9,'155':7,'156':7,'157':5,'158':9,'159':9,'160':13,'161':10,'162':9,'163':9,'164':9,'165':13,'166':9,'167':10,'168':9,'169':10,'170':9,'171':17,'172':9,'173':10,'174':7,'175':7,'176':7,'177':9,'178':10,'179':7,'180':7,'181':6,'182':6,'183':9,'184':6,'185':7,'186':7,'187':5,'188':11,'189':3,'190':9,'191':17,'192':3,'193':9,'194':7,'195':9,'196':4,'197':4,'198':5,'199':7,'200':7,'201':7,'202':5,'203':5,'204':10,'205':9,'206':7,'207':7,'208':9,'209':13,'210':7,'211':7,'212':7,'213':10,'214':7,'215':8,'216':10,'217':7,'218':7,'219':15,'220':7,'221':9,'222':9,'223':7,'224':9,'225':13,'226':7,'227':11,'228':3,'229':13,'230':3,'231':10,'232':3,'233':9,'234':10,'235':9,'236':5,'237':9,'238':7,'239':9,'240':9,'241':5,'242':9,'243':5,'244':7,'245':5,'246':9,'247':9,'248':9,'249':5,'250':10,'251':9,'252':9,'253':9,'254':13,'255':9,'256':9,'257':9,'258':13,'259':7,'260':7,'261':9,'262':10,'263':7,'264':13,'265':7,'266':17,'267':5,'268':7,'269':13,'270':13,'271':7,'272':9,'273':9,'274':10,'275':3,'276':7,'277':9,'278':11,'279':5,'280':10,'281':4,'282':9,'283':2,'284':9,'285':7,'286':10,'287':7,'288':9,'289':7,'290':7,'291':9,'292':10,'293':10,'294':10,'295':7,'296':10,'297':7,'298':9,'299':8,'300':9,'301':10,'302':13,'303':4,'304':13,'305':10,'306':17,'307':7,'308':15,'309':13,'310':7,'311':13,'312':13,'313':9,'314':7,'315':13,'316':7,'317':7,'318':9,'319':7,'320':7,'321':11,'322':8,'323':13,'324':7,'325':7,'326':9,'327':10,'328':9,'329':7,'330':7,'331':7,'332':7,'333':13,'334':8,'335':7,'336':11,'337':13,'338':7,'339':10,'340':7,'341':5,'342':13,'343':7,'344':13,'345':4,'346':10,'347':9,'348':10,'349':9,'350':13,'351':7,'352':9,'353':8,'354':6,'355':7,'356':5,'357':8,'358':12,'359':3,'360':7,'361':9,'362':7,'363':9,'364':5,'365':7,'366':12,'367':2,'368':9,'369':2,'370':9,'371':7,'372':8,'373':9,'374':10,'375':7,'376':10,'377':7,'378':8,'379':13,'380':13,'381':2,'382':13,'383':4,'384':17,'385':3,'386':5,'387':9,'388':13,'389':3,'390':4,'391':9,'392':10,'393':7,'394':10,'395':7,'396':15,'397':5,'398':8,'399':10,'400':9,'401':7,'402':13,'403':8,'404':12,'405':5,'406':12,'407':7,'408':12,'409':9,'410':9,'411':10,'412':13,'413':7,'414':16,'415':10,'416':9,'417':9,'418':10,'419':7,'420':9,'421':7,'422':9,'423':13,'424':13,'425':9,'426':10,'427':7,'428':4,'429':5,'430':7,'431':5,'432':7,'433':9,'434':9,'435':7,'436':9,'437':2,'438':10,'439':5,'440':6,'441':7,'442':6,'443':7,'444':9,'445':9,'446':9,'447':7,'448':7,'449':7,'450':9,'451':9,'452':7,'453':7,'454':11,'455':7,'456':13,'457':3,'458':8,'459':9,'460':8,'461':11,'462':5,'463':4,'464':7,'465':7,'466':7,'467':12,'468':10,'469':13,'470':3,'471':7,'472':5,'473':4,'474':9,'475':13,'476':8,'477':10,'478':10,'479':5,'480':10,'481':8,'482':8,'483':7,'484':7,'485':8,'486':5,'487':7,'488':13,'489':7,'490':10,'491':7,'492':10,'493':7,'494':15,'495':8,'496':5,'497':9,'498':6,'499':4,'500':3,'501':3,'502':13,'503':7,'504':6,'505':8,'506':9,'507':7,'508':8,'509':7,'510':13,'511':9,'512':10,'513':7,'514':9,'515':9,'516':13,'517':5,'518':17,'519':4,'520':7,'521':10,'522':13,'523':7,'524':10,'525':4,'526':7,'527':4,'528':9,'529':7,'530':5,'531':5,'532':5,'533':3,'534':7,'535':7,'536':7,'537':5,'538':7,'539':7,'540':7,'541':7,'542':5,'543':10,'544':4,'545':7,'546':7,'547':4,'548':6,'549':9,'550':7,'551':10,'552':10,'553':9,'554':7,'555':11,'556':3,'557':10,'558':11,'559':9,'560':9,'561':9,'562':7,'563':7,'564':9,'565':11,'566':7,'567':21,'568':13,'569':16,'570':10,'571':9,'572':7,'573':6,'574':7,'575':9,'576':7,'577':9,'578':7,'579':9,'580':7,'581':6,'582':5,'583':5,'584':7,'585':7,'586':6,'587':4,'588':7,'589':7,'590':12,'591':13,'592':4,'593':13,'594':4,'595':6,'596':9,'597':5,'598':7,'599':9,'600':9,'601':9,'602':10,'603':7,'604':9,'605':5,'606':7,'607':9,'608':9,'609':17,'610':13,'611':3,'612':9,'613':13,'614':3
  };
}
