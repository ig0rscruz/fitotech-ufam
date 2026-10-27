/* Cartilha Digital de Fitoterapia — base de dados das 28 espécies do
 * Memento Fitoterápico da Farmacopeia Brasileira, 1ª ed. (Anvisa, 2016).
 * Campos "memento": texto da monografia oficial. Demais campos: curadoria da equipe.
 * Riscos: "c" = contraindicado, "a" = atenção. Edite com cuidado (JSON válido). */
window.PLANTAS = [
 {
  "id": "actaea-racemosa",
  "nome": "Cimicifuga",
  "populares": [
   "Cimicifuga"
  ],
  "cientifico": "Actaea racemosa L.",
  "cientificoCompleto": "Actaea racemosa L.",
  "familia": "Ranunculaceae",
  "sinonimia": "Cimicifuga racemosa (L.) Nutt.",
  "parte": "Raiz ou rizoma.",
  "via": "Oral",
  "tempoMax": "Até 6 meses",
  "rx": true,
  "porte": "Erva perene",
  "flor": "branca",
  "tags": [
   "climatério",
   "menopausa",
   "fogacho",
   "ondas de calor",
   "sudorese",
   "palpitação",
   "alteração de humor"
  ],
  "partes": [
   {
    "parte": "Raiz / rizoma",
    "ok": true,
    "txt": "Parte medicinal (droga vegetal)."
   },
   {
    "parte": "Uso com sinais de lesão hepática",
    "ok": false,
    "txt": "Suspender se icterícia, urina escura, astenia ou dor epigástrica intensa."
   }
  ],
  "riscos": {
   "gestante": [
    "c",
    "Contraindicado na gravidez."
   ],
   "hepatopatia": [
    "c",
    "Contraindicado na insuficiência hepática."
   ],
   "transplante": [
    "c",
    "Imunoestimulação: risco de rejeição em transplantados."
   ],
   "m_imunossupressor": [
    "c",
    "Antagoniza ciclosporina/azatioprina."
   ],
   "m_antihipertensivo": [
    "a",
    "Cautela com betabloqueadores e bloqueadores de canais de cálcio (efeito hipotensor)."
   ],
   "hipotensao": [
    "a",
    "Superdosagem pode causar hipotensão."
   ],
   "m_estatina": [
    "a",
    "Possível interação com atorvastatina."
   ],
   "m_hormonal": [
    "a",
    "Com TRH: reavaliação médica a cada 6 meses."
   ]
  },
  "idade": null,
  "populacao": [],
  "magistral": [
   "Extrato seco etanólico: 6 mg/dia.",
   "Rizoma seco: 40–200 mg/dia em doses divididas.",
   "Tintura 1:10 (etanol 60%): 0,4–2 mL/dia.",
   "Raiz em pó ou chá: 1–2 g, 3 vezes ao dia."
  ],
  "calc": [
   {
    "nome": "Chá da raiz (pó) — 1 a 2 g por dose",
    "tipo": "decoccao",
    "g": [
     1,
     2
    ],
    "ml": 150,
    "freq": "3 vezes ao dia",
    "mlObs": "O Memento não fixa o volume; 150 mL = 1 xícara de chá (padrão do Formulário Fitoterápico)."
   }
  ],
  "fotos": [
   {
    "src": "assets/img/especies/actaea-racemosa.jpg",
    "credito": "Wikimedia Commons",
    "link": "https://commons.wikimedia.org/wiki/File:Actaea_racemosa_002.JPG",
    "obs": ""
   }
  ],
  "memento": {
   "indicacoes": "Alívio dos sintomas do climatério, como rubor, fogachos, transpiração excessiva, palpitações, alterações do humor, ansiedade e depressão.",
   "contraindicacoes": "Contraindicado para pacientes com histórico de hipersensibilidade a qualquer um dos componentes do fitoterápico. Pacientes portadoras de insuficiência hepática. Esse fitoterápico é contraindicado durante a gravidez.",
   "precaucoes": "Pacientes devem ser alertadas quanto ao aparecimento e sintomas sugestivos de insuficiência hepática, tais como astenia, inapetência, icterícia cutânea ou de escleróticas, epigastralgia severa acompanhada de náusea e vômito ou urina com coloração escura. Nesses casos, deve-se suspender o uso. É necessária precaução em pacientes alérgicos à aspirina ou outros salicilatos. Em associação à terapia de reposição hormonal, deve manter-se avaliação médica a cada seis meses.",
   "adversos": "Pode causar desconforto gastrointestinal, erupção cutânea, cefaleia e tontura.",
   "interacoes": "Pode ocorrer antagonização do efeito imunossupressor promovido pela ciclosporina e azatioprina, ou seja, uma imunoestimulação podendo levar à rejeição em pacientes transplantadas que fazem uso desse fitoterápico. Pode ocorrer interação com a atorvastatina. Deve ser utilizada com cautela se associado a outros agentes hipotensores, como betabloqueadores (metoprolol ou propanolol) e bloqueadores dos canais de cálcio (diltiazem ou verapamil). Pode ocorrer interação com analgésicos e anestésicos e efeitos aditivos com agentes gastrointestinais.",
   "formas": "Cápsulas e comprimidos contendo a droga vegetal, extrato seco etanólico ou isopropílico. Armazenar ao abrigo da luz em local fechado.",
   "posologia": "Oral. Dose diária: 6 mg extrato seco (extrato etanólico). 40-200 mg de rizomas secos de cimicifuga diariamente divididos em doses ou 0,4-2 mL da tintura (1:10) em etanol a 60%, diariamente. A raiz em pó ou o chá 1-2 g, três vezes por dia.",
   "tempo": "Não deve ser utilizada por mais de 6 meses. O tempo de uso depende da indicação terapêutica e da evolução do quadro acompanhado pelo profissional prescritor.",
   "superdosagem": "Pode causar vertigem, cefaleia, náusea, vômito, hipotensão arterial, distúrbios visuais e circulatórios.",
   "prescricao": "Fitoterápico, somente sob prescrição médica.",
   "quimica": "Triterpenos (cimifugosídeo, 26-deoxiacteína, acteína e cimigenol), alcaloides, taninos e ácidos fenólicos."
  }
 },
 {
  "id": "aesculus-hippocastanum",
  "nome": "Castanha-da-índia",
  "populares": [
   "Castanha-da-índia"
  ],
  "cientifico": "Aesculus hippocastanum L.",
  "cientificoCompleto": "Aesculus hippocastanum L.",
  "familia": "Sapindaceae",
  "sinonimia": "",
  "parte": "Semente.",
  "via": "Oral e tópica",
  "tempoMax": "Não estabelecido",
  "rx": false,
  "porte": "Árvore",
  "flor": "branca",
  "tags": [
   "insuficiência venosa",
   "varizes",
   "pernas pesadas",
   "fragilidade capilar",
   "circulação",
   "edema de membros"
  ],
  "partes": [
   {
    "parte": "Semente (extrato padronizado em escina)",
    "ok": true,
    "txt": "Usada somente como extrato padronizado."
   },
   {
    "parte": "Semente/fruto in natura",
    "ok": false,
    "txt": "Escina em altas doses: vômitos, hemólise, dano renal. Não consumir em casa."
   }
  ],
  "riscos": {
   "hepatopatia": [
    "c",
    "Contraindicado na insuficiência hepática."
   ],
   "nefropatia": [
    "c",
    "Contraindicado na insuficiência renal."
   ],
   "m_anticoag": [
    "c",
    "Potencializa anticoagulantes orais."
   ],
   "gestante": [
    "a",
    "Categoria C — só com orientação médica."
   ],
   "idoso": [
    "a",
    "Idosos: apenas com orientação médica."
   ],
   "gastrite": [
    "a",
    "Saponinas podem irritar a mucosa gástrica e causar refluxo."
   ]
  },
  "idade": {
   "min": 18,
   "nivel": "a",
   "txt": "Crianças absorvem mais escina (maior toxicidade); evitar em crianças e adolescentes sem orientação."
  },
  "populacao": [],
  "magistral": [
   "Extrato seco padronizado (16–20% glicosídeos triterpênicos): 250–312 mg/dia, divididos em 2 tomadas (≈100 mg escina/dia).",
   "Gel tópico com 2% de escina."
  ],
  "calc": [],
  "fotos": [
   {
    "src": "assets/img/especies/aesculus-hippocastanum.jpg",
    "credito": "Wikimedia Commons",
    "link": "https://commons.wikimedia.org/wiki/File:Illustration_Aesculus_hippocastanum0_clean.jpg",
    "obs": ""
   }
  ],
  "memento": {
   "indicacoes": "Para o tratamento da insuficiência venosa e fragilidade capilar.",
   "contraindicacoes": "Pacientes com histórico de hipersensibilidade e alergia a qualquer um dos componentes do fitoterápico não devem fazer uso do produto. Esse fitoterápico é contraindicado para pessoas com hipersensibilidade a escina ou a extratos de A. hippocastanum e pacientes com insuficiência renal ou hepática. Há indícios de que a absorção de escina seja maior em crianças, predispondo-as a maior toxicidade.",
   "precaucoes": "Toxicidade renal e hepática foram relatadas com o uso de preparados a base de A. hippocastanum em pacientes propensos a esse tipo de distúrbios. Embora não existam restrições, pacientes idosos só devem utilizar o fitoterápico com orientação médica. De acordo com a categoria de risco de fármacos destinados às mulheres grávidas, esse fitoterápico está incluído na categoria de risco C: não foram realizados estudos em animais e em mulheres grávidas; ou então, os estudos em animais revelaram risco, mas não existem estudos disponíveis realizados em mulheres grávidas. Esse fitoterápico não deve ser utilizado por mulheres grávidas sem orientação médica, assim como por crianças e adolescentes.",
   "adversos": "Após ingestão do fitoterápico podem ocorrer, em casos isolados, prurido, náuseas e desconforto gástrico. Raramente podem ocorrer irritação da mucosa gástrica e refluxo.",
   "interacoes": "Esse fitoterápico não deve ser administrado com anticoagulantes orais, pois pode potencializar seu efeito anticoagulante. Cerca de 90% de escina ligamse às proteínas plasmáticas, podendo interferir com a distribuição de outras drogas. Um caso de insuficiência renal foi relatado após administração concomitante de escina e o antibiótico gentamicina.",
   "formas": "Cápsulas ou comprimidos contendo extrato etanólico seco padronizado e gel. Armazenar ao abrigo da luz e de umidade.",
   "posologia": "Oral. Dose diária: 250 a 312 mg (dividida em duas vezes ao dia) do extrato padronizado contendo 16 a 20% de glicosídeos triterpênicos (equivalente a 100 mg de escina). Tópico. Gel para uso tópico contendo 2% de escina.",
   "tempo": "Não foram encontrados dados descritos na literatura consultada sobre o tempo máximo de utilização. O tempo de uso depende da indicação terapêutica e da evolução do quadro acompanhado pelo profissional prescritor.",
   "superdosagem": "Se ingerido em altas doses esse fitoterápico pode causar vômitos, diarreia, fraqueza, espasmos musculares, dilatação da pupila, falta de coordenação e distúrbios da visão e da consciência. Assim como todos os extratos vegetais ricos em saponinas, podem ocorrer irritação da mucosa gástrica e refluxo. Quando grande quantidade de escina é absorvida através da mucosa gastrointestinal irritada ou lesionada, pode ocorrer hemólise, associada a dano renal. Em caso de superdosagem, suspender o fitoterápico imediatamente. Recomenda-se tratamento de suporte sintomático com medidas habituais de apoio e controle das funções vitais.",
   "prescricao": "Fitoterápico, isento de prescrição médica.",
   "quimica": "crianças entre 0 e 5 anos de idade. Em 77% dos Cumarinas, flavonoides e saponinas. casos não foram detectados quaisquer efei- tos tóxicos; em 11,5% dos casos ocorreram efeitos mínimos a moderados. Nos demais 11,5% INFORMAÇÕES SOBRE SEGURANÇA E dos casos, os efeitos foram classificados como EFICÁCIA de toxicidade potencialmente desconhecida."
  }
 },
 {
  "id": "allium-sativum",
  "nome": "Alho",
  "populares": [
   "Alho"
  ],
  "cientifico": "Allium sativum L.",
  "cientificoCompleto": "Allium sativum L.",
  "familia": "Amaryllidaceae",
  "sinonimia": "",
  "parte": "Bulbos frescos ou secos.",
  "via": "Oral",
  "tempoMax": "Não estabelecido",
  "rx": false,
  "porte": "Erva bulbosa",
  "flor": "branca/rosada",
  "tags": [
   "bronquite",
   "asma",
   "tosse",
   "expectorante",
   "catarro",
   "gripe",
   "resfriado",
   "colesterol",
   "hiperlipidemia",
   "hipertensão leve",
   "pressão alta",
   "aterosclerose"
  ],
  "partes": [
   {
    "parte": "Bulbo (dente) fresco ou seco",
    "ok": true,
    "txt": "Parte medicinal."
   },
   {
    "parte": "Uso antes de cirurgia",
    "ok": false,
    "txt": "Suspender ≥10 dias antes (risco de sangramento)."
   }
  ],
  "riscos": {
   "gestante": [
    "c",
    "Contraindicado para grávidas."
   ],
   "gastrite": [
    "c",
    "Contraindicado em gastrite/úlcera gastroduodenal."
   ],
   "hipertireoidismo": [
    "c",
    "Contraindicado no hipertireoidismo."
   ],
   "coagulopatia": [
    "c",
    "Contraindicado em distúrbios da coagulação."
   ],
   "m_anticoag": [
    "c",
    "Aumenta risco de hemorragia (varfarina, heparina, antiagregantes)."
   ],
   "cirurgia": [
    "c",
    "Suspender pelo menos 10 dias antes de cirurgia."
   ],
   "m_antirretroviral": [
    "c",
    "Reduz níveis de inibidores de protease (falha da TARV)."
   ],
   "m_aine": [
    "a",
    "Potencializa efeito antitrombótico de AINEs."
   ],
   "hipotensao": [
    "a",
    "Não usar em hipotensão arterial."
   ],
   "m_antihipertensivo": [
    "a",
    "Não usar junto a anti-hipertensivos (efeito aditivo)."
   ],
   "diabetes": [
    "a",
    "Não usar em hipoglicemia — monitorar glicemia."
   ],
   "m_hipoglicemiante": [
    "a",
    "Risco de hipoglicemia."
   ]
  },
  "idade": {
   "min": 12,
   "nivel": "c",
   "txt": "Tintura: acima de 12 anos."
  },
  "populacao": [],
  "magistral": [
   "Tintura 1:5 (álcool 45%): 50–100 gotas (2,5–5 mL) diluídas em 75 mL de água, 2–3×/dia.",
   "Óleo: 2–5 mg/dia.",
   "Pó seco: 0,4–1,2 g/dia.",
   "Alcoolatura ou extrato fluido: 1–2 mL em 75 mL de água, 2×/dia."
  ],
  "calc": [
   {
    "nome": "Tintura 1:5 — 2,5 a 5 mL em 75 mL de água",
    "tipo": "tintura",
    "mlT": [
     2.5,
     5
    ],
    "ml": 75,
    "freq": "2 a 3 vezes ao dia"
   }
  ],
  "fotos": [
   {
    "src": "assets/img/especies/allium-sativum.jpg",
    "credito": "Wikimedia Commons",
    "link": "https://commons.wikimedia.org/wiki/File:Allium_sativum_Woodwill_1793.jpg",
    "obs": ""
   }
  ],
  "memento": {
   "indicacoes": "Indicado como coadjuvante no tratamento de bronquite crônica, asma, como expectorante, e como preventivo de alterações vasculares. Coadjuvante no tratamento de hiperlipidemia, hipertensão arterial leve a moderada, dos sintomas de gripes e resfriados e auxiliar na prevenção da aterosclerose.",
   "contraindicacoes": "Contraindicado para grávidas, pacientes com gastrite, úlcera gastroduodenal, hipertireoidismo, distúrbios da coagulação ou em tratamento com anticoagulantes, histórico de hipersensibilidade e alergia a qualquer um dos componentes do fitoterápico. Não deve ser usado em pré ou pós-operatórios, devendo ser suspenso pelo menos 10 dias antes de procedimentos cirúrgicos.",
   "precaucoes": "Não usar em casos de hemorragia e tratamento com anticoagulantes e anti-hipertensivos. Suspender o uso do fitoterápico duas semanas antes de intervenções cirúrgicas. Não usar em pessoas com gastrite, úlcera gastroduodenal, hipotensão arterial e hipoglicemia. Pode potencializar os efeitos antitrombóticos de fármacos anti-inflamatórios.",
   "adversos": "Esse fitoterápico pode causar ardência na cavidade oral e no trato gastrointestinal, mialgia, fadiga, vertigem, sudorese, bem como reações alérgicas e asma. O uso desse fitoterápico pode causar decréscimo do hematócrito e da viscosidade sanguínea, aumentando o risco de sangramento pós-operatório, bem como hematoma epidural espontâneo. Efeitos gastrointestinais, tais como desconforto abdominal, náuseas, vômitos e diarreia também são possíveis. Odores corporais característicos de alho podem ocorrer com o uso desse fitoterápico.",
   "interacoes": "Foi descrita interação potencial entre Allium sativum e varfarina. Esse fitoterápico não pode ser utilizado em associação com anticoagulantes orais, heparina, agentes trombolíticos, antiagregantes plaquetários e anti-inflamatórios não-esteroidais, por aumentarem o risco de hemorragias. A associação desse fitoterápico com inibidores da protease pode reduzir as concentrações séricas dessa classe, aumentando o risco de resistência ao antiretroviral e falhas no tratamento. Além disso, pode diminuir a efetividade da clorzoxazona por induzir o seu metabolismo.",
   "formas": "Tintura, alcoolatura, extrato fluido e cápsulas com o óleo.",
   "posologia": "Oral. Tintura (1:5 em álcool 45%): acima de 12 anos tomar 50 a 100 gotas (2,5 a 5 mL) da tintura diluídas em 75 mL de água, duas a três vezes ao dia. Óleo: 2-5 mg (dose diária). Pó seco: 0,4-1,2 g (dose diária). Alcoolatura e extrato fluido: 1 a 2 mL diluídos em 75 ml de água duas vezes ao dia.",
   "tempo": "Não foram encontrados dados descritos na literatura consultada sobre o tempo máximo de utilização. O tempo de uso depende da indicação terapêutica e da evolução do quadro acompanhada pelo profissional prescritor.",
   "superdosagem": "Não foram encontrados dados descritos na literatura consultada sobre problemas decorrentes de superdosagem. Em caso de administração de quantidades acima das recomendadas, suspender o uso e manter o paciente sob observação.",
   "prescricao": "Fitoterápico isento de prescrição médica.",
   "quimica": "Terpenos, ácidos graxos, organosulfurados, saponinas e fenilpropanoides."
  }
 },
 {
  "id": "aloe-vera",
  "nome": "Babosa",
  "populares": [
   "Babosa",
   "aloe"
  ],
  "cientifico": "Aloe vera (L.) Burm.f.",
  "cientificoCompleto": "Aloe vera (L.) Burm.f.",
  "familia": "Xanthorrhoeaceae",
  "sinonimia": "",
  "parte": "Gel incolor mucilaginoso de folhas frescas.",
  "via": "Tópica",
  "tempoMax": "Não estabelecido",
  "rx": false,
  "porte": "Suculenta",
  "flor": "amarela",
  "tags": [
   "queimadura",
   "queimadura de primeiro grau",
   "queimadura de segundo grau",
   "cicatrização",
   "cicatrizante",
   "ferida",
   "pele"
  ],
  "partes": [
   {
    "parte": "Gel incolor do interior da folha fresca",
    "ok": true,
    "txt": "Única parte usada nas preparações."
   },
   {
    "parte": "Casca externa da folha / látex amarelo",
    "ok": false,
    "txt": "Contém antracênicos: dermatite de contato e efeito laxante. Descartar."
   }
  ],
  "riscos": {},
  "idade": null,
  "populacao": [
   "Lavar a folha, cortar as bordas com espinhos e retirar a casca verde.",
   "Deixar a folha escorrer (em pé) por alguns minutos para eliminar o látex amarelo.",
   "Usar apenas o gel transparente sobre a queimadura limpa, 1 a 3 vezes ao dia.",
   "Não usar se o gel estiver com coloração alterada."
  ],
  "magistral": [
   "Gel hidrofílico ou pomada de Aloe vera: aplicar na área afetada 1–3×/dia."
  ],
  "calc": [],
  "fotos": [
   {
    "src": "assets/img/especies/aloe-vera.png",
    "credito": "Wikimedia Commons",
    "link": "https://commons.wikimedia.org/wiki/File:Aloe_vera_flower_inset.png",
    "obs": ""
   }
  ],
  "memento": {
   "indicacoes": "Queimaduras de primeiro e segundo graus, e como cicatrizante.",
   "contraindicacoes": "É contraindicado em pacientes com hipersensibilidade aos componentes do fitoterápico e, em casos de alergia conhecida às plantas da família Xanthrrorhoeacea.",
   "precaucoes": "Orientar a não utilização do produto se apresentar alteração da coloração.",
   "adversos": "Foram relatados alguns casos de dermatite de contato que podem estar associados à presença de constituintes antracênicos, comumente encontrados na parte externa da folha que não deve ser utilizada nas preparações farmacêuticas.",
   "interacoes": "Não foram encontrados dados descritos na literatura consultada.",
   "formas": "Gel hidrofílico e pomada.",
   "posologia": "Tópica. Aplicar na área afetada uma a três vezes ao dia.",
   "tempo": "Não foram encontrados dados descritos na literatura consultada sobre o tempo máximo de utilização. O tempo de uso depende da indicação terapêutica e da evolução do quadro acompanhada pelo profissional prescritor.",
   "superdosagem": "Não foram encontrados dados descritos na literatura consultada sobre problemas decorrentes de superdosagem. Em caso de administração de quantidades acima das recomendadas, suspender o uso e manter o paciente em observação.",
   "prescricao": "Fitoterápico isento de prescrição médica.",
   "quimica": "Mistura complexa de polissacarídeos (pectinas, hemicelulose, glucomano, acemano e derivados de manose). Contém também triterpenos (exemplo, lupeol) e esteroides (campesterol e β-sitosterol)."
  }
 },
 {
  "id": "calendula-officinalis",
  "nome": "Calêndula",
  "populares": [
   "Calêndula"
  ],
  "cientifico": "Calendula officinalis L.",
  "cientificoCompleto": "Calendula officinalis L.",
  "familia": "Asteraceae",
  "sinonimia": "",
  "parte": "Flores.",
  "via": "Tópica",
  "tempoMax": "Conforme evolução",
  "rx": false,
  "porte": "Erva anual",
  "flor": "laranja/amarela",
  "tags": [
   "ferida",
   "cicatrização",
   "cicatrizante",
   "inflamação de pele",
   "lesão de mucosa",
   "gengivite",
   "afta",
   "garganta",
   "eczema",
   "antisséptico"
  ],
  "partes": [
   {
    "parte": "Flores (capítulos florais)",
    "ok": true,
    "txt": "Parte medicinal."
   }
  ],
  "riscos": {
   "alergia_asteraceae": [
    "c",
    "Alergia a plantas da família Asteraceae."
   ],
   "gestante": [
    "c",
    "Não administrar na gravidez sem supervisão."
   ],
   "lactante": [
    "c",
    "Não administrar na lactação sem supervisão."
   ]
  },
  "idade": {
   "min": 12,
   "nivel": "a",
   "txt": "Crianças: somente com supervisão médica."
  },
  "populacao": [
   "Infusão: 1 a 2 g das flores secas em 150 mL de água fervente; abafar 10 min e coar.",
   "Aplicar com algodão sobre a lesão, ou fazer bochechos/gargarejos, 3 vezes ao dia.",
   "Uso externo — não ingerir."
  ],
  "magistral": [
   "Tintura 1:10 (álcool 70%) ou 1:5 (álcool 90%): bochechos com 25 mL diluídos em 100 mL de água.",
   "Gel com 10% da tintura: 3×/dia.",
   "Creme/pomada com 10% de extrato glicólico: 3×/dia (eczema) ou 1×/dia (feridas).",
   "Extrato fluido 1:1 (álcool 40%)."
  ],
  "calc": [
   {
    "nome": "Infusão para uso tópico — 1 a 2 g / 150 mL",
    "tipo": "infusao",
    "g": [
     1,
     2
    ],
    "ml": 150,
    "freq": "3 vezes ao dia (compressa, bochecho ou gargarejo)"
   },
   {
    "nome": "Tintura para bochecho — 25 mL em 100 mL de água",
    "tipo": "tintura",
    "mlT": [
     25,
     25
    ],
    "ml": 100,
    "freq": "3 vezes ao dia"
   }
  ],
  "fotos": [
   {
    "src": "assets/img/especies/calendula-officinalis.jpg",
    "credito": "Wikimedia Commons",
    "link": "https://commons.wikimedia.org/wiki/File:1920px-Calendula_officinalis,_pot_marigold.JPG",
    "obs": ""
   },
   {
    "src": "assets/img/equipe/calendula-officinalis-1.jpg",
    "credito": "Anotações da equipe",
    "link": "",
    "obs": ""
   },
   {
    "src": "assets/img/equipe/calendula-officinalis-2.jpg",
    "credito": "Anotações da equipe",
    "link": "",
    "obs": ""
   }
  ],
  "memento": {
   "indicacoes": "Uso externo como anti-inflamatório, cicatrizante e antisséptico. Para o tratamento de lesões da pele e mucosas, promovendo a cicatrização e modulando os possíveis focos inflamatórios.",
   "contraindicacoes": "Contraindicado a pacientes com histórico de hipersensibilidade ou alergia aos componentes do fitoterápico ou a outras plantas da família Asteraceae. Não deve ser administrado durante a gravidez, lactação ou para crianças sem supervisão médica.",
   "precaucoes": "Não foram encontrados dados descritos na literatura consultada.",
   "adversos": "Reações alérgicas e sensibilização da pele foram relatadas. Efeitos espermicida, antifertilizante e uterotônico também foram relatados.",
   "interacoes": "Não foram encontrados dados descritos na literatura consultada.",
   "formas": "Infusão: 1 a 2 g em 150 mL de água. Tintura: 1:10 em álcool 70% ou 1:5 em álcool 90%. Extrato fluido: 1:1 em álcool 40%. Gel: com extrato glicólico a 10%. Creme: com extrato glicólico a 10%. Pomada (base de lanovaselina) a 10% com extrato hidroalcoolico (tintura 1:5).",
   "posologia": "Tópica Infusão: aplicar três vezes ao dia com auxílio de algodão ou sob a forma de bochechos ou gargarejos. Tintura: realizar bochechos ou gargarejos com 25 mL de tintura diluída em 100 mL de água. Gel: aplicar na área afetada três vezes ao dia a formulação contendo 10% da tintura. Creme ou pomada: aplicar na área afetada três vezes ao dia nos casos de eczemas ou uma vez ao dia nos casos de feridas a formulação contendo 10% do extrato glicólico.",
   "tempo": "O tempo de uso depende da indicação terapêutica e da evolução do quadro acompanhada pelo profissional prescritor.",
   "superdosagem": "Não foram encontrados dados descritos na literatura consultada sobre problemas decorrentes de superdosagem para o uso externo. Em caso de administração de quantidades acima das recomendadas ou por outra via, suspender o uso e manter o paciente sob observação.",
   "prescricao": "Fitoterápico, isento de prescrição médica.",
   "quimica": "Óleo essencial, carotenoides, triterpenos, esteroides, saponinas, ácidos fenólicos, flavonoides e antocianinas."
  }
 },
 {
  "id": "cynara-scolymus",
  "nome": "Alcachofra",
  "populares": [
   "Alcachofra"
  ],
  "cientifico": "Cynara scolymus L.",
  "cientificoCompleto": "Cynara scolymus L.",
  "familia": "Asteraceae",
  "sinonimia": "",
  "parte": "Folhas.",
  "via": "Oral",
  "tempoMax": "2 semanas (reavaliar)",
  "rx": false,
  "porte": "Erva perene",
  "flor": "roxa",
  "tags": [
   "dispepsia",
   "má digestão",
   "gases",
   "flatulência",
   "colesterol",
   "dislipidemia",
   "triglicerídeos",
   "intestino irritável",
   "diurético",
   "aterosclerose"
  ],
  "partes": [
   {
    "parte": "Folhas",
    "ok": true,
    "txt": "Parte medicinal."
   }
  ],
  "riscos": {
   "alergia_asteraceae": [
    "c",
    "Alergia a Asteraceae (lactonas sesquiterpênicas)."
   ],
   "calculo": [
    "c",
    "Contraindicado na obstrução do ducto biliar."
   ],
   "gestante": [
    "c",
    "Contraindicado na gravidez."
   ],
   "lactante": [
    "c",
    "Contraindicado na lactação."
   ],
   "m_diuretico": [
    "a",
    "Com diuréticos em HAS/cardiopatia: supervisão (descompensação pressórica, perda de K+)."
   ],
   "has": [
    "a",
    "Com diuréticos: risco de descompensação da pressão."
   ],
   "cardiopatia": [
    "a",
    "Perda de potássio pode potencializar cardiotônicos."
   ],
   "m_digoxina": [
    "a",
    "Perda de K+ pode potencializar cardiotônicos."
   ],
   "m_anticoag": [
    "a",
    "Pode reduzir a eficácia de AAS e varfarina."
   ]
  },
  "idade": {
   "min": 12,
   "nivel": "a",
   "txt": "Sem estudos em menores de 12 anos."
  },
  "populacao": [],
  "magistral": [
   "Extrato seco aquoso: 1–2 g/dia.",
   "Cápsulas de droga vegetal: 2 cápsulas, 2 a 4×/dia."
  ],
  "calc": [],
  "fotos": [
   {
    "src": "assets/img/especies/cynara-scolymus.jpg",
    "credito": "Wikimedia Commons",
    "link": "https://commons.wikimedia.org/wiki/File:Artichoke_J1.jpg",
    "obs": ""
   }
  ],
  "memento": {
   "indicacoes": "Antidispéptico, antiflatulento, diurético. Auxiliar na prevenção da aterosclerose. Coadjuvante no tratamento de dislipidemia mista leve a moderada e como auxiliar nos sintomas da síndrome do intestino irritável.",
   "contraindicacoes": "Contraindicado para pacientes com histórico de hipersensibilidade e alergia a qualquer um dos componentes do fitoterápico ou a outras plantas da família Asteraceae. Também é contraindicado em casos de obstrução do ducto biliar, gravidez e lactação.",
   "precaucoes": "O uso concomitante com diuréticos em casos de hipertensão arterial ou cardiopatia deve ser realizado sob estrita supervisão médica, dada à possibilidade de haver descompensação da pressão arterial, ou, se a eliminação de potássio for considerável, pode ocorrer potencialização de fármacos cardiotônicos. A ocorrência de hipersensibilidade para C. scolymus foi relatada, devido à presença de lactonas sesquiterpênicas como a cinaropicrina. Não existem estudos disponíveis para recomendar o uso em menores de 12 anos ou durante a gravidez. Não deve ser utilizado por mulheres grávidas sem orientação médica.",
   "adversos": "Efeito laxante em pessoas sensíveis aos componentes do fitoterápico.",
   "interacoes": "Redução da eficácia de medicamentos que interferem na coagulação sanguínea, como ácido acetilsalicílico e anticoagulantes cumarínicos (ex. varfarina). Potenciais interações: pode diminuir as concentrações sanguíneas de fármacos de medicamentos metabolizados pelas CYP3A4, CYP2B6 e CYP2D6, uma vez que a C. scolymus é indutora dessas enzimas.",
   "formas": "Droga vegetal encapsulada, comprimido (droga vegetal), infusão, e extrato seco padronizado.",
   "posologia": "Oral. Dose diária: 1-2 g de extrato seco aquoso. Tomar duas cápsulas, de duas a quatro vezes ao dia.",
   "tempo": "Se os sintomas persistirem por mais de 2 semanas durante o uso do fitoterápico, um médico deve ser consultado.",
   "superdosagem": "Não foram encontrados dados descritos na literatura consultada sobre problemas decorrentes de superdosagem. Em caso de administração de quantidades acima das recomendadas, suspender o uso e manter o paciente sob observação.",
   "prescricao": "Fitoterápico isento de prescrição médica.",
   "quimica": "Ácidos fenólicos, fenilpropanoides, saponinas, flavonoides, sesquiterpernos e esteroides."
  }
 },
 {
  "id": "echinacea-purpurea",
  "nome": "Equinácea",
  "populares": [
   "Equinácea"
  ],
  "cientifico": "Echinacea purpurea (L.) Moench",
  "cientificoCompleto": "Echinacea purpurea (L.) Moench",
  "familia": "Asteraceae",
  "sinonimia": "",
  "parte": "Raiz.",
  "via": "Oral",
  "tempoMax": "Até 8 semanas",
  "rx": true,
  "porte": "Erva perene",
  "flor": "roxa/rosa",
  "tags": [
   "resfriado",
   "gripe",
   "imunidade",
   "prevenção de resfriado",
   "coriza"
  ],
  "partes": [
   {
    "parte": "Raiz",
    "ok": true,
    "txt": "Parte medicinal."
   },
   {
    "parte": "Uso > 8 semanas",
    "ok": false,
    "txt": "Pode causar leucopenia."
   }
  ],
  "riscos": {
   "autoimune": [
    "c",
    "Pode ativar respostas autoimunes (esclerose múltipla, colagenoses...)."
   ],
   "hiv": [
    "c",
    "Contraindicado na SIDA/HIV."
   ],
   "tuberculose": [
    "c",
    "Contraindicado na tuberculose."
   ],
   "m_imunossupressor": [
    "c",
    "Contraindicado com imunossupressores."
   ],
   "transplante": [
    "c",
    "Imunoestimulante."
   ],
   "gestante": [
    "c",
    "Contraindicado para grávidas."
   ],
   "lactante": [
    "a",
    "Lactantes: só com orientação médica."
   ],
   "asma": [
    "a",
    "Raramente agrava quadros asmáticos."
   ]
  },
  "idade": {
   "min": 12,
   "nivel": "c",
   "txt": "Contraindicado para crianças."
  },
  "populacao": [],
  "magistral": [
   "Extrato seco: 250 mg, 1–3×/dia (10–30 mg de ácido chicórico/dia).",
   "Extrato seco (5,5–7,5:1) 30 mg ≈ 200 mg de droga: 6–9 comprimidos/dia.",
   "Raiz seca pulverizada: 2 cápsulas, 3×/dia."
  ],
  "calc": [],
  "fotos": [
   {
    "src": "assets/img/especies/echinacea-purpurea.jpg",
    "credito": "Wikimedia Commons",
    "link": "https://commons.wikimedia.org/wiki/File:Echinacea_purpurea_Grandview_Prairie.jpg",
    "obs": ""
   }
  ],
  "memento": {
   "indicacoes": "Preventivo e coadjuvante no tratamento dos sintomas de resfriados.",
   "contraindicacoes": "Devido à possível ativação de agressões auto-imunes e outras respostas imunes hiper-reativas, o fitoterápico não deve ser administrado em pacientes com esclerose múltipla, colagenose, Síndrome da Imunodeficiência Adquirida (SIDA), tuberculose, pacientes em uso de medicamentos imunossupressores e outras desordens auto-imunes. Contraindicado para crianças, grávidas e pacientes com histórico de hipersensibilidade e alergia a qualquer um dos componentes do fitoterápico.",
   "precaucoes": "Esse fitoterápico não deve ser utilizado por grávidas e lactantes sem orientação médica. Não deve ser utilizado em casos de doenças auto-imunes (encefalites difusa, eritema nodoso, trombocitopenia imunomediada, síndrome de Evans, síndrome de Sjögren com disfunção tubular renal), infecções por HIV e tuberculose. Leucopenia pode ocorrer pela utilização a longo prazo (mais de 8 semanas).",
   "adversos": "Pode causar febre e distúrbios gastrointestinais, como náusea, vômito e paladar desagradável logo após a ingestão. Raras reações alérgicas tais como prurido e agravamento de quadros asmáticos. Reações de hipersensibilidade foram relatadas, como dermatite atópica, urticária, Síndrome de Stevens Johnson, angioedema da pele, edema Quincke e broncoespasmo.",
   "interacoes": "Deve ser administrado com cautela em associação com fármacos cujo metabolismo é dependente das enzimas CYP.",
   "formas": "Cápsulas e comprimidos contendo extrato seco (etanólico). Raiz seca pulverizada.",
   "posologia": "Oral: extrato seco 250 mg, 1 a 3 vezes ao dia (equivalente a 10-30 mg de ácido chicórico por dia). Extrato seco (5,5 - 7.5:1) 30 mg de extrato, equivalente a 200 mg de droga vegetal: 6-9 comprimidos por dia. Raiz seca pulverizada, tomar duas cápsulas, três vezes ao dia.",
   "tempo": "Não utilizar por mais que 8 semanas sucessivas.",
   "superdosagem": "Não foram encontrados dados descritos na literatura consultada sobre problemas decorrentes de superdosagem. Em caso de administração acima das doses recomendadas, suspender o uso e manter o paciente sob observação.",
   "prescricao": "Fitoterápico somente sob prescrição médica.",
   "quimica": "Fenilpropanoides, polissacarídeos, sesquiterpenos."
  }
 },
 {
  "id": "equisetum-arvense",
  "nome": "Cavalinha",
  "populares": [
   "Cavalinha"
  ],
  "cientifico": "Equisetum arvense L.",
  "cientificoCompleto": "Equisetum arvense L.",
  "familia": "Equisetaceae",
  "sinonimia": "",
  "parte": "Folhas e partes aéreas.",
  "via": "Oral",
  "tempoMax": "2 a 4 semanas",
  "rx": false,
  "porte": "Erva (sem flores)",
  "flor": "sem flor",
  "tags": [
   "diurético",
   "retenção de líquido",
   "inchaço",
   "edema"
  ],
  "partes": [
   {
    "parte": "Partes aéreas estéreis (caules/\"folhas\")",
    "ok": true,
    "txt": "Parte medicinal."
   },
   {
    "parte": "Uso crônico",
    "ok": false,
    "txt": "Reduz vitamina B1 (tiamina) e potássio."
   }
  ],
  "riscos": {
   "gestante": [
    "c",
    "Contraindicado na gravidez."
   ],
   "lactante": [
    "c",
    "Contraindicado na lactação."
   ],
   "cardiopatia": [
    "c",
    "Contraindicado quando há restrição hídrica (doença cardíaca grave)."
   ],
   "nefropatia": [
    "c",
    "Contraindicado na doença renal grave; risco de hipercalemia na IRC."
   ],
   "hipocalemia": [
    "a",
    "Efeito diurético pode causar perda de potássio."
   ],
   "desnutricao": [
    "a",
    "Uso crônico reduz tiamina (B1) e potássio."
   ],
   "m_diuretico": [
    "a",
    "Soma de efeito diurético / alteração de potássio."
   ],
   "m_cyp1a2": [
    "a",
    "Pode inibir CYP1A2."
   ]
  },
  "idade": {
   "min": 12,
   "nivel": "c",
   "txt": "Contraindicado para menores de 12 anos."
  },
  "populacao": [
   "Infusão: 2 a 3 g das partes aéreas secas em 250 mL de água fervente (1 xícara grande); abafar 10 min e coar.",
   "Tomar 3 vezes ao dia (máximo 4).",
   "Usar de 2 a 4 semanas. Procurar o médico se houver febre, dor ao urinar ou sangue na urina."
  ],
  "magistral": [
   "Droga vegetal rasurada: 570 mg/dose.",
   "Tintura 1:4–5 (31,5% p/p): 20 gotas/dose.",
   "Tintura 1:5 (96% v/v): 30–40 gotas/dose.",
   "Extrato seco aquoso (4–7:1): 185 mg/dose.",
   "Extrato seco hidroetanólico 70% (7,5–10,5:1): 200–225 mg/dose.",
   "3 doses/dia (máx. 4)."
  ],
  "calc": [
   {
    "nome": "Infusão — 2 a 3 g / 250 mL",
    "tipo": "infusao",
    "g": [
     2,
     3
    ],
    "ml": 250,
    "freq": "3 vezes ao dia (máx. 4)"
   }
  ],
  "fotos": [
   {
    "src": "assets/img/especies/equisetum-arvense.jpg",
    "credito": "Wikimedia Commons",
    "link": "https://commons.wikimedia.org/wiki/File:Equisetum_arvense_foliage.jpg",
    "obs": ""
   }
  ],
  "memento": {
   "indicacoes": "Diurético.",
   "contraindicacoes": "Contraindicado para menores de 12 anos, grávidas, lactantes e pacientes com histórico de hipersensibilidade e alergia a qualquer um dos componentes do fitoterápico. Contraindicado para pacientes nos quais a ingestão reduzida de líquidos é recomendada (por exemplo, doenças cardíacas e renais severas).",
   "precaucoes": "A ingestão crônica diminui níveis da vitamina B1 (tiamina) e o efeito diurético pode causar a perda de potássio (hipocalemia). Em pacientes que apresentam insuficiência renal crônica e que fazem uso de medicamentos que alteram níveis de potássio, pode causar hipercalemia. Se as queixas ou sintomas tais como febre, disúria, espasmo ou hematúria ocorrerem durante o uso do fitoterápico um médico deverá ser consultado. Para outras preparações, exceto o chá medicinal (infuso), recomenda-se manter a ingestão de líquidos apropriada.",
   "adversos": "Bloqueio atrioventricular transitório, distúrbios gastrointestinais e reações alérgicas.",
   "interacoes": "O uso de extratos de E. arvense pode inibir a enzima CYP1A2, interferindo possivelmente com fármacos metabolizados por essa via.",
   "formas": "Tintura: (1:4-5) em solução hidroetanólica a 31,5% (p/p); Tintura (1:5) em solução hidroetanólica a 96% (v/v); Cápsula e comprimido contendo extrato seco (47:1) com extração aquosa; Cápsula e comprimido contendo extrato seco (7,5-10,5:1) com extração hidroetanólica a 70% (v/v); Chá medicinal (infusão).",
   "posologia": "Oral Adulto: a) infusão de folhas ou partes aéreas de 2-3 g em 250 mL de água fervente (xícara de chá),; b) droga vegetal rasurada: 570 mg; c) tintura:(1:4-5) em solução hidroetanólico a 31,5% (p/p): 20 gotas; d) tintura: (1:5) em solução hidroetanólico a 96% (v/v): 30 a 40 gotas; e) extrato seco (4-7:1) com extração aquosa: 185 mg; f ) extrato seco (7,5-10,5:1) com extração hidroetanólica a 70% (v/v): 200 – 225 mg. Dose diária: 3 doses; Dose diária máxima: 4 doses.",
   "tempo": "Utilizar por duas a quatro semanas. Se os sintomas persistirem após uma semana do uso do fitoterápico um médico ou profissional da saúde qualificado deverá ser consultado.",
   "superdosagem": "Não foram encontrados dados descritos na literatura consultada sobre problemas decorrentes de superdosagem. Em caso de administração de quantidades acima das recomendadas o paciente deve ser observado.",
   "prescricao": "Fitoterápico, isento de prescrição médica.",
   "quimica": "Monoterpenoides, dinorditerpenoides, dinorsesquiterpenoides, cumarinas, alcaloides, mucilagens, minerais, flavonoides e saponinas."
  }
 },
 {
  "id": "ginkgo-biloba",
  "nome": "Ginkgo",
  "populares": [
   "Ginkgo"
  ],
  "cientifico": "Ginkgo biloba L.",
  "cientificoCompleto": "Ginkgo biloba L.",
  "familia": "Ginkgoaceae",
  "sinonimia": "",
  "parte": "Folhas.",
  "via": "Oral",
  "tempoMax": "Não estabelecido",
  "rx": true,
  "porte": "Árvore",
  "flor": "sem flor vistosa",
  "tags": [
   "zumbido",
   "tinnitus",
   "vertigem",
   "tontura",
   "labirintite",
   "circulação periférica",
   "cãibra",
   "memória"
  ],
  "partes": [
   {
    "parte": "Folhas (extrato padronizado)",
    "ok": true,
    "txt": "Usar apenas extrato padronizado (ácido ginkgólico < 5 mg/kg)."
   },
   {
    "parte": "Sementes / folhas in natura",
    "ok": false,
    "txt": "Não utilizar em preparo caseiro."
   }
  ],
  "riscos": {
   "gestante": [
    "c",
    "Contraindicado na gravidez."
   ],
   "lactante": [
    "c",
    "Contraindicado na lactação."
   ],
   "cirurgia": [
    "c",
    "Suspender ≥3 dias antes de cirurgia."
   ],
   "epilepsia": [
    "c",
    "Evitar em crises convulsivas."
   ],
   "coagulopatia": [
    "a",
    "Monitorar: relatos de hemorragias."
   ],
   "m_anticoag": [
    "a",
    "Anticoagulantes/antiagregantes: monitorar sangramento."
   ],
   "m_aine": [
    "a",
    "AINEs: risco de hemorragia."
   ],
   "m_anticonvulsivante": [
    "a",
    "Pode reduzir efetividade de anticonvulsivantes."
   ],
   "m_hipoglicemiante": [
    "a",
    "Pode alterar a depuração da insulina."
   ],
   "m_antidepressivo": [
    "a",
    "Risco de síndrome serotoninérgica (ISRS) e potencialização de IMAO."
   ],
   "m_diuretico": [
    "a",
    "Com tiazídicos: relato de hipertensão."
   ],
   "m_antirretroviral": [
    "c",
    "Não usar com efavirenz (reduz nível plasmático)."
   ]
  },
  "idade": {
   "min": 12,
   "nivel": "c",
   "txt": "Contraindicado para menores de 12 anos."
  },
  "populacao": [],
  "magistral": [
   "Extrato seco padronizado (22–27% flavonoides; 5–7% lactonas terpênicas): 120–240 mg/dia em 2–3 doses.",
   "Extrato fluido 1:1: 0,5 mL, 3×/dia."
  ],
  "calc": [],
  "fotos": [
   {
    "src": "assets/img/especies/ginkgo-biloba.jpg",
    "credito": "Wikimedia Commons",
    "link": "https://commons.wikimedia.org/wiki/File:GINKGOBAUM-2.jpg",
    "obs": ""
   }
  ],
  "memento": {
   "indicacoes": "Vertigem e zumbidos (tinitus) resultantes de distúrbios circulatórios, distúrbios circulatórios periféricos, como cãimbras.",
   "contraindicacoes": "Contraindicado para menores de 12 anos, grávidas e a lactantes e pacientes com histórico de hipersensibilidade e alergia a qualquer um dos componentes do fitoterápico. Pacientes com coagulopatias ou em uso de anticoagulantes e antiagregantes plaquetários devem ser cuidadosamente monitorados.",
   "precaucoes": "O uso do G. biloba deve ser suspenso pelo menos três dias antes de procedimentos cirúrgicos. Deve ser evitado em pacientes que apresentam crises convulsivas, principalmente se essas estiverem relacionadas com o uso de preparações com Ginkgo biloba.",
   "adversos": "Podem ocorrer distúrbios gastrointestinais, cefaleia e reações alérgicas cutâneas (hiperemia, edema e prurido). Também foram relatados enjoos, palpitações, hemorragias e hipotensão. Casos de hemorragia subaracnoidea, hematoma subdural, hemorragia intracerebral, hematoma subfrênico, hemorragia vítrea e sangramento pós-operatório foram relatados em pacientes que faziam uso de G. biloba isoladamente.",
   "interacoes": "A associação desse medicamento com anticoagulantes, antiplaquetários, anti-inflamatórios não esteroidais (AINES) e/ou agentes trombolíticos pode aumentar o risco de hemorragias. Esse medicamento pode diminuir a efetividade dos anticonvulsivantes e pode alterar os efeitos da insulina, aumentando a sua depuração. Pode provocar mudanças no estado mental quando associado à buspirona ou ao Hypericum perforatum. Pode potencializar o efeito dos inibidores da monoaminaoxidase e pode aumentar o risco dos efeitos colaterais da nifedipina. Pode aumentar o risco de aparecimento da síndrome serotoninérgica quando associado aos inibidores da recaptação de serotonina e pode causar hipertensão arterial em uso concomitante com os diuréticos tiazídicos, segundo relato de caso. A associação desse medicamento com omeprazol pode acarretar diminuição de nível sérico do omeprazol. A associação com trazodona pode trazer risco de sedação excessiva. O uso concomitante de G. biloba pode aumentar os riscos de eventos adversos causados pela risperidona, como, por exemplo, priapismo. A associação com papaverina pode acarretar potencialização de efeitos terapêuticos e adversos. Se o medicamento for administrado concomitantemente com anticoagulantes (ex. fenoprocoumon e varfarina) ou medicamentos antiplaquetários (por exemplo, clopidogrel, ácido acetilsalicílico e outros fármacos anti-inflamatórios não esteróides), o efeito pode ser influenciado.Os estudos disponíveis com varfarina não indicam que há uma interação entre varfarina e produtos de G. biloba, mas um acompanhamento adequado é aconselhável. Um estudo de interação com talinolol indicou que G. biloba pode inibir a P-glicoproteína intestinal. Isso pode dar origem a maior exposição dos fármacos marcadamente afetados pela P-glicoproteína no intestino, tais como etexilato de dabigatrano. Deve-se acompanhar a combinação de G. biloba e dabigatran. Não é recomendado o uso concomitante de preparações de G. biloba e efavirenz, pois há a diminuição plasmática por indução da atividade de CYP3A4.",
   "formas": "Capsula e comprimido revestido contendo o extrato padronizado (extrato seco das folhas secas) contendo 22–27% de flavonoides glicosilados e 5–7% de lactonas terpênicas (constituídas por aproximadamente 2,8–3,4% de gingkolídeos A, B, e C, além de 2,6–3,2% de bilobalídeo). O teor de ácido ginkgólico é inferior a 5 mg/kg. Soluções para uso oral preparados com o extrato padronizado.",
   "posologia": "Oral. Extrato seco: 120–240 mg diariamente, divididos em 2 ou 3 doses (40 mg de extrato equivale a 1,4-2,7g de folhas). Extrato fluido (1:1): 0,5 mL, 3 vezes ao dia.",
   "tempo": "Não foram encontrados dados descritos na literatura consultada sobre o tempo máximo de utilização. O tempo de uso depende da indicação terapêutica e da evolução do quadro acompanhada pelo profissional prescritor.",
   "superdosagem": "Em caso de administração de quantidades acima das recomendadas, suspender o uso e manter o paciente em observação.",
   "prescricao": "Fitoterápico somente sob prescrição médica.",
   "quimica": "Flavonoides (derivados da quercetina, kaempferol e isorramnetina) e terpenolactonas (ginkgolídeos e bilobalídeos)."
  }
 },
 {
  "id": "glycine-max",
  "nome": "Soja",
  "populares": [
   "Soja"
  ],
  "cientifico": "Glycine max (L.) Merr.",
  "cientificoCompleto": "Glycine max (L.) Merr.",
  "familia": "Leguminosae",
  "sinonimia": "",
  "parte": "Sementes.",
  "via": "Oral",
  "tempoMax": "Não estabelecido",
  "rx": false,
  "porte": "Erva anual",
  "flor": "branca/lilás",
  "tags": [
   "climatério",
   "menopausa",
   "fogacho",
   "ondas de calor",
   "sudorese"
  ],
  "partes": [
   {
    "parte": "Sementes (extrato de isoflavonas)",
    "ok": true,
    "txt": "Parte medicinal."
   }
  ],
  "riscos": {
   "gestante": [
    "a",
    "Evitar na gestação (categoria C)."
   ],
   "lactante": [
    "a",
    "Evitar na lactação."
   ],
   "m_contraceptivo": [
    "a",
    "Evitar com contraceptivos/estrogênios."
   ],
   "m_hormonal": [
    "a",
    "Pode reduzir efeito do tamoxifeno."
   ],
   "m_levotiroxina": [
    "a",
    "Reduz absorção da levotiroxina — intervalo de 2 h."
   ],
   "tireoide": [
    "a",
    "Uso prolongado: risco de hipotireoidismo."
   ],
   "cancer_hormonal": [
    "a",
    "Ação estrogênica (modulador de receptores)."
   ],
   "alergia_amendoim": [
    "a",
    "Reação cruzada com amendoim."
   ]
  },
  "idade": {
   "min": 12,
   "nivel": "c",
   "txt": "Contraindicado para menores de 12 anos."
  },
  "populacao": [],
  "magistral": [
   "Extrato padronizado em isoflavonas: 50–120 mg de isoflavonas/dia."
  ],
  "calc": [],
  "fotos": [
   {
    "src": "assets/img/especies/glycine-max.jpg",
    "credito": "Wikimedia Commons",
    "link": "https://commons.wikimedia.org/wiki/File:Soybean.USDA.jpg",
    "obs": ""
   }
  ],
  "memento": {
   "indicacoes": "Esse fitoterápico é indicado como coadjuvante no alívio dos sintomas do climatério: sintomas vasomotores, tais como: ondas de calor e sudorese. É considerado modulador seletivo de receptores estrogênicos.",
   "contraindicacoes": "Esse fitoterápico é contraindicado para menores de 12 anos. Pacientes com histórico de hipersensibilidade e alergia a qualquer um dos componentes do fitoterápico não devem fazer uso do mesmo.",
   "precaucoes": "Pode ocorrer reação alérgica cruzada com amendoim. De acordo com a categoria de risco de fármacos destinados às mulheres grávidas, esse fitoterápico está incluído na categoria de risco C. Não há estudos disponíveis sobre a teratogenicidade de preparações com alta concentração de isoflavonas, bem como não há evidências científicas disponíveis sobre a segurança de seu uso durante a gestação e lactação, devendo seu emprego ser evitado nessas condições. Esse fitoterápico não deve ser utilizado por mulheres grávidas e em amamentação sem orientação médica.",
   "adversos": "O uso desse fitoterápico pode provocar distúrbios gastrointestinais leves como constipação, flatulência e náusea. Nas doses diárias recomendadas, não foram relatadas reações adversas graves.",
   "interacoes": "Evitar a associação desse fitoterápico com contraceptivos e outros medicamentos de ação estrogênica. A efetividade do tamoxifeno pode ser diminuída por medicamentos à base de soja. A proteína da soja pode reduzir a absorção de levotiroxina no trato digestivo, portanto não se deve tomar os dois medicamentos concomitantemente. É necessário aguardar 2 horas entre uma e outra tomada. As isoflavonas genisteína e daidzeína podem bloquear a tireóide peroxidase e inibir a síntese de tiroxina. Pode ocorrer hipotireoidismo durante tratamentos prolongados. O uso de medicamentos que alteram a microbiota intestinal, como os antibióticos, pode interferir no metabolismo das isoflavonas.",
   "formas": "Cápsulas contendo extrato de G. max: padronizado para conter no mínimo 400 mg em isoflavonas.",
   "posologia": "Oral. A dose diária deve estar entre 50 e 120 mg de isoflavonas.",
   "tempo": "Não foram encontrados dados descritos na literatura consultada sobre o tempo máximo de utilização. O tempo de uso depende da indicação terapêutica e da evolução do quadro acompanhada pelo profissional prescritor.",
   "superdosagem": "Não foram encontrados dados descritos na literatura consultada sobre problemas decorrentes de superdosagem. Em caso de ingestão de quantidades acima das recomendadas o paciente deve ser observado.",
   "prescricao": "Fitoterápico, isento de prescrição medica.",
   "quimica": "Antocianinas, isoflavonas (genisteína, daidzina, glicitina, daidzeina). Outros: tocoferol, e saponinas."
  }
 },
 {
  "id": "harpagophytum-procumbens",
  "nome": "Garra-do-diabo",
  "populares": [
   "Garra-do-diabo"
  ],
  "cientifico": "Harpagophytum procumbens DC.",
  "cientificoCompleto": "Harpagophytum procumbens DC. e Harpagophytum zeyheri Ihlenf. & H. Hartmann",
  "familia": "Pedaliaceae",
  "sinonimia": "",
  "parte": "Raízes secundárias.",
  "via": "Oral",
  "tempoMax": "2 semanas",
  "rx": false,
  "porte": "Erva rasteira",
  "flor": "rosa/roxa",
  "tags": [
   "dor articular",
   "artrose",
   "artrite",
   "lombalgia",
   "dor nas costas",
   "dor lombar",
   "reumatismo"
  ],
  "partes": [
   {
    "parte": "Raízes secundárias (tubérculos)",
    "ok": true,
    "txt": "Parte medicinal."
   },
   {
    "parte": "Fruto com ganchos (\"garra\")",
    "ok": false,
    "txt": "Não é a parte medicinal."
   }
  ],
  "riscos": {
   "calculo": [
    "c",
    "Contraindicado em cálculos biliares."
   ],
   "gestante": [
    "c",
    "Contraindicado na gravidez."
   ],
   "lactante": [
    "c",
    "Contraindicado na lactação."
   ],
   "gastrite": [
    "c",
    "Não usar em úlcera gástrica/duodenal."
   ],
   "intestinal": [
    "a",
    "Não usar no intestino irritável."
   ],
   "cardiopatia": [
    "a",
    "Cautela em afecções cardiovasculares."
   ]
  },
  "idade": {
   "min": 18,
   "nivel": "c",
   "txt": "Contraindicado para menores de 18 anos."
  },
  "populacao": [],
  "magistral": [
   "Raízes: 1–3 g/dia ou extrato equivalente.",
   "Extrato seco (1,5–2,5:1; água): 300 mg a 2,4 g/dia em 2–3 doses.",
   "Extrato seco (5–10:1; água): 600–800 mg/dia em 2–3 doses.",
   "Extrato mole (2,5–4:1; etanol 70%): 10 mL.",
   "Cápsula gastrorresistente: 30–100 mg harpagosídeo."
  ],
  "calc": [
   {
    "nome": "Droga vegetal (raiz) — 1 a 3 g por dia",
    "tipo": "droga",
    "g": [
     1,
     3
    ],
    "freq": "Dose diária total, dividida em 2–3 tomadas"
   }
  ],
  "fotos": [
   {
    "src": "assets/img/especies/harpagophytum-procumbens.jpg",
    "credito": "Wikimedia Commons",
    "link": "https://commons.wikimedia.org/wiki/File:Harpagophytum_5.jpg",
    "obs": ""
   },
   {
    "src": "assets/img/equipe/harpagophytum-procumbens-1.jpg",
    "credito": "Anotações da equipe",
    "link": "",
    "obs": ""
   },
   {
    "src": "assets/img/equipe/harpagophytum-procumbens-2.jpg",
    "credito": "Anotações da equipe",
    "link": "",
    "obs": ""
   },
   {
    "src": "assets/img/equipe/harpagophytum-procumbens-3.jpg",
    "credito": "Anotações da equipe",
    "link": "",
    "obs": ""
   },
   {
    "src": "assets/img/equipe/harpagophytum-procumbens-4.jpg",
    "credito": "Anotações da equipe",
    "link": "",
    "obs": ""
   }
  ],
  "memento": {
   "indicacoes": "Alívio de dores articulares moderadas e lombalgia aguda.",
   "contraindicacoes": "A pacientes com cálculos biliares. É contraindicado para menores de 18 anos, lactantes, grávidas e pacientes com histórico de hipersensibilidade e alergia a qualquer um dos componentes do fitoterápico.",
   "precaucoes": "Dores articulares acompanhadas de edema das articulações, com eritema ou febre devem ser avaliadas pelo médico. Como precaução geral, pacientes com úlcera gástrica e duodenal, intestino irritável e litíase biliar não devem fazer uso desse fitoterápico. H. procumbens deve ser administrado com cautela a pacientes com afecções cardiovasculares.",
   "adversos": "Diarreia, náusea, vômito, dor abdominal, cefaleia, tontura e reações alérgicas cutânea. Se ocorrerem as reações adversas mencionadas acima, um médico deverá ser consultado.",
   "interacoes": "Não foram observados efeitos induzidos pelo extrato de H. procumbens sobre o sistema enzimático citocromo P-450, sugerindo ausência de interação com fármacos metabolizados por essa via.",
   "formas": "Cápsula e comprimido gastroresistentes contendo extrato seco padronizado (30 a 100 mg de harpagosídeo ou 45 a 150 mg de iridoides totais expressos em harpagosídeo).",
   "posologia": "Oral. Administrar 1-3 g de raízes ou quantidade equivalente de extrato aquoso ou hidroalcoólico. Extrato mole (2,5-4,0:1; etanol 70% v/v): 10 mL; Extrato seco (1,5-2,5:1; água): 300 mg a 2,4 g, divididos em 2 a 3 doses diárias; Extrato seco (5-10:1; água): 600 a 800 mg, divididos em 2 a 3 doses diárias; Extrato seco (2,6-4: 1; etanol 30% v/v): 460 mg a 1,6 g, divididos em 2 a 4 doses diárias; Extrato seco (1,5-2,1:1; etanol 40% v/v): 600 mg a 2,7 g, divididos em 2 a 3 doses diárias; Extrato seco (3-5:1; etanol 60% v/v): 960 mg, dividido em 2 a 4 doses diárias; Extrato seco (3-6:1; etanol 80% v/v): 300 mg, dividido em 3 doses diárias; Extrato seco (6-12:1; de etanol 90% v/v): 90 mg, dividido em 2 doses diárias.",
   "tempo": "Uso restrito a duas semanas.",
   "superdosagem": "Não foram encontrados dados descritos na literatura consultada sobre efeitos decorrentes de superdosagem. Em caso de administração acima das doses recomendadas, suspender o uso e manter o paciente em observação.",
   "prescricao": "Fitoterápico, isento de prescrição médica.",
   "quimica": "Iridoides glicosilados, cumarinas, flavonoides, fenilpropanoides, triterpenos e diterpenos."
  }
 },
 {
  "id": "hypericum-perforatum",
  "nome": "Hipérico (erva-de-são-joão)",
  "populares": [
   "Erva-de-são-joão",
   "hipérico"
  ],
  "cientifico": "Hypericum perforatum L.",
  "cientificoCompleto": "Hypericum perforatum L.",
  "familia": "Hypericaceae",
  "sinonimia": "",
  "parte": "Planta inteira com parte aérea florida.",
  "via": "Oral",
  "tempoMax": "Efeito em 2–4 semanas",
  "rx": true,
  "porte": "Erva perene",
  "flor": "amarela",
  "tags": [
   "depressão leve",
   "depressão moderada",
   "tristeza",
   "humor deprimido"
  ],
  "partes": [
   {
    "parte": "Partes aéreas floridas",
    "ok": true,
    "txt": "Parte medicinal."
   },
   {
    "parte": "Exposição solar durante o uso",
    "ok": false,
    "txt": "Fotossensibilização — evitar sol/UV."
   }
  ],
  "riscos": {
   "depressao_grave": [
    "c",
    "Não usar em depressão grave."
   ],
   "gestante": [
    "c",
    "Não recomendado na gravidez."
   ],
   "lactante": [
    "c",
    "Pode inibir prolactina — não usar na lactação."
   ],
   "m_antidepressivo": [
    "c",
    "IMAO e ISRS (ex.: fluoxetina): contraindicado — síndrome serotoninérgica."
   ],
   "m_anticoag": [
    "c",
    "Reduz efeito da varfarina (indução CYP450)."
   ],
   "m_contraceptivo": [
    "c",
    "Reduz eficácia de anticoncepcionais orais."
   ],
   "m_antirretroviral": [
    "c",
    "Reduz inibidores de protease/ITRNN (falha da TARV)."
   ],
   "hiv": [
    "a",
    "Atenção à TARV (indução enzimática)."
   ],
   "m_digoxina": [
    "c",
    "Reduz níveis de digoxina."
   ],
   "m_imunossupressor": [
    "c",
    "Reduz ciclosporina (risco de rejeição)."
   ],
   "transplante": [
    "c",
    "Reduz ciclosporina."
   ],
   "m_teofilina": [
    "a",
    "Reduz níveis de teofilina."
   ]
  },
  "idade": {
   "min": 6,
   "nivel": "c",
   "txt": "Contraindicado abaixo de 6 anos."
  },
  "populacao": [],
  "magistral": [
   "Tintura: 0,8–1,2 mL, 3×/dia (adulto).",
   "Extrato seco: 300 mg, 3×/dia."
  ],
  "calc": [],
  "fotos": [
   {
    "src": "assets/img/especies/hypericum-perforatum.jpg",
    "credito": "Wikimedia Commons",
    "link": "https://commons.wikimedia.org/wiki/File:(MHNT)_Hypericum_perforatum_flower_and_buttons.jpg",
    "obs": ""
   },
   {
    "src": "assets/img/equipe/hypericum-perforatum-1.jpg",
    "credito": "Anotações da equipe",
    "link": "",
    "obs": ""
   },
   {
    "src": "assets/img/equipe/hypericum-perforatum-2.jpg",
    "credito": "Anotações da equipe",
    "link": "",
    "obs": ""
   },
   {
    "src": "assets/img/equipe/hypericum-perforatum-3.jpg",
    "credito": "Anotações da equipe",
    "link": "",
    "obs": ""
   },
   {
    "src": "assets/img/equipe/hypericum-perforatum-4.jpg",
    "credito": "Anotações da equipe",
    "link": "",
    "obs": ""
   }
  ],
  "memento": {
   "indicacoes": "Indicado para o tratamento dos estados depressivos leves a moderados.",
   "contraindicacoes": "Pacientes com histórico de hipersensibilidade e alergia a qualquer um dos componentes do fitoterápico não devem fazer uso. Não usar em episódios de depressão grave. Esse fitoterápico é contraindicado para crianças abaixo de seis anos. Não existem dados disponíveis sobre o uso de H. perforatum na gravidez e na lactação, porém há relatos que o extrato pode inibir a secreção de prolactina, portanto, não se recomenda seu uso em mulheres grávidas e lactantes.",
   "precaucoes": "Deve evitar-se a exposição ao sol ou aos raios ultravioletas quando do uso desse fitoterápico, principalmente sem proteção, devido ao efeito fotossensibilizante de H. perforatum. Não há restrições para o uso de H. perforatum por pessoas que operam veículos e máquinas. A administração do fitoterápico deve ser cuidadosa em pacientes utilizando medicamentos de uso contínuo. Em casos de hipersensibilidade ao fitoterápico, recomenda descontinuar-se o uso e consultar um médico. De acordo com a categoria de risco de fármacos destinados a mulheres grávidas, esse fitoterápico está incluído na categoria de risco C, ou seja, não foram realizados estudos em animais nem em mulheres grávidas; ou então, os estudos em animais revelaram risco, mas não existem estudos disponíveis realizados em mulheres grávidas. Portanto, esse fitoterápico não deve ser utilizado por mulheres grávidas sem orientação médica.",
   "adversos": "O uso de fitoterápicos à base de extratos de H. perforatum pode causar reações fotossensibilizantes. Em casos raros, podem aparecer irritações gastrointestinais, reações alérgicas, fadiga e agitação. Os extratos de H. perforatum são geralmente bem tolerados com incidência de reações adversas em torno de 0,2% dos casos avaliados em estudos clínicos. As reações adversas gastrointestinais podem ser minimizadas ao administrar o fitoterápico após as refeições.",
   "interacoes": "É bem tolerado em uso clínico, mas há evidências de interações significativas com alguns fármacos: como ciclosporina, anticoagulantes cumarínicos, anticoncepcionais orais, teofilina, digoxina, indinavir e possivelmente outros inibidores da protease e transcriptase reversa, prejudicando os efeitos desses. Isso ocorre devido à indução pelo H. perforatum da via metabólica envolvendo o citocromo P-450. A associação de H. perforatum com inibidores da MAO são contraindicados, assim como os inibidores seletivos da recaptação da serotonina, como a fluoxetina. A combinação de H. perforatum com outros fármacos antidepressivos convencionais, tais como os antidepressivos tricíclicos ou fluoxetina, não é recomendada, exceto sob supervisão médica. Há inúmeros relatos que possibilitam concluir que extratos de H. perforatum estimulam as enzimas hepáticas que realizam o metabolismo de drogas e podem reduzir os níveis séricos e eficácia terapêutica de outros medicamentos. A coadministração de teofilina e extrato de H. perforatum reduziu o nível sérico de teofilina em paciente, requerendo aumento da dose. A administração concomitante de H. perforatum e digoxina reduziu as concentrações séricas de digoxina após 10 dias de tratamento. A diminuição das concentrações séricas de ciclosporina, varfarina e fenoprocumarina foi observada em pacientes que foram tratados concomitantemente com extratos de H. perforatum. O uso concomitante de H. perforatum em cinco pacientes com inibidores da recaptação da serotonina resultou em sintomas de excesso de serotonina. Foi divulgado um relatório sobre a interação significativa de drogas com o H. perforatum e indinavir, inibidor da protease, usado para tratar infecções por HIV. O H. perforatum reduziu substancialmente as concentrações plasmáticas de indinavir, devido à indução da via metabólica do citocromo P-450. Como consequência, a utilização concomitante de H. perforatum e inibidores da protease ou inibidores de transcriptase reversa não-nucleosideos não é recomendada, e pode resultar em concentrações sub-terapêuticas de drogas anti-retrovirais, levando à perda da atividade virucida e o desenvolvimento de resistência.",
   "formas": "Cápsulas e comprimidos contendo extrato seco e tintura.",
   "posologia": "Oral. Uso adulto: 0,8 a 1,2 mL da tintura 3 vezes ao dia. Extrato seco (300 mg, 3 vezes ao dia).",
   "tempo": "Tal como acontece com outras drogas antidepressivas, a observação dos efeitos terapêuticos de H. perforatum podem requerer 2-4 semanas de tratamento.",
   "superdosagem": "Tratamentos com raios ultravioleta ou exposição prolongada à luz solar devem ser evitados durante o tratamento com H. perforatum, devido à ocorrência de fotossensibilização em indivíduos sensíveis a luz. Em animais, foi observado aumento da fotossensibilidade. Se ocorrer superdosagem em seres humanos, deve-se proteger a pele dos raios solares ou ultravioleta por duas semanas. Porém, caso ocorra ingestão de doses excessivas, deve-se provocar o esvaziamento gástrico logo após o acidente. Em doses maciças, foram relatadas alterações do ritmo cardíaco, da visão, depressão, estados de confusão mental, alucinação e psicose. Em caso de superdosagem, suspender o uso e procurar orientação médica de imediato.",
   "prescricao": "Fitoterápico, somente sob prescrição médica.",
   "quimica": "Antraquinonas e flavonoides."
  }
 },
 {
  "id": "lippia-sidoides",
  "nome": "Alecrim-pimenta",
  "populares": [
   "Alecrim-pimenta",
   "alecrim-bravo"
  ],
  "cientifico": "Lippia sidoides Cham.",
  "cientificoCompleto": "Lippia sidoides Cham.",
  "familia": "Verbenaceae",
  "sinonimia": "",
  "parte": "Folhas e flores.",
  "via": "Uso externo (bucal e tópico)",
  "tempoMax": "7 dias a 1 ano (enxaguatórios até 10% de óleo)",
  "rx": false,
  "porte": "Arbusto",
  "flor": "branca",
  "tags": [
   "gengivite",
   "afta",
   "inflamação da boca",
   "antisséptico bucal",
   "mau hálito",
   "micose",
   "pano branco",
   "caspa",
   "couro cabeludo",
   "escabiose",
   "sarna",
   "pele"
  ],
  "partes": [
   {
    "parte": "Folhas e flores",
    "ok": true,
    "txt": "Parte medicinal."
   },
   {
    "parte": "Inalação do vapor da infusão",
    "ok": false,
    "txt": "Componentes voláteis irritantes — não inalar."
   },
   {
    "parte": "Engolir o bochecho",
    "ok": false,
    "txt": "Não engolir após bochecho/gargarejo."
   }
  ],
  "riscos": {
   "gestante": [
    "c",
    "Tintura: não usar em gestantes."
   ],
   "lactante": [
    "c",
    "Tintura: não usar em lactantes."
   ],
   "alcoolismo": [
    "c",
    "Tintura (alcoólica): não usar em alcoolistas."
   ],
   "diabetes": [
    "a",
    "Tintura: não usar em diabéticos."
   ]
  },
  "idade": {
   "min": 2,
   "nivel": "c",
   "txt": "Tintura: não usar em menores de 2 anos."
  },
  "populacao": [
   "Infusão: 2 a 3 colheres de chá (≈2–3 g) de folhas secas em 150 mL de água fervente; abafar e coar.",
   "Fazer bochechos e/ou gargarejos 2 a 3 vezes ao dia. Não engolir.",
   "Não usar o vapor para inalação."
  ],
  "magistral": [
   "Tintura 1:5 (etanol 70%): 10 mL em 75 mL de água — bochecho ou aplicação com algodão, 3×/dia.",
   "Colutório, gel e gel-creme com óleo essencial (até 10%).",
   "Sabonete líquido: deixar 10 min na área afetada e enxaguar."
  ],
  "calc": [
   {
    "nome": "Infusão para bochecho — 2 a 3 g / 150 mL",
    "tipo": "infusao",
    "g": [
     2,
     3
    ],
    "ml": 150,
    "freq": "2 a 3 vezes ao dia (não engolir)"
   },
   {
    "nome": "Tintura — 10 mL em 75 mL de água",
    "tipo": "tintura",
    "mlT": [
     10,
     10
    ],
    "ml": 75,
    "freq": "3 vezes ao dia"
   }
  ],
  "fotos": [
   {
    "src": "assets/img/especies/lippia-sidoides.jpg",
    "credito": "Wikimedia Commons",
    "link": "https://commons.wikimedia.org/wiki/File:Lippia_graveolens,_known_as_Mexican_Oregano_(11628265214).jpg",
    "obs": "Foto ilustrativa do gênero Lippia (L. graveolens). Substitua por uma foto de L. sidoides."
   }
  ],
  "memento": {
   "indicacoes": "Anti-inflamatório, antisséptico da cavidade oral, afecções da pele e couro cabeludo. Antisséptico tópico, antimicótico e escabicida.",
   "contraindicacoes": "A infusão não deve ser usada em inalações devido à ação irritante dos componentes voláteis. Não usar a tintura em gestantes, em lactantes, crianças menores de dois anos, alcoolistas e diabéticos. O sabonete líquido é contraindicado para pessoas com problemas de hipersensibilidade ao fitoterápico.",
   "precaucoes": "Não engolir o produto após o bochecho e gargarejo. Manter fora do alcance de crianças.",
   "adversos": "A infusão pode provocar suave sensação de ardor na boca e alterações no paladar. A aplicação tópica da tintura pode provocar ardência.",
   "interacoes": "Não foram encontrados dados descritos na literatura consultada.",
   "formas": "Infusão (2-3 g), tintura (1:5, etanol 70%), colutório à base do óleo essencial, gel contendo óleo essencial e gel-creme contendo óleo essencial e sabonete líquido.",
   "posologia": "Uso externo Infuso (2-3 colheres de chá em 150 mL de água): fazer bochechos e/ou gargarejos duas a três vezes ao dia. Tintura: após higienização, aplicar 10 mL da tintura diluída em 75 mL de água, com auxílio de algodão, três vezes ao dia. Fazer bochechos ou gargarejos com 10 mL da tintura diluída em 75 mL de água, três vezes ao dia. Gel: aplicar nas áreas afetadas de uma a três vezes ao dia. Sabonete líquido: durante o banho, aplicar na área afetada, deixando o sabonete em contato por 10 minutos. Lavar com água corrente.",
   "tempo": "O uso foi considerado seguro para enxaguatórios, géis e colutórios com até 10% de óleo essencial em períodos de 7 a 30 dias, de três meses e um ano.",
   "superdosagem": "Não foram encontrados dados descritos na literatura consultada sobre problemas decorrentes de superdosagem. Em caso de administração de quantidades acima das recomendadas, suspender o uso e manter o paciente sob observação.",
   "prescricao": "Fitoterápico, isento de prescrição médica.",
   "quimica": "Óleo essencial (timol, carvacrol), triterpenoides, naftoquinonas, taninos e flavonoides."
  }
 },
 {
  "id": "matricaria-chamomilla",
  "nome": "Camomila",
  "populares": [
   "Camomila",
   "matricária",
   "maçanilha"
  ],
  "cientifico": "Matricaria chamomilla L.",
  "cientificoCompleto": "Matricaria chamomilla L.",
  "familia": "Asteraceae",
  "sinonimia": "",
  "parte": "Inflorescências.",
  "via": "Oral e tópica",
  "tempoMax": "Não estabelecido",
  "rx": false,
  "porte": "Erva anual",
  "flor": "branca com centro amarelo",
  "tags": [
   "ansiedade",
   "nervosismo",
   "insônia leve",
   "cólica",
   "espasmo",
   "cólica intestinal",
   "inflamação da boca",
   "gengivite",
   "afta",
   "calmante"
  ],
  "partes": [
   {
    "parte": "Inflorescências (capítulos florais)",
    "ok": true,
    "txt": "Parte medicinal."
   }
  ],
  "riscos": {
   "gestante": [
    "c",
    "Atividade emenagoga e relaxante uterina."
   ],
   "alergia_asteraceae": [
    "c",
    "Alergia a Asteraceae (risco de anafilaxia/dermatite)."
   ],
   "m_anticoag": [
    "a",
    "Interação descrita com varfarina."
   ],
   "m_estatina": [
    "a",
    "Interação descrita com estatinas."
   ],
   "m_contraceptivo": [
    "a",
    "Interação descrita com contraceptivos orais."
   ]
  },
  "idade": {
   "min": 3,
   "nivel": "c",
   "txt": "Não utilizar em menores de 3 anos. Infuso oral: acima de 12 anos."
  },
  "populacao": [
   "Chá (infuso): despejar 150 mL de água fervente sobre as flores secas, tampar e aguardar 5–10 min; coar.",
   "Tomar 150 mL, 3 a 4 vezes ao dia, entre as refeições (acima de 12 anos).",
   "Bochecho/gargarejo com o infuso morno, 3 vezes ao dia.",
   "Compressas: 30–100 g das flores em 1 litro de água."
  ],
  "magistral": [
   "Extrato fluido 1:1 (etanol 45%): adultos 1–4 mL, 3×/dia; crianças > 3 anos 0,6–2 mL dose única.",
   "Extrato seco padronizado (1,2% apigenina): cápsulas/comprimidos."
  ],
  "calc": [
   {
    "nome": "Infuso oral — 6 a 9 g / 150 mL (valor do Memento)",
    "tipo": "infusao",
    "g": [
     6,
     9
    ],
    "ml": 150,
    "freq": "150 mL, 3 a 4 vezes ao dia, entre as refeições"
   },
   {
    "nome": "Compressa — 30 a 100 g / 1000 mL",
    "tipo": "infusao",
    "g": [
     30,
     100
    ],
    "ml": 1000,
    "freq": "Uso externo"
   }
  ],
  "fotos": [
   {
    "src": "assets/img/especies/matricaria-chamomilla.jpg",
    "credito": "Wikimedia Commons",
    "link": "https://commons.wikimedia.org/wiki/File:Matricaria_February_2008-1.jpg",
    "obs": ""
   },
   {
    "src": "assets/img/equipe/matricaria-chamomilla-1.jpg",
    "credito": "Anotações da equipe",
    "link": "",
    "obs": ""
   },
   {
    "src": "assets/img/equipe/matricaria-chamomilla-2.jpg",
    "credito": "Anotações da equipe",
    "link": "",
    "obs": ""
   },
   {
    "src": "assets/img/equipe/matricaria-chamomilla-3.jpg",
    "credito": "Anotações da equipe",
    "link": "",
    "obs": ""
   }
  ],
  "memento": {
   "indicacoes": "Antiespasmódico, ansiolítico e sedativo leve. Antiinflamatório em afecções da cavidade oral.",
   "contraindicacoes": "A gestantes devido à atividade emenagoga e relaxante da musculatura lisa. Pacientes com hipersensibilidade ou alergia a plantas da família Asteraceae.",
   "precaucoes": "Não há informações sobre precauções gerais e relacionadas a possíveis efeitos teratogênicos, na amamentação ou uso pediátrico. Relatos sobre segurança e eficácia durante a gestação não estão disponíveis.",
   "adversos": "A presença de lactonas sesquiterpênicas nas flores de camomila poderá desencadear reações alérgicas em indivíduos sensíveis, e tem sido descrita dermatite de contato para algumas preparações contento camomila. Poucos casos de alergia foram atribuídos especificamente a camomila. Um caso de reação anafilática por ingestão de flores de camomila foi registrado.",
   "interacoes": "Uso interno Foram descritas interações com varfarina, estatinas e contraceptivos orais.",
   "formas": "Infuso. Cápsula ou comprimido contendo extrato seco (padronizado em 1,2% de apigenina). Extrato fluido (1:1): em solução hidroetanólica a 45%.",
   "posologia": "Oral. Administrar 150 mL do infuso (5-10 min após o preparo), 3-4 vezes entre as refeições (acima de 12 anos). Administrar 1-4 mL do extrato fluido para adultos (3 vezes ao dia) ou 0,6-2 mL em dose única (crianças maiores que 3 anos). Não utilizar em crianças menores de 3 anos. Bochechos e/ou gargarejos: administrar o infuso (510 minutos após o preparo), 3 vezes ao dia. Uso externo Tópica. Compressas: utilizar a infusão preparada com 30-100 g de droga vegetal em 1000 mL de água. Infuso: 6-9 g em 150 mL ou 30-100 g em 1000 mL.",
   "tempo": "Não foram encontrados dados descritos na literatura consultada sobre o tempo máximo de utilização. O tempo de uso depende da indicação terapêutica e da evolução do quadro acompanhada pelo profissional prescritor.",
   "superdosagem": "Não foram encontrados dados descritos na literatura consultada sobre problemas decorrentes de superdosagem. Em caso de ingestão de quantidades acima das recomendadas o paciente deve ser observado.",
   "prescricao": "Fitoterápico isento de prescrição médica.",
   "quimica": "Flavonoides (apigenina, luteolina). Cumarina (umbeliferona). Óleo essencial (farneseno, alfa-bisabolol, óxidos de alfa-bisabolol, alfa-camazuleno, espiroéteres)."
  }
 },
 {
  "id": "maytenus-ilicifolia",
  "nome": "Espinheira-santa",
  "populares": [
   "Espinheira-santa"
  ],
  "cientifico": "Maytenus ilicifolia Mart. ex Reissek",
  "cientificoCompleto": "Maytenus ilicifolia Mart.ex Reissek e Maytenus aquifolia Mart.",
  "familia": "Celastraceae",
  "sinonimia": "",
  "parte": "Folhas.",
  "via": "Oral",
  "tempoMax": "Não estabelecido (estudo: 28 dias)",
  "rx": false,
  "porte": "Arbusto/árvore pequena",
  "flor": "amarelo-esverdeada",
  "tags": [
   "dispepsia",
   "azia",
   "queimação",
   "gastrite",
   "acidez",
   "má digestão",
   "úlcera",
   "estômago"
  ],
  "partes": [
   {
    "parte": "Folhas",
    "ok": true,
    "txt": "Parte medicinal."
   },
   {
    "parte": "Dose excessiva",
    "ok": false,
    "txt": "Fenóis em excesso irritam a mucosa: vômitos, cólicas e diarreia."
   }
  ],
  "riscos": {
   "gestante": [
    "c",
    "Não usar na gravidez."
   ],
   "lactante": [
    "c",
    "Reduz a produção de leite materno."
   ],
   "alcoolismo": [
    "a",
    "Não associar a bebidas alcoólicas."
   ],
   "m_hepatotoxico": [
    "a",
    "Possível dano hepático com metotrexato, amiodarona, cetoconazol, anabolizantes."
   ],
   "m_imunossupressor": [
    "a",
    "Efeito antagonista."
   ],
   "polifarmacia": [
    "a",
    "Pode alterar CYP e P-gp: evitar em polifarmácia."
   ]
  },
  "idade": {
   "min": 6,
   "nivel": "c",
   "txt": "Contraindicado em menores de 6 anos (uso oral indicado acima de 12)."
  },
  "populacao": [
   "Infuso: 3 g de folhas secas (≈1 colher de sopa) em 150 mL de água fervente; abafar e coar.",
   "Tomar 150 mL logo após o preparo, 3 a 4 vezes ao dia.",
   "Suspender antes de exames de medicina nuclear."
  ],
  "magistral": [
   "Extrato seco: 860 mg, 2–3×/dia (adultos e > 12 anos)."
  ],
  "calc": [
   {
    "nome": "Infuso — 3 g / 150 mL",
    "tipo": "infusao",
    "g": [
     3,
     3
    ],
    "ml": 150,
    "freq": "3 a 4 vezes ao dia"
   }
  ],
  "fotos": [
   {
    "src": "assets/img/especies/maytenus-ilicifolia.jpg",
    "credito": "Wikimedia Commons",
    "link": "https://commons.wikimedia.org/wiki/File:Maytenus_ilicifolia.jpg",
    "obs": ""
   }
  ],
  "memento": {
   "indicacoes": "Antidispéptico, antiácido e protetor da mucosa gástrica.",
   "contraindicacoes": "Não deve ser usado durante a gravidez, lactação e em crianças menores de seis anos. Há indícios que o uso de espinheira-santa causa redução do leite materno. O uso interno da espinheira-santa é contraindicado durante a lactação.",
   "precaucoes": "Não deve ser usado durante a gravidez e lactação. Suspender o uso quando da realização de exames de medicina nuclear.",
   "adversos": "Alguns casos raros de hipersensibilidade são descritos. Não foram relatados, até o momento, efeitos adversos graves ou que coloquem em risco a saúde dos pacientes utilizando extratos de M. ilicifolia nas doses recomendadas. Raramente, podem ocorrer casos de hipersensibilidade. Nesse caso, deve ser suspenso o uso e acompanhado o paciente. Nos estudos clínicos realizados foram descritos um caso de aumento do apetite com o uso do medicamento e um relato de mal estar indefinido, boca seca, gosto estranho na boca, náusea, tremor nas mãos e poliúria, mas isso ocorreu em sujeitos de pesquisa que receberam dosagens até 10 vezes maior que a usual humana. No estudo foi descrito redução do leite materno.",
   "interacoes": "Nenhum estudo foi desenvolvido avaliando a interação de extratos de M. ilicifolia com medicamentos. A legislação brasileira não recomenda a administração concomitante de M. ilicifolia com bebidas alcoólicas e outros medicamentos. Compostos polifenólicos podem ser precursores de quinonas ou de intermediários quinonametídeos que são inativadores das CYP. Da mesma forma, a pristimerina, um triterpenoide quinonametídeo também pode agir como inibidor da CYP alterando o efeito de diversos medicamentos. Testes ex vivo mostraram que quercetina, kaempferol e outros compostos fenólicos podem modular a atividade da PgP (Fosfoglicolato fosfatase), alterando o metabolismo de outros medicamentos. Assim, plantas medicinais que os contenham devem ser evitadas por usuários de polifarmácia. Pode ocorrer interação com esteróides anabolizantes, metotrexato, amiodarona e cetoconazol, por possível dano hepático, e com imunossupressores por apresentar efeitos antagonistas.",
   "formas": "Cápsulas ou comprimidos contendo extrato seco. Infuso: 3 g de folhas secas em 150 mL de água (q.s.p.).",
   "posologia": "Oral.Uso adulto e infantil acima de 12 anos. Extrato seco: tomar 860 mg de duas a três vezes ao dia. Infuso: 3 g para 150 mL. Tomar 150 mL do infuso, logo após o preparo, três a quatro vezes ao dia.",
   "tempo": "Não foram encontrados dados descritos na literatura consultada sobre o tempo máximo de utilização. O tempo de uso depende da indicação terapêutica e da evolução do quadro acompanhada pelo profissional prescritor. Estudo clínico avaliado propõe a utilização por 28 dias.",
   "superdosagem": "Não há relatos de intoxicações por superdosagem de M. officinalis. Plantas ricas em fenóis totais, como a M. ilicifolia, quando usadas em doses excessivas, podem causar irritação da mucosa gástrica e intestinal, gerando vômitos, cólicas intestinais e diarreia.",
   "prescricao": "Fitoterápico isento de prescrição médica.",
   "quimica": "Terpenos, flavonoides, e taninos."
  }
 },
 {
  "id": "passiflora-incarnata",
  "nome": "Maracujá (passiflora)",
  "populares": [
   "Maracujá",
   "flor da paixão",
   "maracujá doce"
  ],
  "cientifico": "Passiflora incarnata L.",
  "cientificoCompleto": "Passiflora incarnata L.",
  "familia": "Passifloraceae",
  "sinonimia": "",
  "parte": "Folhas.",
  "via": "Oral",
  "tempoMax": "2 semanas (reavaliar)",
  "rx": false,
  "porte": "Trepadeira",
  "flor": "roxa/branca",
  "tags": [
   "ansiedade",
   "nervosismo",
   "insônia",
   "agitação",
   "estresse",
   "calmante",
   "sedativo leve"
  ],
  "partes": [
   {
    "parte": "Folhas (partes aéreas)",
    "ok": true,
    "txt": "Parte medicinal."
   }
  ],
  "riscos": {
   "gestante": [
    "c",
    "Contraindicado na gravidez."
   ],
   "m_sedativo": [
    "c",
    "Não usar com sedativos/depressores do SNC."
   ],
   "lactante": [
    "a",
    "Não recomendado para lactantes."
   ],
   "alcoolismo": [
    "a",
    "Não recomendado para alcoolistas."
   ],
   "diabetes": [
    "a",
    "Não recomendado para diabéticos."
   ],
   "m_anticoag": [
    "a",
    "Cumarinas podem interagir com varfarina."
   ],
   "m_antidepressivo": [
    "a",
    "Pode potencializar IMAO."
   ],
   "dirige": [
    "a",
    "Causa sonolência: não dirigir/operar máquinas."
   ]
  },
  "idade": {
   "min": 12,
   "nivel": "a",
   "txt": "Crianças de 3 a 12 anos: apenas com orientação médica."
  },
  "populacao": [
   "Infusão: 1 a 2 g de folhas secas em 150 mL de água fervente; abafar por 10–15 min e coar.",
   "Tomar 1 a 4 vezes ao dia (adolescentes e adultos).",
   "Pode causar sonolência — evitar dirigir."
  ],
  "magistral": [
   "Droga vegetal encapsulada: 0,5–2 g, 1–4×/dia.",
   "Extrato fluido 1:1 (etanol 25%): 0,5–1 mL, 3×/dia.",
   "Tintura 1:8 (álcool 45%): 0,5–2 mL, 3×/dia."
  ],
  "calc": [
   {
    "nome": "Infusão — 1 a 2 g / 150 mL",
    "tipo": "infusao",
    "g": [
     1,
     2
    ],
    "ml": 150,
    "freq": "1 a 4 vezes ao dia"
   }
  ],
  "fotos": [
   {
    "src": "assets/img/especies/passiflora-incarnata.jpg",
    "credito": "Wikimedia Commons",
    "link": "https://commons.wikimedia.org/wiki/File:Passiflora_incarnata_fruit.jpg",
    "obs": ""
   }
  ],
  "memento": {
   "indicacoes": "Ansiolítico e sedativo leve.",
   "contraindicacoes": "Seu uso é contraindicado durante a gravidez. Não utilizar em casos de tratamento com sedativos e depressores do sistema nervoso.",
   "precaucoes": "Seu uso não é recomendado em gestantes; lactantes; alcoolistas e diabéticos. Crianças de três a 12 anos devem passar por orientação médica. Seu uso pode causar sonolência. Não utilizar em caso de tratamento com medicamentos depressores do sistema nervoso central. Seu uso pode causar sonolência, não utilizar cronicamente. Pode ocorrer sonolência durante o tratamento. Nesse caso o paciente não deverá dirigir veículos ou operar máquinas, já que a habilidade e atenção podem ficar reduzidas.",
   "adversos": "Existem casos clínicos relatados de hipersensibilidade, asma ocupacional mediada por IgE e rinite. Doses elevadas poderão causar estados de sonolência excessiva.",
   "interacoes": "Esse fitoterápico potencializa os efeitos sedativos do pentobarbital e hexobarbital, aumentando o tempo de sono de pacientes. Há indícios de que as cumarinas presentes na espécie vegetal apresentam ação anticoagulante potencial e possivelmente interagem com varfarina. O uso desse fitoterápico associado a drogas inibidoras da monoamino oxidase (isocarboxazida, fenelzina e tranilcipromina) pode potencializar o efeito.",
   "formas": "Planta fresca (in natura), droga vegetal (encapsulada), extrato fluido e tintura.",
   "posologia": "Oral. Para adolescentes e adultos: infusão da droga vegetal - 1-2 g em 150 mL de água fervente, tomar 1-4 vezes por dia (10 a 15 minutos após o preparo). Droga vegetal encapsulada – 0,5-2 g, 1-4 vezes por dia. Extrato fluido (1:1 em álcool etílico 25%) - 0,5 a 1,0 mL, 3 vezes ao dia. Tintura (1:8 em álcool 45%) - 0,5 a 2,0 mL, 3 vezes ao dia. A posologia recomendada para adultos é de 3-5 vezes ao dia, e para adolescentes de 3 vezes ao dia. A dose do extrato seco deverá corresponder à posologia das formas acima descritas.",
   "tempo": "Caso os sintomas persistam acima de duas semanas durante o uso do medicamento, um médico deverá ser procurado.",
   "superdosagem": "Em caso de superdosagem, suspender o uso e procurar orientação médica de imediato. Alguns dos sintomas são: sedação, diminuição da atenção e dos reflexos.",
   "prescricao": "Fitoterápico isento de prescrição medica.",
   "quimica": "Os constituintes químicos são: fitosteróis, heterosídeos cianogênicos, alcaloides indólicos (menos de 0,03%), flavonoides (di-C-heterosídeos de flavonas até 2,5%, vitexina e apigenina) e cumarinas."
  }
 },
 {
  "id": "paullinia-cupana",
  "nome": "Guaraná",
  "populares": [
   "Guaraná"
  ],
  "cientifico": "Paullinia cupana Kunth",
  "cientificoCompleto": "Paullinia cupana Kunth",
  "familia": "Sapindaceae",
  "sinonimia": "",
  "parte": "Sementes.",
  "via": "Oral",
  "tempoMax": "1 mês (pausa de 2 semanas)",
  "rx": false,
  "porte": "Trepadeira/arbusto",
  "flor": "branca",
  "tags": [
   "cansaço",
   "fadiga",
   "astenia",
   "desânimo",
   "falta de energia",
   "estimulante"
  ],
  "partes": [
   {
    "parte": "Sementes (extrato padronizado em cafeína)",
    "ok": true,
    "txt": "Parte medicinal."
   },
   {
    "parte": "Uso noturno / excesso",
    "ok": false,
    "txt": "Insônia, taquicardia, arritmias; risco de dependência."
   }
  ],
  "riscos": {
   "cardiopatia": [
    "c",
    "Contraindicado em distúrbios cardiovasculares/arritmia."
   ],
   "has": [
    "c",
    "Contraindicado na hipertensão arterial."
   ],
   "gastrite": [
    "c",
    "Contraindicado em gastrite e úlcera."
   ],
   "intestinal": [
    "c",
    "Contraindicado no cólon irritável."
   ],
   "nefropatia": [
    "c",
    "Contraindicado em afecções renais."
   ],
   "hipertireoidismo": [
    "c",
    "Contraindicado no hipertireoidismo."
   ],
   "hepatopatia": [
    "c",
    "Contraindicado na cirrose hepática."
   ],
   "ansiedade_panico": [
    "a",
    "Desaconselhado em pânico, ansiedade, agitação e insônia."
   ],
   "epilepsia": [
    "a",
    "Desaconselhado na epilepsia."
   ],
   "coagulopatia": [
    "a",
    "Não usar em distúrbios da coagulação."
   ],
   "m_anticoag": [
    "c",
    "Inibe agregação plaquetária: risco de sangramento."
   ],
   "m_digoxina": [
    "a",
    "Hipocalcemia pode aumentar toxicidade da digoxina."
   ],
   "m_contraceptivo": [
    "a",
    "Etinilestradiol potencializa a cafeína."
   ],
   "taquicardia": [
    "a",
    "Aumenta a frequência cardíaca."
   ]
  },
  "idade": {
   "min": 12,
   "nivel": "c",
   "txt": "Contraindicado para crianças."
  },
  "populacao": [],
  "magistral": [
   "Extrato seco padronizado em cafeína (250 mg): 2 cápsulas pela manhã + 1–2 após o almoço.",
   "Não tomar à noite. Não associar café, chá-mate, refrigerantes de cola."
  ],
  "calc": [],
  "fotos": [
   {
    "src": "assets/img/especies/paullinia-cupana.jpg",
    "credito": "Wikimedia Commons",
    "link": "https://commons.wikimedia.org/wiki/File:Paullinia_cupana_-_Köhler–s_Medizinal-Pflanzen-234.jpg",
    "obs": ""
   }
  ],
  "memento": {
   "indicacoes": "Astenia e como psicoestimulante.",
   "contraindicacoes": "Contraindicado para pacientes com distúrbios cardiovasculares, hipertensão arterial, arritmia cardíaca, gastrite, úlcera péptica, úlcera duodenal, cólon irritável, afecções renais, hipertireoidismo, cirrose hepática e predisposição à espasmos musculares. É contraindicado para crianças e pacientes com histórico de hipersensibilidade e alergia a qualquer um dos componentes do fitoterápico.",
   "precaucoes": "Seu uso é desaconselhado a pacientes que apresentem desordens psíquicas como pânico, agitação, ansiedade e insônia. Em pacientes com epilepsia ou disritmia cerebral. Não deve ser utilizado em pacientes com distúrbios da coagulação ou sob tratamento com anticoagulantes. Não associar a bebidas que contenham metilxantinas (café, chá, achocolatados, refrigerantes a base de extrato de cola e de guaraná e mate), para não potencializar os efeitos desse fitoterápico.",
   "adversos": "As metilxantinas, constituintes principais de extratos de P. cupana, pela estimulação direta do músculo cardíaco, podem causar aumento da frequência cardíaca e arritmias. Além disso, podem produzir irritação gástrica e aumento da diurese. Os efeitos adversos desse fitoterápico, devidos à cafeína, são geralmente leves e transitórios, embora frequentes. Sob o ponto de vista psiquiátrico, a cafeína pode exacerbar estados ansiosos e contribuir para distúrbios do sono. Devido à presença das metilxantinas, seu uso contínuo pode causar dependência. O uso excessivo desse fitoterápico também pode levar a hipocalcemia (diminuição de cálcio) e hipocalemia (diminuição de potássio), devido à sua ação diurética.",
   "interacoes": "Esse fitoterápico potencializa a ação de analgésicos e, quando administrado com anticoagulantes, inibe a agregação de plaquetas aumentando o risco de sangramento. Esse fitoterápico pode levar à hipocalcemia e, consequentemente, à toxicidade da digoxina. O etinilestradiol pode potencializar o efeito da cafeína, enquanto que a cimetidina potencializa seu efeito e também sua toxicidade.",
   "formas": "Cápsulas ou comprimidos contendo extrato seco (250 mg de extrato padronizado em cafeína).",
   "posologia": "Oral. Ingerir 2 cápsulas pela manhã e 1 a 2 cápsulas após o almoço. Sua administração à noite pode causar insônia. A administração desse fitoterápico deve ser realizada de forma descontinuada.",
   "tempo": "O tratamento não deve ultrapassar um mês, sendo necessário um período de duas semanas de interrupção do tratamento antes de seu reinício.",
   "superdosagem": "Doses excessivas desse fitoterápico podem causar vômitos, cólicas abdominais, convulsões e arritmias, havendo necessidade de cuidados intensivos. Deve-se proceder à lavagem gástrica ou emese. Pode-se administrar carvão ativado ou sorbitol para retardar a absorção do fitoterápico. Em caso de administração acima do recomendado, suspender o uso e manter o paciente sob observação.",
   "prescricao": "Fitoterápico, isento de prescrição médica.",
   "quimica": "Metilxantinas e taninos condensados."
  }
 },
 {
  "id": "peumus-boldus",
  "nome": "Boldo-do-chile",
  "populares": [
   "Boldo-do-chile",
   "boldo-verdadeiro"
  ],
  "cientifico": "Peumus boldus Molina",
  "cientificoCompleto": "Peumus boldus Molina",
  "familia": "Monimiaceae",
  "sinonimia": "",
  "parte": "Folhas.",
  "via": "Oral",
  "tempoMax": "4 semanas consecutivas",
  "rx": false,
  "porte": "Árvore",
  "flor": "branca",
  "tags": [
   "dispepsia",
   "má digestão",
   "digestão de gordura",
   "empachamento",
   "fígado",
   "colagogo",
   "colerético"
  ],
  "partes": [
   {
    "parte": "Folhas",
    "ok": true,
    "txt": "Parte medicinal."
   },
   {
    "parte": "Doses acima do recomendado",
    "ok": false,
    "txt": "Irritação urinária, vômitos e diarreia; alcaloides neurotóxicos."
   }
  ],
  "riscos": {
   "calculo": [
    "c",
    "Contraindicado em cálculos ou obstrução biliar."
   ],
   "hepatopatia": [
    "c",
    "Contraindicado em hepatite, cirrose e hepatite tóxica."
   ],
   "gestante": [
    "c",
    "Esparteína com ação ocitócica."
   ],
   "lactante": [
    "c",
    "Alcaloides: risco de neurotoxicidade."
   ],
   "cancer_biliar": [
    "c",
    "Câncer de ducto biliar ou pâncreas."
   ]
  },
  "idade": {
   "min": 6,
   "nivel": "c",
   "txt": "Contraindicado para menores de 6 anos (infuso a partir de 12 anos)."
  },
  "populacao": [
   "Infuso: 1 a 2 g de folhas secas em 150 mL de água fervente; abafar 10–15 min e coar.",
   "Tomar 150 mL, 2 vezes ao dia.",
   "Não ultrapassar 4 semanas seguidas.",
   "Atenção: o \"boldo-brasileiro\" (Plectranthus barbatus) é outra planta."
  ],
  "magistral": [
   "Extrato seco: 50–100 mg/dose, 2–3×/dia."
  ],
  "calc": [
   {
    "nome": "Infuso — 1 a 2 g / 150 mL",
    "tipo": "infusao",
    "g": [
     1,
     2
    ],
    "ml": 150,
    "freq": "2 vezes ao dia"
   }
  ],
  "fotos": [
   {
    "src": "assets/img/especies/peumus-boldus.jpg",
    "credito": "Wikimedia Commons",
    "link": "https://commons.wikimedia.org/wiki/File:Peumus_boldus_-_Köhler–s_Medizinal-Pflanzen-104.jpg",
    "obs": ""
   }
  ],
  "memento": {
   "indicacoes": "Indicado como colagogo, colerético e nas dispepsias funcionais.",
   "contraindicacoes": "Contraindicado para menores de 6 anos se pacientes com histórico de hipersensibilidade e alergia a qualquer um dos componentes do fitoterápico. Contraindicado nos casos de obstrução das vias biliares, cálculos biliares, infecções ou câncer de ducto biliar e câncer de pâncreas, devido aos efeitos colagogo e colerético. Pacientes com quadro de afecções severas no fígado, como hepatite viral, cirrose e hepatite tóxica não deverão fazer uso desse fitoterápico. Esse produto não deve ser usado durante a gravidez, devido a presença do alcaloide esparteína, que tem atividade ocitóxica. Mulheres em período de lactância não deverão fazer uso desse fitoterápico, devido à presença de alcaloides e risco de neurotoxicidade.",
   "precaucoes": "Não ingerir doses maiores do que as recomendadas. O uso desse fitoterápico não deve ultrapassar quatro semanas consecutivas. Esse fitoterápico não deve ser utilizado por lactantes e mulheres grávidas sem orientação médica.",
   "adversos": "Nas doses recomendadas não são conhecidos efeitos adversos ao fitoterápico. Doses acima das recomendadas causam irritação nas vias urinárias, vômitos e diarreia.",
   "interacoes": "Não foram encontrados dados descritos na literatura consultada sobre as interações medicamentosas com fitoterápicos à base de P. boldus.",
   "formas": "Infuso. Cápsulas ou comprimidos contendo extrato seco.",
   "posologia": "Oral. Uso adulto e infantil acima de 12 anos. Infuso obtido com 1 a 2g da droga em 150 mL de água. Tomar 150 mL do infuso, 10 a 15 minutos após o preparo, duas vezes ao dia. Extrato seco,50-100 mg/dose, duas a três vezes ao dia.",
   "tempo": "O uso desse fitoterápico não deve ultrapassar quatro semanas consecutivas.",
   "superdosagem": "Doses superiores às recomendadas poderão provocar distúrbios urinários, vômitos e diarreia. Em caso de superdosagem, suspender o uso e procurar orientação médica de imediato.",
   "prescricao": "Fitoterápico, isento de prescrição médica.",
   "quimica": "Alcaloides, flavonoides, cumarina, sesquiterpenoides e taninos."
  }
 },
 {
  "id": "piper-methysticum",
  "nome": "Kava-kava",
  "populares": [
   "Kava-kava"
  ],
  "cientifico": "Piper methysticum G. Forst.",
  "cientificoCompleto": "Piper methysticum G. Forst.",
  "familia": "Piperaceae",
  "sinonimia": "",
  "parte": "Rizoma.",
  "via": "Oral",
  "tempoMax": "1 a 8 semanas (máx. 3 meses com orientação)",
  "rx": true,
  "porte": "Arbusto",
  "flor": "sem flor vistosa",
  "tags": [
   "ansiedade",
   "insônia",
   "nervosismo",
   "estresse"
  ],
  "partes": [
   {
    "parte": "Rizoma",
    "ok": true,
    "txt": "Parte medicinal."
   },
   {
    "parte": "Uso prolongado / doses altas",
    "ok": false,
    "txt": "Hepatotoxicidade; pele amarelada; dermopatia."
   }
  ],
  "riscos": {
   "gestante": [
    "c",
    "Contraindicado na gravidez."
   ],
   "lactante": [
    "c",
    "Contraindicado na lactação."
   ],
   "hepatopatia": [
    "c",
    "Hepatotoxicidade: contraindicado em hepatite, cirrose, icterícia."
   ],
   "m_hepatotoxico": [
    "c",
    "Não usar com paracetamol, estatinas, isoniazida, metotrexato."
   ],
   "m_estatina": [
    "c",
    "Estatinas (inibidores da HMG-CoA): risco hepático."
   ],
   "depressao_grave": [
    "c",
    "Contraindicado na depressão endógena."
   ],
   "m_sedativo": [
    "a",
    "Potencializa álcool, barbitúricos e psicofármacos (alprazolam)."
   ],
   "alcoolismo": [
    "c",
    "Potencializa o álcool; risco hepático."
   ],
   "dirige": [
    "a",
    "Prejudica reflexos: não dirigir."
   ]
  },
  "idade": {
   "min": 12,
   "nivel": "c",
   "txt": "Contraindicado para menores de 12 anos."
  },
  "populacao": [],
  "magistral": [
   "Equivalente a 60–210 mg de kavapironas/dia.",
   "Extrato padronizado 70% kavapironas: 100 mg, 3×/dia.",
   "Extrato 30%: 200 mg, 3×/dia."
  ],
  "calc": [],
  "fotos": [
   {
    "src": "assets/img/especies/piper-methysticum.jpg",
    "credito": "Wikimedia Commons",
    "link": "https://commons.wikimedia.org/wiki/File:Starr_070515-7054_Piper_methysticum.jpg",
    "obs": ""
   },
   {
    "src": "assets/img/equipe/piper-methysticum-1.jpg",
    "credito": "Anotações da equipe",
    "link": "",
    "obs": ""
   },
   {
    "src": "assets/img/equipe/piper-methysticum-2.jpg",
    "credito": "Anotações da equipe",
    "link": "",
    "obs": ""
   },
   {
    "src": "assets/img/equipe/piper-methysticum-3.jpg",
    "credito": "Anotações da equipe",
    "link": "",
    "obs": ""
   }
  ],
  "memento": {
   "indicacoes": "Indicado para o tratamento sintomático de estágios leves a moderados de ansiedade e insônia, em curto prazo (1-8 semanas de tratamento).",
   "contraindicacoes": "Durante a gravidez e lactação, e em pacientes com depressão endógena ou afecções hepáticas. Vários casos de toxicidade hepática foram relatados na Europa após uso de produtos à base de plantas contendo extratos de P. methysticum. É contraindicado para pacientes com afecções hepáticas (hepatite, cirrose, icterícia e outros) e/ou que utilizam medicamentos que possam causar hepatotoxicidade, tais como acetaminofeno, inibidores da HMG-CoA redutase, isoniazida, metotrexato, entre outros. Esse fitoterápico é contra indicado para menores de 12 anos, e para lactantes.",
   "precaucoes": "P. methysticum não deve ser administrado por mais de 3 meses sem orientação médica. Mesmo quando administrado no intervalo de dosagem recomendada, reflexos motores e a capacidade de dirigir ou operar máquinas pesadas podem ser prejudicados.",
   "adversos": "Estudo de farmacovigilância envolvendo 4.049 pacientes que receberam extrato padronizado de P. methysticum contendo 70% de kavapironas (extrato 150 mg, equivalente a 105 mg kavapironas) por via oral/dia durante sete semanas, reações adversas foram relatadas em 61 pacientes (1,5%). As principais reações foram queixas gastrointestinais ou reações alérgicas cutâneas. Em estudo com 3.029 pacientes que receberam extrato padronizado de P. methysticum com 30% de kavapironas (800 mg de extrato, equivalente a 240 mg kavapironas) por via oral/dia durante 4 semanas, reações adversas foram relatadas em 2,3% dos pacientes. Foram relatados casos de reações alérgicas, de queixas gastrointestinais, de cefaleia ou tonturas, e de outros problemas indefinidos. A administração crônica do rizoma ou suas preparações podem causar coloração amarelada transitória da pele e unhas, reversível após a descontinuação da droga. Excesso e abuso crônico de infusões do rizoma têm sido historicamente associados à dermopatia escamosa e eruptiva de etiologia desconhecida. Reações alérgicas da pele e ictiose também foram relatadas. Em duas pacientes, a reação foi observada em áreas ricas em glândulas sebáceas, sendo que fizeram uso por 3 semanas em terapia antidepressiva sistêmica com o rizoma. A reação resultou na formação de pápulas e placas na face ventral e dorsal do tórax. Estudo em uma comunidade aborígene australiana demonstrou que o abuso crônico do rizoma de kava levou à desnutrição e perda de peso, aumento dos níveis de γ-glutamil transferase, diminuição dos níveis de proteína do plasma, e redução do volume de plaquetas e número de linfócitos. Em voluntários saudáveis, distúrbios da acomodação visual, e distúrbios no equilíbrio oculomotor, foram notificados após a ingestão de grandes doses de kava. O consumo crônico (6 meses) de grandes quantidades da infusão do rizoma (5-6 xícaras/dia) tem sido relatado como causador de anorexia, diarreia e distúrbios visuais. Um relato de caso de atetose envolvendo membros, tronco, pescoço e da musculatura facial, com atetose acentuada da língua, foi associado ao consumo crônico de grandes quantidades do rizoma de kava.",
   "interacoes": "A eficácia de medicamentos e drogas de ação central, tais como álcool, barbitúricos e outros psicofármacos pode ser potencializada. Foi relatada a interação medicamentosa entre P. methysticum, alprazolam, cimetidina e terazosina.",
   "formas": "Cápsulas ou comprimidos contendo a droga vegetal e extratos secos para uso oral.",
   "posologia": "Oral. Dose diária: droga vegetal ou extratos, equivalente a 60–210 mg de kavapironas ou 100 mg do extrato padronizado (70% de kavapironas), três vezes ao dia; na concentração de 30%, a dose é de 200 mg três vezes ao dia.",
   "tempo": "O tempo de uso depende da indicação terapêutica e da evolução do quadro acompanhada pelo médico.",
   "superdosagem": "Os sintomas de intoxicação após uso de altas doses de P. methysticum são: ataxia, desequilíbrio, distúrbios da fala, fadiga e sonolência, dificuldade de acomodação visual, dilatação das pupilas, distúrbios do balanço oculomotor, problemas articulares, perda de apetite e de peso e ressecamento da pele acompanhado de coloração amarelada. Adicionalmente, foram descritas reações paradoxais com potencialização da ansiedade e ocorrência de lesões hepáticas irreversíveis após superdosagem. A utilização de altas doses de P. methysticum foi relacionada ao aumento dos níveis de γ-glutamil transferase (GGT). Em caso de superdosagem, suspender a medicação imediatamente. Recomenda-se tratamento de suporte sintomático pelas medidas habituais de apoio e controle das funções vitais. Na superdosagem aguda, o tratamento deve ser instituído com passagem de sonda nasogástrica seguida de esvaziamento e lavagem gástrica. Os sintomas de superdosagem melhoram com a interrupção da administração de P. methysticum. Se ocorrer eritema ou edema em extensas áreas, pode ser necessário o uso de corticoides.",
   "prescricao": "Fitoterápico, somente sob prescrição médica.",
   "quimica": "Lactonas: kavalactonas, também conhecidas como kavapironas."
  }
 },
 {
  "id": "psidium-guajava",
  "nome": "Goiabeira",
  "populares": [
   "Goiabeira"
  ],
  "cientifico": "Psidium guajava L.",
  "cientificoCompleto": "Psidium guajava L.",
  "familia": "Myrtaceae",
  "sinonimia": "",
  "parte": "Ramos novos, com folhas jovens.",
  "via": "Oral",
  "tempoMax": "Não exceder o recomendado",
  "rx": false,
  "porte": "Árvore",
  "flor": "branca",
  "tags": [
   "diarreia",
   "diarreia aguda",
   "rotavírus",
   "enterite",
   "intestino solto"
  ],
  "partes": [
   {
    "parte": "Ramos novos com folhas jovens",
    "ok": true,
    "txt": "Parte medicinal."
   }
  ],
  "riscos": {},
  "idade": null,
  "populacao": [
   "Infuso: folhas jovens secas em 150 mL de água fervente; abafar e coar.",
   "Tomar 150 mL, 2 a 3 vezes ao dia.",
   "Diarreia com sangue, febre alta ou desidratação: procurar atendimento. Manter hidratação (soro de reidratação oral)."
  ],
  "magistral": [
   "Droga vegetal em pó (folha): 500 mg, 3–4×/dia.",
   "Extrato seco: 250–350 mg, 3–4×/dia."
  ],
  "calc": [
   {
    "nome": "Infuso — 150 mL por dose (massa não fixada no Memento)",
    "tipo": "infusao",
    "g": null,
    "ml": 150,
    "freq": "2 a 3 vezes ao dia"
   }
  ],
  "fotos": [
   {
    "src": "assets/img/especies/psidium-guajava.jpg",
    "credito": "Wikimedia Commons",
    "link": "https://commons.wikimedia.org/wiki/File:Psidium_guajava_fruit.jpg",
    "obs": ""
   }
  ],
  "memento": {
   "indicacoes": "Tratamento da diarreia aguda não infecciosa e enterite por rotavirus.",
   "contraindicacoes": "Hipersensibilidade ou alergia à droga vegetal.",
   "precaucoes": "Não exceder a dose recomendada ou a duração do tratamento.",
   "adversos": "Alergia aos componentes do fitoterápico.",
   "interacoes": "Não foram encontrados dados descritos na literatura consultada.",
   "formas": "Cápsulas ou comprimidos contendo a droga vegetal ou extrato seco, e infuso.",
   "posologia": "Uso interno Oral. Para diarreia: 500 mg da droga vegetal em pó (folha) três ou quatro vezes ao dia. Extrato seco 250 a 350 mg de 3 a 4 vezes por dia. Tomar uma dose de 150 mL do infuso de duas a três vezes ao dia.",
   "tempo": "Não exceder a dosagem recomendada ou a duração do tratamento.",
   "superdosagem": "Suspender o uso e manter o paciente sob observação.",
   "prescricao": "Fitoterápico, isento de prescrição médica.",
   "quimica": "Flavonoides, terpenoides (sesquiterpenos e triterpenos) e taninos."
  }
 },
 {
  "id": "rhamnus-purshiana",
  "nome": "Cáscara-sagrada",
  "populares": [
   "Cáscara-sagrada"
  ],
  "cientifico": "Rhamnus purshiana DC.",
  "cientificoCompleto": "Rhamnus purshiana DC.",
  "familia": "Rhamnaceae",
  "sinonimia": "",
  "parte": "Cascas secas. A casca fresca contém antronas livres e deve ser seca por pelo menos 1 ano ou envelhecida artificialmente por calor ou aeração antes da utilização terapêutica.",
  "via": "Oral",
  "tempoMax": "1 a 2 semanas",
  "rx": false,
  "porte": "Árvore",
  "flor": "verde-amarelada",
  "tags": [
   "constipação",
   "prisão de ventre",
   "intestino preso",
   "laxante"
  ],
  "partes": [
   {
    "parte": "Casca seca envelhecida (≥ 1 ano)",
    "ok": true,
    "txt": "Parte medicinal."
   },
   {
    "parte": "Casca fresca",
    "ok": false,
    "txt": "Antronas livres: cólicas intensas e vômitos. Nunca usar fresca."
   }
  ],
  "riscos": {
   "intestinal": [
    "c",
    "Contraindicado em obstrução, colite, Crohn, SII, apendicite."
   ],
   "gestante": [
    "c",
    "Contraindicado na gravidez."
   ],
   "lactante": [
    "c",
    "Contraindicado na lactação."
   ],
   "hepatopatia": [
    "c",
    "Contraindicado na insuficiência hepática."
   ],
   "nefropatia": [
    "c",
    "Contraindicado na insuficiência renal."
   ],
   "cardiopatia": [
    "c",
    "Contraindicado na insuficiência cardíaca."
   ],
   "hipocalemia": [
    "c",
    "Depleção de eletrólitos."
   ],
   "desnutricao": [
    "a",
    "Abuso: má absorção, perda de peso, hipocalemia."
   ],
   "m_digoxina": [
    "a",
    "Hipocalemia potencializa digoxina/antiarrítmicos."
   ],
   "m_diuretico": [
    "a",
    "Tiazídicos/corticoides: agravam perda de potássio."
   ],
   "hemorroidas": [
    "c",
    "Contraindicado com hemorroidas."
   ]
  },
  "idade": {
   "min": 10,
   "nivel": "c",
   "txt": "Contraindicado para menores de 10 anos."
  },
  "populacao": [],
  "magistral": [
   "Droga vegetal: 0,3–1,0 g em dose única diária.",
   "Extrato seco: 57–108 mg/dia (20–30 mg de derivados hidroxiantracênicos).",
   "Preferencialmente ao deitar."
  ],
  "calc": [
   {
    "nome": "Droga vegetal (casca) — 0,3 a 1 g por dia",
    "tipo": "droga",
    "g": [
     0.3,
     1
    ],
    "freq": "Dose única, ao deitar"
   }
  ],
  "fotos": [
   {
    "src": "assets/img/especies/rhamnus-purshiana.jpg",
    "credito": "Wikimedia Commons",
    "link": "https://commons.wikimedia.org/wiki/File:Rhamnus_purshiana_-_Köhler–s_Medizinal-Pflanzen-121.jpg",
    "obs": ""
   }
  ],
  "memento": {
   "indicacoes": "Indicado para tratamento de curto prazo da constipação intestinal ocasional.",
   "contraindicacoes": "Não deve ser administrado a pacientes com obstrução intestinal e estenose, atonia, doenças inflamatórias do cólon (colite ulcerosa, síndrome do intestino irritável, doença de Crohn), apendicite, desidratação grave e depleção de eletrólitos ou constipação intestinal crônica. Tal como acontece com outros laxantes estimulantes, a cáscara sagrada é contraindicada em pacientes com dores, cólicas, hemorroidas, nefrite ou quaisquer sintomas de distúrbios abdominais não diagnosticados, como dor, náuseas ou vômitos. Contraindicado para menores de 10 anos, grávidas, lactantes, nos casos de insuficiência hepática, renal e cardíaca e pacientes com histórico de hipersensibilidade e alergia a qualquer um dos componentes do fitoterápico.",
   "precaucoes": "A cáscara-sagrada e outros laxantes contendo glicosídeos antraquinônicos não devem ser utilizados de forma contínua por mais de 1-2 semanas, devido ao risco de desequilíbrio eletrolítico.",
   "adversos": "Doses únicas de cáscara-sagrada podem resultar em cãimbras, e desconforto do trato gastrointestinal, o que pode necessitar de redução da dosagem. A sobredosagem pode conduzir à espasmos abdominais, cólicas e dor, bem como a formação de fezes aquosas. Abuso de laxantes a longo prazo pode levar a desequilíbrio eletrolítico (hipocalemia e hipocalcemia), acidose metabólica, má absorção de nutrientes, perda de peso, albuminúria e hematúria.",
   "interacoes": "O trânsito intestinal acelerado pode resultar na absorção reduzida de fármacos administrados oralmente. O desequilíbrio eletrolítico causado pelo uso de cáscara-sagrada, tais como hipocalemia (redução do potássio sérico), pode potenciar os efeitos dos glicosídeos cardiotônicos (por exemplo, digoxina, digitálicos ou estrofantina). A hipocalemia resultante do abuso de laxantes a longo prazo também pode potencializar os efeitos de fármacos antiarrítmicos (por exemplo, quinidina), provocando mudanças do ritmo cardíaco por afetar os canais de potássio. A hipocalemia causada por fármacos como diuréticos tiazídicos, aadrenocorticosteroides ou raiz de alcaçuz pode ser acentuada, e o desequilíbrio eletrolítico poderá ser agravado.",
   "formas": "Cápsulas e comprimidos contendo a droga vegetal, na forma de pó, ou extratos secos. Tintura, extrato fluido, outras preparações líquidas e sólidas, devem ser guardadas em recipientes resistentes a luz e hermeticamente fechados.",
   "posologia": "Oral. Droga vegetal: de 0,3 a 1,0 g em dose única diária. Extrato seco: de 57 a 108 mg em dose única diária. Todas as preparações padronizadas para conter 20-30 mg de derivados hidroxiantracênicos calculados como cascarosídeo A. Administrar preferencialmente ao deitar, ou em duas doses divididas, uma de manhã e uma à noite, ao deitar.",
   "tempo": "Não deve ultrapassar mais de 2 semanas, devido ao risco de desequilíbrio eletrolítico.",
   "superdosagem": "Os principais sintomas de sobredosagem de laxantes antraquinônicos são cólicas intestinais e diarreia severa com consequente perda de fluidos e eletrólitos. O tratamento da superdosagem deve ser baseado na reposição de eletrólitos. Os níveis de eletrólitos devem ser monitorados, particularmente o de potássio, principalmente em idosos e jovens. A ingestão crônica e em altas doses de produtos contendo antranóides poderá desencadear um quadro de hepatite tóxica.",
   "prescricao": "Fitoterápico, isento de prescrição médica.",
   "quimica": "Os constituintes são glicosídeos hidroxiantracênicos (6-9%). Desses 80 a 90% de cascarosídeos A-D. Glicosídeos antracênicos e antraquinonas."
  }
 },
 {
  "id": "senna-alexandrina",
  "nome": "Sene",
  "populares": [
   "Sene",
   "sena"
  ],
  "cientifico": "Senna alexandrina Mill.",
  "cientificoCompleto": "Senna alexandrina Mill.",
  "familia": "Leguminosae",
  "sinonimia": "",
  "parte": "Folhas e frutos.",
  "via": "Oral",
  "tempoMax": "2 semanas",
  "rx": false,
  "porte": "Arbusto",
  "flor": "amarela",
  "tags": [
   "constipação",
   "prisão de ventre",
   "intestino preso",
   "laxante"
  ],
  "partes": [
   {
    "parte": "Folhas e frutos",
    "ok": true,
    "txt": "Parte medicinal."
   },
   {
    "parte": "Uso prolongado",
    "ok": false,
    "txt": "Hipocalemia, dependência, melanose cólica."
   }
  ],
  "riscos": {
   "gestante": [
    "c",
    "Contraindicado na gravidez."
   ],
   "lactante": [
    "c",
    "Metabólitos passam ao leite."
   ],
   "intestinal": [
    "c",
    "Contraindicado em obstrução, Crohn, colite, constipação crônica."
   ],
   "hipocalemia": [
    "c",
    "Contraindicado na hipocalemia."
   ],
   "hepatopatia": [
    "c",
    "Contraindicado na insuficiência hepática."
   ],
   "nefropatia": [
    "c",
    "Contraindicado na insuficiência renal; cistite."
   ],
   "cardiopatia": [
    "c",
    "Contraindicado na insuficiência cardíaca."
   ],
   "hemorroidas": [
    "c",
    "Contraindicado com hemorroidas."
   ],
   "menstruacao": [
    "c",
    "Contraindicado no período menstrual."
   ],
   "desnutricao": [
    "a",
    "Uso crônico: perda de peso, caquexia, distúrbio eletrolítico."
   ],
   "m_digoxina": [
    "a",
    "Hipocalemia potencializa digitálicos/antiarrítmicos."
   ],
   "m_diuretico": [
    "a",
    "Tiazídicos/corticoides agravam perda de potássio."
   ],
   "m_contraceptivo": [
    "a",
    "Reduz absorção de anticoncepcionais orais."
   ],
   "m_aine": [
    "a",
    "Interação com indometacina e outros AINEs."
   ],
   "idoso": [
    "a",
    "Idosos: fraqueza e hipotensão ortostática."
   ]
  },
  "idade": {
   "min": 12,
   "nivel": "c",
   "txt": "Contraindicado para menores de 12 anos."
  },
  "populacao": [],
  "magistral": [
   "Droga vegetal: 1–2 g de folhas ou frutos/dia, antes de dormir.",
   "Extrato seco 150 mg, 1–3×/dia (10–30 mg de senosídeos), à noite."
  ],
  "calc": [
   {
    "nome": "Droga vegetal (folhas/frutos) — 1 a 2 g por dia",
    "tipo": "droga",
    "g": [
     1,
     2
    ],
    "freq": "Dose diária, antes de dormir"
   }
  ],
  "fotos": [
   {
    "src": "assets/img/especies/senna-alexandrina.jpg",
    "credito": "Wikimedia Commons",
    "link": "https://commons.wikimedia.org/wiki/File:Senna_alexandrina_Mill.-Cassia_angustifolia_L._(Senna_Plant).jpg",
    "obs": ""
   }
  ],
  "memento": {
   "indicacoes": "Tratamento de constipação intestinal ocasional.",
   "contraindicacoes": "Contraindicado para menores de 12 anos, grávidas e lactantes e pacientes com histórico de hipersensibilidade e alergia a qualquer um dos componentes do fitoterápico. Não deve ser utilizado em casos de constipação intestinal crônica, distúrbios intestinais, tais como obstrução e estenose intestinal, atonia, doenças inflamatórias intestinais (doença de Crohn, colite ulcerativa, colopatias inflamatórias) e dores abdominais, desidratação severa, hemorroidas, apendicite, hipocalemia, doença inflamatória pélvica, período menstrual, cistite, insuficiência hepática, renal ou cardíaca. Contraindicado para pacientes com náuseas, vômito ou quando algum sintoma agudo ou crônico não diagnosticado estiver presente.",
   "precaucoes": "Em caso de hipersensibilidade ao produto, recomenda-se descontinuar o uso e consultar o médico. Sangramento retal ou insuficiência de peristalse, decorrentes do uso prolongado, podem indicar condições graves. Metabólitos ativos, por exemplo, reinantronas, passam para o leite materno em pequenas quantidades.",
   "adversos": "O uso da S. alexandrina pode ocasionar desconforto no trato gastrointestinal, com presença de espasmos e cólicas abdominais. Nesse caso diminuir a dose. As antraquinonas podem alterar a cor da urina para amarela escura ou marrom avermelhada, o que desaparece com a suspensão do uso do fitoterápico. A pseudomelanosis coli (acúmulo de macrófagos pigmentados no interior da submucosa intestinal) pode ocorrer após o uso prolongado, é inofensiva e desaparece com a descontinuação do fitoterápico. O uso crônico ou superdosagem pode resultar em diarreia, com distúrbios hidroeletrolíticos, acidose ou alcalose metabólica, albuminúria, hematúria e principalmente hipocalemia. A deficiência de potássio pode conduzir à disfunção cardíaca e neuromuscular, lentidão, inibição do peristaltismo intestinal e má absorção, além de dependência, com possível necessidade de aumento da dose, podendo resultar no agravamento da constipação intestinal. O uso prolongado também está associado à redução na concentração de globulinas séricas, perda de peso e desenvolvimento de caquexia. Em pacientes idosos, o uso contínuo de laxantes pode ocasionar exacerbação da fraqueza e hipotensão arterial ortostática. O uso a longo prazo pode resultar em tetania, hiperaldosteronismo, excreção de aspartilglicosamina e nefrite. Além disso, dados conflitantes sugerem que possam ocorrer alterações anatômicas do cólon e danos ao sistema nervoso do tecido entérico. O uso prolongado e excessivo da S. alexandrina foi associado a casos de “dedo em baqueta de tambor”, reversível após a descontinuação do uso da droga. Em casos raros, pode levar a nefropatia, e edema. Há relato de hepatite após o abuso crônico desse fitoterápico.",
   "interacoes": "O aumento do peristaltismo intestinal, em virtude da utilização de S. alexandrina, pode reduzir a absorção de fármacos administrados oralmente, como por exemplo, os estrógenos assim como os anticoncepcionais orais. A hipocalemia, decorrente da utilização prolongada de S. alexandrina, pode potencializar os efeitos dos glicosídeos cardiotônicos (digitálicos, Strophantus spp.) e as arritmias cardíacas ou os efeitos antiarrítmicos, quando do uso concomitante de fármacos antiarrítmicos como a quinidina. O uso simultâneo de S. alexandrina com outros medicamentos ou drogas vegetais que induzem à hipocalemia, como diuréticos tiazidas, adrenocorticosteroides ou raiz de alcaçuz, pode exacerbar o desequilíbrio eletrolítico, resultando em disfunções cardíacas e neuromusculares. Pode haver interação da S. alexandrina com a nifedipina e indometacina e outros anti-inflamatórios não hormonais. A alteração de coloração na urina causada pelas antraquinonas pode influenciar em testes de diagnósticos resultando em falso positivo para urobilinogênio e para dosagem de estrógeno pelo método de Kober.",
   "formas": "Cápsulas e comprimidos contendo a droga vegetal, e extratos padronizados em senosídeos.",
   "posologia": "Oral. Uso adulto e infantil acima de 12 anos. Droga vegetal: 1 a 2g de folhas ou frutos, diariamente antes de dormir. 150 mg de extrato seco, de uma a três vezes ao dia, equivalente a 10-30 mg de senosídeos (calculados como senosídeo B), administrada à noite.",
   "tempo": "Contraindicado por mais de duas semanas sem supervisão médica.",
   "superdosagem": "Os principais sintomas da superdosagem são dores abdominais, espasmos, náusea, cólicas e diarreias severas, com consequente perda excessiva de fluidos e eletrólitos. Deve-se manter tratamento de suporte, através da ingestão de grandes quantidades de líquidos. Os eletrólitos, especialmente o potássio, devem ser monitorados, particularmente em idosos e crianças.",
   "prescricao": "Fitoterápico, isento de prescrição médica.",
   "quimica": "Glicosídeos antracênicos."
  }
 },
 {
  "id": "serenoa-repens",
  "nome": "Saw palmetto",
  "populares": [
   "Saw-palmetto"
  ],
  "cientifico": "Serenoa repens (W. Bartram) Small",
  "cientificoCompleto": "Serenoa repens (W. Bartram) Small",
  "familia": "Arecaceae",
  "sinonimia": "",
  "parte": "Frutos.",
  "via": "Oral",
  "tempoMax": "Não estabelecido",
  "rx": true,
  "porte": "Palmeira arbustiva",
  "flor": "branco-amarelada",
  "tags": [
   "próstata",
   "hiperplasia prostática",
   "hpb",
   "dificuldade para urinar",
   "jato urinário fraco",
   "urinar à noite"
  ],
  "partes": [
   {
    "parte": "Frutos",
    "ok": true,
    "txt": "Parte medicinal."
   }
  ],
  "riscos": {
   "gestante": [
    "c",
    "Contraindicado na gravidez."
   ],
   "lactante": [
    "c",
    "Contraindicado na lactação."
   ],
   "hepatopatia": [
    "c",
    "Contraindicado em afecções hepáticas."
   ],
   "m_anticoag": [
    "c",
    "Não usar com varfarina, clopidogrel, AAS."
   ],
   "m_hormonal": [
    "a",
    "TRH pode exigir ajuste (efeito antiandrogênico/antiestrogênico)."
   ],
   "cancer_prostata": [
    "c",
    "Afastar câncer de próstata antes do uso."
   ]
  },
  "idade": {
   "min": 18,
   "nivel": "c",
   "txt": "Contraindicado para crianças."
  },
  "populacao": [],
  "magistral": [
   "Droga vegetal: 1–2 g/dia.",
   "Extrato lipidoesterólico (70–95% ácidos graxos): 320 mg/dia (dose única ou 160 mg 2×/dia)."
  ],
  "calc": [],
  "fotos": [
   {
    "src": "assets/img/especies/serenoa-repens.jpg",
    "credito": "Wikimedia Commons",
    "link": "https://commons.wikimedia.org/wiki/File:Serenoa_repens_USDA1.jpg",
    "obs": ""
   }
  ],
  "memento": {
   "indicacoes": "Tratamento sintomático da hiperplasia prostática benigna (HPB).",
   "contraindicacoes": "Contraindicado para crianças, grávidas, lactantes e pacientes com histórico de hipersensibilidade e alergia a qualquer uma das substâncias ativas da espécie vegetal. Esse fitoterápico não é indicado para casos avançados de HPB com severa retenção urinária e afecções hepáticas.",
   "precaucoes": "Não deverá ser utilizado sem primeiro afastar a possibilidade de câncer de próstata. Os pacientes devem passar por criteriosa avaliação médica antes de utilizar esse medicamento, a fim de excluir a possibilidade de nefrite, infecções do trato urinário e outras desordens nefro urológicas. Os seguintes fatores devem ser levados em consideração antes do início do tratamento com Serenoa repens: idade > 70 anos, pico de fluxo urinário < 12 mL/s, volume da próstata de 30 cm3, volume residual > 50 mL e PSA sanguíneo de 1,4 ng/mL.",
   "adversos": "Esse fitoterápico pode causar náuseas, dor abdominal, distúrbios gástricos, constipação intestinal e diarreia. Em casos raros, hipertensão arterial, diminuição da libido, impotência sexual, cefaleia e retenção urinária, síndrome de íris flácida intraoperatória.",
   "interacoes": "Hormônios utilizados na Terapia de Reposição Hormonal (TRH) podem exigir ajuste de dose, devido aos efeitos antiandrogênicos e antiestrogênicos desse fitoterápico. Em estudo in vitro verificou-se a potencialização da inibição dos antagonistas do 1-alfa-adrenoreceptor, porém a relevância clinica desse não foi confirmada. Não utilizar esse medicamento com anticoagulantes como warfarina, clopidogrel e ácido acetilsalicílico.",
   "formas": "Cápsulas gelatinosas e comprimidos contendo a droga vegetal, ou extratos padronizados (70–95% ácidos graxos livres e ésteres etílicos correspondentes).",
   "posologia": "Oral. Dose diária: 1–2 g da droga ou 320 mg (dose única ou 160 mg, duas vezes ao dia) do extrato lipidoesterólico padronizado para conter 70–95% ácidos graxos livres e ésteres etílicos correspondentes e formas farmacêuticas equivalentes.",
   "tempo": "Não foram encontrados dados descritos na literatura consultada sobre o tempo máximo de utilização. O tempo de uso depende da indicação terapêutica e da evolução do quadro acompanhada pelo médico.",
   "superdosagem": "Não foram encontrados dados descritos na literatura consultada sobre problemas decorrentes de superdosagem. Em caso de ingestão de quantidades acima das recomendadas o paciente deve ser observado.",
   "prescricao": "Fitoterápico, somente sob prescrição medica.",
   "quimica": "Triglicerídeos, ácidos graxos, esteroides, polissacarídeos e flavonoides."
  }
 },
 {
  "id": "stryphnodendron-adstringens",
  "nome": "Barbatimão",
  "populares": [
   "Barbatimão"
  ],
  "cientifico": "Stryphnodendron adstringens (Mart.) Coville",
  "cientificoCompleto": "Stryphnodendron adstringens (Mart.) Coville",
  "familia": "Leguminosae",
  "sinonimia": "",
  "parte": "Cascas.",
  "via": "Tópica",
  "tempoMax": "Conforme evolução",
  "rx": false,
  "porte": "Árvore (cerrado)",
  "flor": "amarelo-esverdeada",
  "tags": [
   "ferida",
   "cicatrização",
   "cicatrizante",
   "lesão de pele",
   "adstringente"
  ],
  "partes": [
   {
    "parte": "Casca do caule",
    "ok": true,
    "txt": "Parte medicinal (rica em taninos)."
   },
   {
    "parte": "Feridas que precisam drenar",
    "ok": false,
    "txt": "Não usar onde a exsudação/drenagem é necessária."
   }
  ],
  "riscos": {
   "ferida_exsudativa": [
    "c",
    "Contraindicado quando há necessidade de drenagem/exsudação."
   ]
  },
  "idade": null,
  "populacao": [],
  "magistral": [
   "Creme com 10% de extrato glicólico.",
   "Pomada com 5% de extrato glicólico ou 3% de extrato seco (30 mg fenóis totais; 27 mg taninos).",
   "Aplicar até 3×/dia após higienização."
  ],
  "calc": [],
  "fotos": [
   {
    "src": "assets/img/especies/stryphnodendron-adstringens.jpg",
    "credito": "Wikimedia Commons",
    "link": "https://commons.wikimedia.org/wiki/File:Stryphnodendron_adstringens.jpg",
    "obs": ""
   }
  ],
  "memento": {
   "indicacoes": "Cicatrizante.",
   "contraindicacoes": "Contraindicado em situações em que há necessidade da exsudação por meio de drenos ou de forma espontânea.",
   "precaucoes": "As formas farmacêuticas de uso externo não deverão ser aplicadas em úlceras ou ferimentos que necessitem de alta vascularização.",
   "adversos": "Poderá ocorrer reação alérgica em pessoas com histórico de alergias a outras espécies vegetais.",
   "interacoes": "Devido à presença de taninos como componente desse fitoterápico, evitar o uso concomitante com sais de prata, bases proteicas e princípios ativos vasodilatadores.",
   "formas": "Uso externo Creme: contendo 10% de extrato glicólico de S. adstringens. Pomadas: contendo 5% do extrato glicólico de S. adstringens ou pomada contendo 3% de extrato seco. ** As preparações devem conter 30 mg de fenóis totais e 27 mg de taninos totais.",
   "posologia": "Uso externo Aplicar até três vezes ao dia na área afetada, após a higienização.",
   "tempo": "O tempo de uso depende da indicação terapêutica e da evolução do quadro acompanhada pelo médico.",
   "superdosagem": "Em caso de administração de quantidades acima das recomendadas, suspender o uso e manter o paciente em observação.",
   "prescricao": "Fitoterápico, isento de prescrição médica.",
   "quimica": "Taninos, proantocianidinas, ácidos fenólicos e flavonoides."
  }
 },
 {
  "id": "trifolium-pratense",
  "nome": "Trevo-vermelho",
  "populares": [
   "Trevo-vermelho"
  ],
  "cientifico": "Trifolium pratense L.",
  "cientificoCompleto": "Trifolium pratense L.",
  "familia": "Leguminosae",
  "sinonimia": "",
  "parte": "Inflorescências secas.",
  "via": "Oral",
  "tempoMax": "Até 12 meses",
  "rx": true,
  "porte": "Erva",
  "flor": "rosa/vermelha",
  "tags": [
   "menopausa",
   "climatério",
   "fogacho",
   "ondas de calor",
   "tpm",
   "tensão pré-menstrual",
   "mastalgia",
   "dor nas mamas"
  ],
  "partes": [
   {
    "parte": "Inflorescências secas",
    "ok": true,
    "txt": "Parte medicinal."
   }
  ],
  "riscos": {
   "gestante": [
    "c",
    "Contraindicado na gravidez."
   ],
   "lactante": [
    "c",
    "Contraindicado na amamentação."
   ],
   "cancer_hormonal": [
    "c",
    "Doenças hormônio-dependentes (ex.: câncer de mama RE+); atenção a endometriose e miomas."
   ],
   "m_hormonal": [
    "c",
    "Não usar com tamoxifeno/antiestrogênicos."
   ],
   "m_anticoag": [
    "a",
    "Possível interação com heparina, varfarina, AAS, clopidogrel."
   ],
   "coagulopatia": [
    "a",
    "Cautela em distúrbios de coagulação."
   ]
  },
  "idade": {
   "min": 12,
   "nivel": "c",
   "txt": "Contraindicado para menores de 12 anos."
  },
  "populacao": [],
  "magistral": [
   "Extrato bruto padronizado (≥0,5% isoflavonas): 240–480 mg/dia (40–80 mg isoflavonas)."
  ],
  "calc": [],
  "fotos": [
   {
    "src": "assets/img/especies/trifolium-pratense.jpg",
    "credito": "Wikimedia Commons",
    "link": "https://commons.wikimedia.org/wiki/File:3840px-Trifolium_pratense_-_Keila2.jpg",
    "obs": ""
   }
  ],
  "memento": {
   "indicacoes": "Alívio dos sintomas da menopausa (principalmente fogachos), mastalgia e síndrome pré-menstrual.",
   "contraindicacoes": "Produtos a base da inflorescência de Trifolium pratense são contraindicados em casos de hipersensibilidade ou alergia a droga vegetal ou a espécie in natura. Está também contraindicado durante a gravidez, na amamentação e para crianças menores de 12 anos, e em casos de doenças hormonais associadas, ao efeito potencial dos hormônios.",
   "precaucoes": "Deverão ser observadas as condições que podem ser agravadas pelo aumento do nível de estrogênio, como a endometriose ou miomas uterinos.",
   "adversos": "A ingestão de grandes quantidades de T. pratense em alimentos por animais tem sido associada a um número de efeitos adversos em ovelhas na Austrália. A “doença do trevo” caracterizada por sintomas de infertilidade, lactação anormal, distocia e prolapso uterino, foram hipoteticamente atribuídos aos efeitos estrogênicos de isoflavonas. Em nenhum dos ensaios clínicos controlados observou-se efeitos adversos com doses de até 0,160 g de isoflavonas por dia.",
   "interacoes": "Alguns estudos possibilitam imaginar que as isoflavonas específicas podem aumentar a capacidade do tamoxifeno de inibir o crescimento de células de câncer de mama estrogênico-receptor positivo. Em modelos de roedores, a genisteína tem inibido a eficácia do tamoxifeno sobre o crescimento de células de câncer de mama hormônio-receptor positivo em ratas ovariectomizadas, enquanto que em outros estudos verificaram que isoflavonas específicas podem produzir efeito aditivo e sinérgico na prevenção do desenvolvimento de tumores induzidos quimicamente e o crescimento de tumores existentes. Portanto, o uso da droga bruta ou suas preparações não é recomendado em pacientes que estão sendo tratadas com tamoxifeno e outros medicamentos anti-estrogênicos. As isoflavonas presentes nos extratos de T. pratense são inibidoras das enzimas hepáticas CYP 1A1, CYP 1B1 e CYP 2CP o que pode levar ao aumento dos níveis séricos de alguns fármacos. Podem interagir potencialmente com anticoagulantes (heparina e varfarina) e antiagregantes plaquetários (aspirina, clopidogrel e ticlopidina), por isso recomenda-se cautela na utilização de T. pratense em pacientes susceptíveis a sangramentos ou com distúrbios de coagulação.",
   "formas": "Cápsulas e comprimidos contendo extrato bruto padronizado (0,5% de isoflavonas). Extrato bruto padronizado não menos que 0,5% de isoflavonas (daidzeína, genisteína, formononetina e biochanina A).",
   "posologia": "Oral. Extrato bruto: 240-480 mg correspondendo a 40-80 mg/dia de isoflavonas.",
   "tempo": "Extrato padronizado de T. pratense pode ser utilizado com segurança em administração diária por 12 meses.",
   "superdosagem": "Não foram encontrados dados descritos na literatura consultada sobre problemas decorrentes de superdosagem. Em caso de ingestão de quantidades acima das recomendadas o paciente deve ser observado.",
   "prescricao": "Fitoterápico, somente sob prescrição médica.",
   "quimica": "Isoflavonas (biochanina A, daidzeína, formononetina e genisteína)."
  }
 },
 {
  "id": "uncaria-tomentosa",
  "nome": "Unha-de-gato",
  "populares": [
   "Unha-de-gato",
   "espera-aí",
   "junpindá"
  ],
  "cientifico": "Uncaria tomentosa (Willd. DC.)",
  "cientificoCompleto": "Uncaria tomentosa (Willd. DC.)",
  "familia": "Rubiaceae",
  "sinonimia": "",
  "parte": "Cascas.",
  "via": "Oral",
  "tempoMax": "Até 8 semanas",
  "rx": false,
  "porte": "Trepadeira lenhosa",
  "flor": "amarela",
  "tags": [
   "inflamação",
   "anti-inflamatório",
   "dor articular",
   "artrite"
  ],
  "partes": [
   {
    "parte": "Casca",
    "ok": true,
    "txt": "Parte medicinal."
   },
   {
    "parte": "Espinhos curvos (\"unha\")",
    "ok": false,
    "txt": "Não são a parte medicinal."
   }
  ],
  "riscos": {
   "gestante": [
    "c",
    "Contraindicado na gravidez."
   ],
   "lactante": [
    "c",
    "Contraindicado na lactação."
   ],
   "transplante": [
    "c",
    "Efeito imunoestimulante."
   ],
   "m_imunossupressor": [
    "a",
    "Efeito imunoestimulante."
   ],
   "m_anticoag": [
    "a",
    "Potencializa anticoagulantes (hemorragia)."
   ],
   "m_hormonal": [
    "a",
    "Estrógenos (CYP450): só com acompanhamento."
   ],
   "m_teofilina": [
    "a",
    "Teofilina (CYP450): só com acompanhamento."
   ]
  },
  "idade": null,
  "populacao": [],
  "magistral": [
   "Extrato fluido: 2,5–5 mL, 1–2×/dia.",
   "Comprimido com 350 mg de extrato seco, 2×/dia."
  ],
  "calc": [],
  "fotos": [
   {
    "src": "assets/img/especies/uncaria-tomentosa.png",
    "credito": "Wikimedia Commons",
    "link": "https://commons.wikimedia.org/wiki/File:Uncaria_tomentosa.png",
    "obs": ""
   }
  ],
  "memento": {
   "indicacoes": "Anti-inflamatório.",
   "contraindicacoes": "Contraindicado para grávidas e lactantes.",
   "precaucoes": "Pacientes que serão submetidos a transplantes, devido ao seu efeito imunoestimulante, não devem fazer o uso desse fitoterápico.",
   "adversos": "Potencializa a ação de anticoagulantes, aumentando o risco de hemorragias.",
   "interacoes": "Administrar em associação com medicamentos e drogas vegetais, como varfarina, estrógenos, teofilina e gengibre, metabolizados pela via do citocromo P-450, apenas com acompanhamento médico.",
   "formas": "Cápsulas e comprimidos contendo extrato seco. Decocto. Extrato fluido.",
   "posologia": "Oral. Extrato fluido: de 2,5 a 5 mL, 1 a 2 vezes ao dia. Comprimido contendo 350 mg de extrato seco, duas vezes ao dia.",
   "tempo": "Utilizar por, no máximo, oito semanas.",
   "superdosagem": "Em caso de administração acima das doses recomendadas, suspender o uso e manter o paciente em observação.",
   "prescricao": "Fitoterápico, isento de prescrição médica.",
   "quimica": "Flavonoides, alcaloides indólicos, triterpenos e saponinas."
  }
 },
 {
  "id": "valeriana-officinalis",
  "nome": "Valeriana",
  "populares": [
   "Valeriana"
  ],
  "cientifico": "Valeriana officinalis L.",
  "cientificoCompleto": "Valeriana officinalis L.",
  "familia": "Caprifoliaceae",
  "sinonimia": "",
  "parte": "Raízes.",
  "via": "Oral",
  "tempoMax": "2 a 4 semanas",
  "rx": true,
  "porte": "Erva perene",
  "flor": "branca/rosada",
  "tags": [
   "insônia",
   "distúrbio do sono",
   "ansiedade",
   "nervosismo",
   "agitação",
   "sedativo"
  ],
  "partes": [
   {
    "parte": "Raízes",
    "ok": true,
    "txt": "Parte medicinal."
   },
   {
    "parte": "Retirada abrupta após anos de uso",
    "ok": false,
    "txt": "Possível síndrome de abstinência."
   }
  ],
  "riscos": {
   "gestante": [
    "c",
    "Contraindicado na gravidez."
   ],
   "lactante": [
    "c",
    "Contraindicado na lactação."
   ],
   "m_sedativo": [
    "a",
    "Potencializa depressores do SNC (benzodiazepínicos, barbitúricos)."
   ],
   "alcoolismo": [
    "a",
    "Evitar álcool (exacerba sedação)."
   ],
   "dirige": [
    "a",
    "Causa sonolência: não dirigir."
   ],
   "bradicardia": [
    "a",
    "Altas doses: bradicardia e arritmias."
   ]
  },
  "idade": {
   "min": 12,
   "nivel": "c",
   "txt": "Contraindicado para menores de 12 anos."
  },
  "populacao": [
   "Decocto: 1 a 3 g de raiz seca em água; ferver 10–15 min em fogo baixo, tampar e coar.",
   "Sedativo leve: 1 a 3 vezes ao dia. Insônia: 1 dose antes de dormir (+1 no início da noite, se necessário). Máx. 4×/dia.",
   "Efeito pleno em 2–4 semanas."
  ],
  "magistral": [
   "Droga vegetal em pó (cápsula): 0,3–1 g.",
   "Extrato aquoso: 1–3 g.",
   "Tintura 1:5 (etanol 70%): 1–3 mL.",
   "Alcoolatura: 2–5 mL.",
   "Extrato seco: 45–125 mg (dose diária)."
  ],
  "calc": [
   {
    "nome": "Decocto da raiz — 1 a 3 g por dose",
    "tipo": "decoccao",
    "g": [
     1,
     3
    ],
    "ml": 150,
    "freq": "1 a 3×/dia (máx. 4)",
    "mlObs": "O Memento não fixa o volume; 150 mL = 1 xícara de chá."
   }
  ],
  "fotos": [
   {
    "src": "assets/img/especies/valeriana-officinalis.jpg",
    "credito": "Wikimedia Commons",
    "link": "https://commons.wikimedia.org/wiki/File:3840px-Valeriana_officinalis_inflorescence_-_Niitvälja.jpg",
    "obs": ""
   }
  ],
  "memento": {
   "indicacoes": "Usado como sedativo moderado, hipnótico e no tratamento de distúrbios do sono associados à ansiedade.",
   "contraindicacoes": "Contraindicado para menores de 12 anos, grávidas, lactantes e pacientes com histórico de hipersensibilidade e alergia a qualquer um dos componentes do fitoterápico.",
   "precaucoes": "Esse fitoterápico pode causar sonolência, não sendo, portanto, recomendável a sua administração antes de dirigir, operar máquinas ou realizar qualquer atividade de risco que necessite atenção.",
   "adversos": "Os efeitos adversos relatados pelos voluntários participantes dos ensaios clínicos e tratados com os diferentes extratos secos padronizados de V. officinalis foram raros, leves e similares àqueles apresentados pelos grupos tratados com o placebo. Tais efeitos adversos incluem tontura, desconforto gastrointestinal, alergias de contato, cefaleia e midríase. Com o uso em longo prazo, os seguintes sintomas podem ocorrer: cefaleia, cansaço, insônia, midríase e desordens cardíacas. O uso de altas doses de V. officinalis por muitos anos aumentou a possibilidade de ocorrência de síndrome de abstinência com a retirada abrupta do fitoterápico.",
   "interacoes": "Esse fitoterápico pode potencializar o efeito de outros depressores do SNC. Em estudos em animais verificou-se que V. officinalis possui efeito aditivo quando utilizada em combinação com barbitúricos, anestésicos ou benzodiazepínicos e outros fármacos depressores do SNC. O extrato aquoso aumentou o tempo de sono com o tiopental (via oral em camundongo) e o extrato etanólico prolongou a anestesia promovida por tiopental (em camundongo) devido a sua afinidade aos receptores barbitúricos, e o extrato de V. officinalis e valepotriatos com receptores GABA e benzodiazepínicos (in vitro) e à diminuição dos efeitos causados pela retirada do diazepam por uma dose suficientemente grande de valepotriatos (em ratos), extratos de V. officinalis contendo valepotriatos, podendo auxiliar na síndrome de abstinência pela retirada do uso do diazepam. Evitar o uso de V. officinalis com a ingestão de bebidas alcoólicas pela possível exacerbação dos efeitos sedativos. Interações clínicas relevantes com drogas metabolizadas por CYP 2D6, CYP 3A4/5, CYP 1A2 ou CYP 2E1 não foram observadas.",
   "formas": "Cápsulas ou comprimidos contendo a droga vegetal (raízes secas) ou extratos (hidroetanólico 40-70% (v/v); extratos aquosos) e tintura. Armazenar em frascos hermeticamente fechados, ao abrigo da luz e em local sob controle de temperatura.",
   "posologia": "Oral. Pode ser utilizado para maiores de 12 anos, adultos e idosos. Se for prescrito o extrato hidroetanólico acima descrito: o equivalente a duas a três gramas. Droga vegetal: de 0,3 a 1 g da droga vegetal para usar o pó em cápsula. Como droga vegetal para preparação do decocto: 1 a 3 g. Extrato aquoso: 1 a 3 g. Tinturas (1:5, etanol 70%) 1 a 3 mL. Alcoolatura: de 2 a 5 mL. Extrato seco: de 45 a 125 mg de dose diária. Posologia - como sedativo leve: 1 a 3 vezes ao dia. Para distúrbios do sono: dose única antes de dormir mais uma dose no início da noite caso seja necessário. Dose máxima diária: 4 vezes ao dia.",
   "tempo": "Para alcançar um efeito ótimo de tratamento, o uso continuado é recomendado durante 2-4 semanas, não sendo indicado o tratamento agudo. Se os sintomas persistirem ou se agravar após 2 semanas de uso contínuo, o médico deve ser consultado.",
   "superdosagem": "Em casos de superdosagem (doses de raiz superiores a 20 g) podem ocorrer sintomas adversos leves como fadiga, câimbras abdominais, tensionamento do tórax, tontura, tremores e midríase que desapareceram no período de 24 horas após descontinuação do uso. Altas doses de V. officinalis podem causar bradicardias, arritmias e redução do peristaltismo intestinal.",
   "prescricao": "Fitoterápico, somente sob prescrição médica.",
   "quimica": "Monoterpenos, sesquiterpenos, epóxi-iridóides e valepotriatos."
  }
 },
 {
  "id": "zingiber-officinale",
  "nome": "Gengibre",
  "populares": [
   "Gengibre"
  ],
  "cientifico": "Zingiber officinale Roscoe",
  "cientificoCompleto": "Zingiber officinale Roscoe",
  "familia": "Zingiberaceae",
  "sinonimia": "",
  "parte": "Rizomas.",
  "via": "Oral",
  "tempoMax": "Não estabelecido",
  "rx": false,
  "porte": "Erva com rizoma",
  "flor": "amarelo-esverdeada",
  "tags": [
   "náusea",
   "enjoo",
   "vômito",
   "cinetose",
   "enjoo de viagem",
   "dispepsia",
   "má digestão"
  ],
  "partes": [
   {
    "parte": "Rizoma",
    "ok": true,
    "txt": "Parte medicinal."
   }
  ],
  "riscos": {
   "calculo": [
    "c",
    "Contraindicado em cálculos biliares."
   ],
   "gastrite": [
    "c",
    "Contraindicado em irritação gástrica."
   ],
   "has": [
    "c",
    "Contraindicado na hipertensão arterial (Memento)."
   ],
   "coagulopatia": [
    "a",
    "Pode afetar tempo de sangramento."
   ],
   "m_anticoag": [
    "a",
    "Altas doses aumentam efeito de anticoagulantes."
   ]
  },
  "idade": {
   "min": 6,
   "nivel": "c",
   "txt": "Não indicado para crianças; cinetose a partir de 6 anos; infuso acima de 12."
  },
  "populacao": [
   "Infuso: 0,5 a 1 g de rizoma seco (ou fatias finas) em 150 mL de água fervente; abafar 5 min e coar.",
   "Tomar 2 a 4 vezes ao dia (acima de 12 anos).",
   "Cinetose: 0,5 g, 2 a 4×/dia (adultos e crianças > 6 anos)."
  ],
  "magistral": [
   "Tintura: 2,5 mL em 75 mL de água, 1–3×/dia (ou 1,5–3 mL/dia).",
   "Dispepsia: 2–4 g/dia de droga vegetal ou extrato seco equivalente."
  ],
  "calc": [
   {
    "nome": "Infuso — 0,5 a 1 g / 150 mL",
    "tipo": "infusao",
    "g": [
     0.5,
     1
    ],
    "ml": 150,
    "freq": "2 a 4 vezes ao dia"
   },
   {
    "nome": "Tintura — 2,5 mL em 75 mL de água",
    "tipo": "tintura",
    "mlT": [
     2.5,
     2.5
    ],
    "ml": 75,
    "freq": "1 a 3 vezes ao dia"
   }
  ],
  "fotos": [
   {
    "src": "assets/img/especies/zingiber-officinale.jpg",
    "credito": "Wikimedia Commons",
    "link": "https://commons.wikimedia.org/wiki/File:Koeh-146-no_text.jpg",
    "obs": ""
   }
  ],
  "memento": {
   "indicacoes": "Antiemético, antidispéptico, e nos casos de cinetose.",
   "contraindicacoes": "Contraindicado para pessoas com cálculos biliares, irritação gástrica e hipertensão arterial. Não é indicado para crianças.",
   "precaucoes": "Os pacientes que tomam medicamentos anticoagulantes ou que apresentam distúrbios da coagulação sanguínea devem consultar seu médico antes de se auto-medicar com gengibre. Pacientes com cálculos biliares devem consultar seu médico antes de usar preparações de gengibre.",
   "adversos": "Dermatite de contato tem sido relatada em pacientes sensíveis.",
   "interacoes": "O gengibre pode afetar o tempo de sangramento e parâmetros imunológicos, devido a sua capacidade de inibir a tromboxano-sintetase e por atuar como agonista da prostaciclina. No entanto, um estudo randomizado, duplo-cego sobre os efeitos de gengibre seco (2 g/dia, oralmente durante 14 dias) na função plaquetária não mostrou diferenças nos tempos de sangramento em pacientes que receberam gengibre ou placebo.",
   "formas": "Cápsulas ou comprimidos contendo extrato seco, droga vegetal (rizomas), extrato fluido, e tintura. Gengibre em pó deve ser armazenado em recipientes hermeticamente fechados (não de plástico), ao abrigo da umidade e da luz, em local seco e fresco.",
   "posologia": "Oral. Infuso: acima de 12 anos: de 0,5 a 1 g em 150 mL de água, 5 minutos após o preparo, tomar de duas a quatro vezes ao dia. Tintura: tomar 2,5 mL da tintura diluída em 75 mL de água, uma a três vezes ao dia ou 1,5 a 3,0 mL diariamente. Em casos de cinetose em adultos e crianças com mais de 6 anos: 0,5 g, 2 a 4 vezes ao dia. Dispepsia: 2 a 4 g da droga vegetal ou extrato seco.",
   "tempo": "Pacientes que usaram gengibre por um período de 3 meses a 2,5 anos não apresentaram efeitos adversos.",
   "superdosagem": "Altas doses (12-14 g) de gengibre podem aumentar os efeitos hipotrombinêmicos da terapia anticoagulante.",
   "prescricao": "Fitoterápico, isento de prescrição médica.",
   "quimica": "Óleo essencial (zingibereno, β-bisabolol, β-sesquifelandreno), shogaol, e gingerol; zingeronas e diterpenoides de núcleo labdano."
  }
 }
];
