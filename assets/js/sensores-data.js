/* ================================================
   BASE DE DADOS DOS SENSORES - RoboTech
   Catálogo técnico de sensores IoT e Industriais
   Cada objeto contém as 10 informações exigidas:
   nome, categoria, conceito, princípio de funcionamento,
   especificações, tipo de sinal, aplicações, exemplo de uso,
   ícone ilustrativo e fabricantes/modelos comerciais.
   ================================================ */

const SENSORES = [
  {
    id: "dht11",
    nome: "DHT11",
    categoria: "Temperatura e Umidade",
    icone: "🌡️",
    conceito: "Sensor digital combinado de temperatura e umidade relativa do ar, muito utilizado em projetos educacionais e IoT de baixo custo.",
    principio: "Utiliza um termistor NTC para medir temperatura e um sensor capacitivo de umidade para medir a umidade do ar. Um microcontrolador interno converte os sinais analógicos em um sinal digital enviado por um único fio.",
    especificacoes: [
      "Alimentação: 3,3V a 5V",
      "Faixa de temperatura: 0°C a 50°C (±2°C)",
      "Faixa de umidade: 20% a 90% UR (±5%)",
      "Taxa de amostragem: 1 leitura por segundo"
    ],
    tipoSinal: "Digital (protocolo proprietário de 1 fio)",
    aplicacoes: [
      "Estações meteorológicas simples",
      "Estufas e viveiros agrícolas",
      "Monitoramento de conforto ambiental",
      "Projetos educacionais de IoT"
    ],
    exemplo: "Em uma estufa automatizada, o DHT11 monitora a temperatura e a umidade do ar e envia os dados a um Arduino, que aciona um exaustor sempre que a temperatura ultrapassa o limite programado.",
    fabricantes: ["Aosong (fabricante original)", "Módulos genéricos compatíveis de diversos fornecedores"]
  },
  {
    id: "dht22",
    nome: "DHT22",
    categoria: "Temperatura e Umidade",
    icone: "🌡️",
    conceito: "Versão aprimorada do DHT11, oferece maior precisão e faixa de leitura mais ampla para temperatura e umidade.",
    principio: "Assim como o DHT11, combina um termistor de precisão e um elemento capacitivo de umidade, mas com componentes de melhor qualidade, resultando em leituras mais estáveis e exatas.",
    especificacoes: [
      "Alimentação: 3,3V a 6V",
      "Faixa de temperatura: -40°C a 80°C (±0,5°C)",
      "Faixa de umidade: 0% a 100% UR (±2 a 5%)",
      "Taxa de amostragem: 1 leitura a cada 2 segundos"
    ],
    tipoSinal: "Digital (protocolo proprietário de 1 fio)",
    aplicacoes: [
      "Monitoramento climático de precisão",
      "Controle de câmaras frias e incubadoras",
      "Sistemas HVAC (aquecimento, ventilação e ar-condicionado)",
      "Data loggers ambientais"
    ],
    exemplo: "Em um sistema de climatização predial, o DHT22 fornece leituras precisas de temperatura e umidade para um controlador que regula automaticamente o ar-condicionado do ambiente.",
    fabricantes: ["Aosong (AM2302/DHT22)", "Módulos genéricos compatíveis"]
  },
  {
    id: "lm35",
    nome: "LM35",
    categoria: "Temperatura",
    icone: "🌡️",
    conceito: "Sensor analógico de temperatura de precisão, cuja tensão de saída é diretamente proporcional à temperatura em graus Celsius.",
    principio: "É um circuito integrado que gera uma tensão de saída linear de 10 mV para cada 1°C, dispensando calibração externa e cálculos de conversão complexos.",
    especificacoes: [
      "Alimentação: 4V a 30V",
      "Faixa de medição: -55°C a 150°C",
      "Precisão: ±0,5°C",
      "Saída: 10 mV/°C"
    ],
    tipoSinal: "Analógico (tensão proporcional)",
    aplicacoes: [
      "Controle de temperatura de equipamentos",
      "Monitoramento térmico industrial",
      "Sistemas de refrigeração",
      "Proteção térmica de motores"
    ],
    exemplo: "Em um painel elétrico industrial, o LM35 monitora a temperatura interna do gabinete e aciona um alarme quando a temperatura ultrapassa 60°C, evitando superaquecimento dos componentes.",
    fabricantes: ["Texas Instruments (fabricante original)", "STMicroelectronics (equivalentes)"]
  },
  {
    id: "ds18b20",
    nome: "DS18B20",
    categoria: "Temperatura",
    icone: "🌡️",
    conceito: "Sensor digital de temperatura de alta precisão, disponível também em versão à prova d'água (sonda), ideal para monitorar líquidos.",
    principio: "Utiliza o protocolo 1-Wire da Maxim/Dallas, permitindo que vários sensores compartilhem o mesmo barramento de dados usando apenas um fio, cada um identificado por um endereço único de 64 bits.",
    especificacoes: [
      "Alimentação: 3V a 5,5V",
      "Faixa de medição: -55°C a 125°C (±0,5°C entre -10°C e 85°C)",
      "Resolução configurável: 9 a 12 bits",
      "Comunicação: barramento 1-Wire (múltiplos sensores em um único fio)"
    ],
    tipoSinal: "Digital (protocolo 1-Wire)",
    aplicacoes: [
      "Monitoramento de temperatura em líquidos e tanques",
      "Controle de processos industriais",
      "Aquariofilia e hidroponia",
      "Monitoramento de múltiplos pontos em uma mesma linha"
    ],
    exemplo: "Em um sistema de aquaponia, várias sondas DS18B20 são conectadas ao mesmo barramento para monitorar a temperatura da água em diferentes tanques simultaneamente.",
    fabricantes: ["Maxim Integrated / Analog Devices (fabricante original)", "Módulos genéricos com sonda impermeável"]
  },
  {
    id: "ldr",
    nome: "LDR (Fotoresistor)",
    categoria: "Luminosidade",
    icone: "💡",
    conceito: "Resistor cuja resistência elétrica varia de acordo com a intensidade de luz incidente sobre ele.",
    principio: "Fabricado com sulfeto de cádmio (CdS), o material apresenta fotocondutividade: quanto maior a luminosidade, menor a resistência elétrica do componente, e vice-versa.",
    especificacoes: [
      "Resistência no escuro: na ordem de MΩ",
      "Resistência sob luz intensa: poucas centenas de Ω",
      "Necessita circuito divisor de tensão para leitura",
      "Tempo de resposta: relativamente lento (dezenas de ms)"
    ],
    tipoSinal: "Analógico (variação de resistência)",
    aplicacoes: [
      "Controle automático de iluminação pública",
      "Persianas e cortinas automatizadas",
      "Painéis solares com rastreamento de luz",
      "Alarmes sensíveis à presença de luz"
    ],
    exemplo: "Em um poste de iluminação inteligente, o LDR detecta o anoitecer e aciona automaticamente as lâmpadas, apagando-as ao amanhecer.",
    fabricantes: ["Módulos genéricos GL5528/GL5516", "Diversos fornecedores de componentes eletrônicos"]
  },
  {
    id: "bh1750",
    nome: "BH1750",
    categoria: "Luminosidade",
    icone: "💡",
    conceito: "Sensor digital de luminosidade que mede a intensidade luminosa em lux com boa precisão, comunicando-se via protocolo I2C.",
    principio: "Um fotodiodo converte a luz em corrente elétrica, que é processada por um conversor analógico-digital de 16 bits interno, entregando diretamente o valor em lux ao microcontrolador.",
    especificacoes: [
      "Alimentação: 3V a 5V (módulo com regulador)",
      "Faixa de medição: 1 a 65535 lux",
      "Resolução: 1 lux",
      "Comunicação: I2C (endereço 0x23 ou 0x5C)"
    ],
    tipoSinal: "Digital (I2C)",
    aplicacoes: [
      "Automação de iluminação inteligente (dimerização)",
      "Estações meteorológicas digitais",
      "Estufas com controle de luminosidade",
      "Medição de qualidade de iluminação de ambientes"
    ],
    exemplo: "Em um sistema de iluminação de escritório, o BH1750 mede a luz natural disponível e ajusta a intensidade das luminárias LED para manter o nível ideal de iluminação, economizando energia.",
    fabricantes: ["ROHM Semiconductor (fabricante original)", "Módulos genéricos GY-30/GY-302"]
  },
  {
    id: "hcsr04",
    nome: "HC-SR04",
    categoria: "Distância",
    icone: "📏",
    conceito: "Sensor ultrassônico que mede distância através da emissão e recepção de ondas sonoras de alta frequência.",
    principio: "Emite um pulso ultrassônico pelo pino Trigger e mede o tempo que o eco leva para retornar ao pino Echo. A distância é calculada com base no tempo de voo e na velocidade do som no ar.",
    especificacoes: [
      "Alimentação: 5V",
      "Faixa de medição: 2 cm a 400 cm",
      "Precisão: ±3 mm",
      "Ângulo de detecção: aproximadamente 15°"
    ],
    tipoSinal: "Digital (pulsos Trigger/Echo)",
    aplicacoes: [
      "Detecção de obstáculos em robôs móveis",
      "Medição de nível em reservatórios",
      "Sistemas de estacionamento assistido",
      "Contagem de objetos em esteiras industriais"
    ],
    exemplo: "Em um robô móvel autônomo, o HC-SR04 é posicionado na frente do chassi para detectar obstáculos e permitir que o Arduino calcule uma rota alternativa em tempo real.",
    fabricantes: ["Elec-Freaks / módulos genéricos amplamente disponíveis"]
  },
  {
    id: "pir-hcsr501",
    nome: "PIR HC-SR501",
    categoria: "Movimento",
    icone: "🚶",
    conceito: "Sensor infravermelho passivo (PIR) que detecta a movimentação de corpos que emitem radiação infravermelha, como pessoas e animais.",
    principio: "Detecta variações na radiação infravermelha emitida por corpos quentes dentro de seu campo de visão. Quando um corpo em movimento entra ou sai da área de detecção, o sensor aciona sua saída digital.",
    especificacoes: [
      "Alimentação: 5V a 20V",
      "Alcance de detecção: até 7 metros",
      "Ângulo de detecção: aproximadamente 120°",
      "Sensibilidade e tempo de retenção ajustáveis por potenciômetros"
    ],
    tipoSinal: "Digital (nível alto/baixo)",
    aplicacoes: [
      "Sistemas de segurança e alarmes",
      "Iluminação automática por presença",
      "Contagem de pessoas em ambientes",
      "Automação residencial e predial"
    ],
    exemplo: "Em um corredor industrial, o PIR HC-SR501 aciona automaticamente a iluminação quando detecta a passagem de um colaborador, apagando-a após alguns minutos sem movimento.",
    fabricantes: ["Módulos genéricos baseados no chip BISS0001"]
  },
  {
    id: "lj12a3",
    nome: "Sensor Indutivo LJ12A3",
    categoria: "Proximidade",
    icone: "🧲",
    conceito: "Sensor de proximidade sem contato utilizado para detectar exclusivamente objetos metálicos próximos à sua face sensora.",
    principio: "Gera um campo eletromagnético oscilante em sua bobina interna. Quando um objeto metálico se aproxima, ocorre uma alteração nesse campo (correntes parasitas), que é detectada e convertida em um sinal de chaveamento digital.",
    especificacoes: [
      "Alimentação: 6V a 36V DC",
      "Distância de detecção: 2 mm a 4 mm (dependendo do modelo)",
      "Saída: NPN ou PNP, normalmente aberta (NA) ou fechada (NF)",
      "Grau de proteção: geralmente IP67 (resistente a poeira e água)"
    ],
    tipoSinal: "Digital (saída a transistor NPN/PNP)",
    aplicacoes: [
      "Contagem de peças metálicas em linhas de produção",
      "Detecção de fim de curso em máquinas",
      "Controle de posicionamento de esteiras",
      "Segurança de portas e gabinetes metálicos"
    ],
    exemplo: "Em uma linha de montagem, o LJ12A3 é instalado próximo a uma esteira para contar automaticamente peças metálicas que passam por um determinado ponto do processo.",
    fabricantes: ["Módulos genéricos LJ12A3-4-Z/BX (diversos fornecedores industriais)"]
  },
  {
    id: "lj18a3",
    nome: "Sensor Capacitivo LJ18A3",
    categoria: "Proximidade",
    icone: "🧲",
    conceito: "Sensor de proximidade sem contato capaz de detectar tanto materiais metálicos quanto não metálicos, como plásticos, madeira, líquidos e grãos.",
    principio: "Gera um campo eletrostático na face sensora. Quando um material (condutor ou não) se aproxima, altera a capacitância desse campo, o que é detectado por um circuito oscilador interno que comuta a saída digital.",
    especificacoes: [
      "Alimentação: 6V a 36V DC",
      "Distância de detecção: até 10 mm (dependendo do material e modelo)",
      "Saída: NPN ou PNP, normalmente aberta (NA) ou fechada (NF)",
      "Sensibilidade ajustável por parafuso/potenciômetro interno"
    ],
    tipoSinal: "Digital (saída a transistor NPN/PNP)",
    aplicacoes: [
      "Detecção de nível em silos e reservatórios",
      "Controle de embalagens plásticas e de papel",
      "Detecção de líquidos através de paredes de recipientes não metálicos",
      "Automação de processos com materiais não condutores"
    ],
    exemplo: "Em um silo de grãos, o LJ18A3 é fixado na parede externa e detecta quando o nível de grãos atinge determinada altura, sem necessidade de contato direto com o material.",
    fabricantes: ["Módulos genéricos LJ18A3-8-Z/BX (diversos fornecedores industriais)"]
  },
  {
    id: "mq2",
    nome: "MQ-2",
    categoria: "Gás",
    icone: "🔥",
    conceito: "Sensor de gás de baixo custo utilizado para detectar fumaça e gases combustíveis como GLP, butano, propano, metano e hidrogênio.",
    principio: "Possui um elemento sensível composto de dióxido de estanho (SnO2), cuja condutividade elétrica aumenta na presença dos gases-alvo. Um filamento resistivo aquece o elemento para garantir sensibilidade adequada.",
    especificacoes: [
      "Alimentação: 5V",
      "Tempo de pré-aquecimento: cerca de 20 a 60 segundos",
      "Faixa de detecção: 200 a 10.000 ppm (dependendo do gás)",
      "Saída analógica proporcional e saída digital via comparador (potenciômetro de limiar)"
    ],
    tipoSinal: "Analógico (e digital via módulo comparador)",
    aplicacoes: [
      "Detecção de vazamentos de gás GLP em cozinhas industriais",
      "Sistemas de alarme contra incêndio e fumaça",
      "Monitoramento de segurança em ambientes industriais",
      "Projetos de automação residencial de segurança"
    ],
    exemplo: "Em uma cozinha industrial, o MQ-2 monitora continuamente o ambiente e aciona um alarme sonoro e o fechamento automático do registro de gás caso detecte um vazamento.",
    fabricantes: ["Winsen Electronics (fabricante original do elemento sensor)", "Módulos genéricos amplamente disponíveis"]
  },
  {
    id: "mq135",
    nome: "MQ-135",
    categoria: "Gás",
    icone: "🌫️",
    conceito: "Sensor de gás voltado para o monitoramento da qualidade do ar, sensível a diversos gases poluentes e nocivos.",
    principio: "Assim como o MQ-2, utiliza um elemento sensor de SnO2 cuja resistência varia conforme a concentração de gases como CO2, amônia (NH3), benzeno e óxidos de nitrogênio presentes no ar.",
    especificacoes: [
      "Alimentação: 5V",
      "Tempo de pré-aquecimento: recomenda-se 24h para calibração inicial, e alguns minutos entre leituras",
      "Gases detectáveis: NH3, NOx, CO2, benzeno, fumaça, entre outros",
      "Saída analógica proporcional e saída digital via comparador"
    ],
    tipoSinal: "Analógico (e digital via módulo comparador)",
    aplicacoes: [
      "Monitoramento da qualidade do ar interno (IAQ)",
      "Sistemas de ventilação automática",
      "Monitoramento ambiental em estufas e galpões",
      "Projetos de cidades inteligentes (smart cities)"
    ],
    exemplo: "Em um galpão industrial fechado, o MQ-135 monitora a qualidade do ar e aciona automaticamente exaustores quando a concentração de gases nocivos ultrapassa o limite seguro.",
    fabricantes: ["Winsen Electronics (fabricante original do elemento sensor)", "Módulos genéricos amplamente disponíveis"]
  },
  {
    id: "higrometro-solo",
    nome: "Sensor Capacitivo de Umidade do Solo",
    categoria: "Umidade",
    icone: "🌱",
    conceito: "Sensor utilizado para medir o nível de umidade presente no solo, indicando a necessidade de irrigação em cultivos.",
    principio: "Baseia-se no princípio da capacitância: a sonda funciona como um capacitor cuja capacitância varia conforme o teor de água no solo, evitando o contato direto de eletrodos metálicos com a terra (diferente dos modelos resistivos, mais suscetíveis à corrosão).",
    especificacoes: [
      "Alimentação: 3,3V a 5V",
      "Saída: tensão analógica inversamente proporcional à umidade",
      "Material resistente à corrosão (sonda capacitiva revestida)",
      "Vida útil superior aos sensores resistivos tradicionais"
    ],
    tipoSinal: "Analógico",
    aplicacoes: [
      "Agricultura de precisão e irrigação automática",
      "Hortas e jardins inteligentes",
      "Estufas com controle automatizado de rega",
      "Monitoramento remoto de plantações (agro IoT)"
    ],
    exemplo: "Em uma horta automatizada, o sensor capacitivo de umidade do solo informa ao Arduino quando a terra está seca, acionando automaticamente uma bomba de irrigação por gotejamento.",
    fabricantes: ["Módulos genéricos capacitivos v1.2/v2.0 (diversos fornecedores)"]
  },
  {
    id: "fc37",
    nome: "Sensor de Chuva FC-37",
    categoria: "Chuva",
    icone: "🌧️",
    conceito: "Sensor utilizado para detectar a presença e a intensidade de chuva através de uma placa com trilhas condutoras expostas.",
    principio: "A placa sensora possui trilhas de cobre expostas que, ao entrarem em contato com gotas de água, alteram a condutividade entre elas. Quanto mais água sobre a placa, menor a resistência medida, gerando uma leitura analógica proporcional à intensidade da chuva.",
    especificacoes: [
      "Alimentação: 5V",
      "Saída analógica proporcional à quantidade de água na placa",
      "Saída digital via módulo comparador com potenciômetro de limiar",
      "Placa sensora exposta, requer proteção contra corrosão prolongada"
    ],
    tipoSinal: "Analógico (e digital via módulo comparador)",
    aplicacoes: [
      "Fechamento automático de janelas e coberturas",
      "Sistemas de irrigação inteligente (suspensão em dias de chuva)",
      "Estações meteorológicas",
      "Alertas de alagamento"
    ],
    exemplo: "Em uma estação meteorológica residencial, o FC-37 detecta o início da chuva e envia um comando para fechar automaticamente uma cobertura retrátil no varal.",
    fabricantes: ["Módulos genéricos YL-83/FC-37 (diversos fornecedores)"]
  },
  {
    id: "boia-nivel",
    nome: "Sensor de Nível (Boia)",
    categoria: "Nível",
    icone: "🎣",
    conceito: "Dispositivo eletromecânico simples utilizado para detectar o nível de líquidos em reservatórios, caixas d'água e tanques.",
    principio: "Uma boia flutuante contém um ímã interno que aciona uma chave reed (reed switch) quando atinge determinada posição de inclinação, abrindo ou fechando um contato elétrico conforme o nível do líquido sobe ou desce.",
    especificacoes: [
      "Tensão de operação: varia conforme o modelo (baixa tensão DC até 220V AC em modelos industriais)",
      "Corrente máxima de chaveamento: geralmente até 1A (uso em relé para cargas maiores)",
      "Material: polipropileno resistente à água, indicado para uso submerso",
      "Ângulo de acionamento típico: 20° a 45°"
    ],
    tipoSinal: "Digital (contato seco - aberto/fechado)",
    aplicacoes: [
      "Controle automático de bombas de água em caixas d'água",
      "Alarme de nível mínimo/máximo em reservatórios industriais",
      "Sistemas de irrigação",
      "Proteção contra funcionamento a seco de bombas"
    ],
    exemplo: "Em uma caixa d'água residencial, a boia de nível aciona automaticamente a bomba de recalque quando o nível de água está baixo, desligando-a assim que o reservatório enche.",
    fabricantes: ["Módulos genéricos de chave boia vertical/horizontal (diversos fornecedores)"]
  },
  {
    id: "yfs201",
    nome: "YF-S201",
    categoria: "Fluxo",
    icone: "💧",
    conceito: "Sensor de fluxo de água utilizado para medir a vazão de líquidos que passam por uma tubulação.",
    principio: "Um rotor interno gira conforme o líquido passa pelo sensor. Um sensor de efeito Hall detecta a rotação das pás e gera pulsos elétricos, cuja frequência é proporcional à vazão do fluido.",
    especificacoes: [
      "Alimentação: 5V a 24V",
      "Faixa de medição: 1 a 30 L/min",
      "Saída: pulsos digitais (frequência aproximada de 7,5 Hz por L/min)",
      "Pressão máxima de trabalho: até 1,75 MPa"
    ],
    tipoSinal: "Digital (pulsos)",
    aplicacoes: [
      "Medição de consumo de água residencial e industrial",
      "Sistemas de irrigação com controle de volume",
      "Dosagem de líquidos em processos industriais",
      "Detecção de vazamentos por análise de vazão"
    ],
    exemplo: "Em um sistema de irrigação por gotejamento, o YF-S201 mede o volume de água entregue a cada setor da plantação, permitindo o controle preciso da dosagem de irrigação.",
    fabricantes: ["Módulos genéricos YF-S201 (diversos fornecedores hidráulicos e eletrônicos)"]
  },
  {
    id: "acs712",
    nome: "ACS712",
    categoria: "Corrente",
    icone: "⚡",
    conceito: "Sensor de corrente elétrica baseado em efeito Hall, capaz de medir corrente contínua (CC) ou alternada (CA) de forma isolada eletricamente.",
    principio: "A corrente a ser medida passa por um caminho condutor interno de baixa resistência, que gera um campo magnético proporcional. Um sensor de efeito Hall integrado converte esse campo magnético em uma tensão analógica proporcional à corrente.",
    especificacoes: [
      "Alimentação: 5V",
      "Faixas comerciais comuns: ±5A, ±20A ou ±30A",
      "Sensibilidade: 185 mV/A, 100 mV/A ou 66 mV/A (conforme a faixa)",
      "Saída centrada em Vcc/2 (2,5V) para corrente zero, com isolamento galvânico"
    ],
    tipoSinal: "Analógico",
    aplicacoes: [
      "Monitoramento de consumo de energia de motores e equipamentos",
      "Proteção contra sobrecorrente em painéis elétricos",
      "Sistemas de monitoramento energético (energy metering)",
      "Diagnóstico de falhas em máquinas industriais"
    ],
    exemplo: "Em um painel de controle de motores, o ACS712 monitora continuamente a corrente consumida por um motor trifásico, permitindo que o sistema desligue o equipamento em caso de sobrecarga.",
    fabricantes: ["Allegro MicroSystems (fabricante original)", "Módulos genéricos compatíveis"]
  },
  {
    id: "zmpt101b",
    nome: "ZMPT101B",
    categoria: "Tensão",
    icone: "🔌",
    conceito: "Módulo sensor utilizado para medir tensão elétrica alternada (CA) de forma segura e isolada.",
    principio: "Utiliza um transformador de precisão para reduzir e isolar galvanicamente a tensão da rede elétrica, entregando uma forma de onda analógica em baixa tensão que pode ser amostrada por um microcontrolador para calcular o valor RMS da tensão.",
    especificacoes: [
      "Alimentação: 5V",
      "Faixa de medição: até 250V CA (dependendo do ajuste do trimpot)",
      "Isolamento galvânico via transformador de precisão",
      "Saída: forma de onda analógica proporcional à tensão de entrada"
    ],
    tipoSinal: "Analógico",
    aplicacoes: [
      "Monitoramento de tensão da rede elétrica",
      "Sistemas de proteção contra sub/sobretensão",
      "Medidores de energia elétrica (smart meters)",
      "Diagnóstico de qualidade de energia em instalações industriais"
    ],
    exemplo: "Em um quadro de distribuição elétrica, o ZMPT101B monitora a tensão da rede e alerta o sistema de automação caso ocorra uma queda ou pico de tensão fora da faixa segura.",
    fabricantes: ["Módulos genéricos ZMPT101B (diversos fornecedores)"]
  },
  {
    id: "sw420",
    nome: "SW-420",
    categoria: "Vibração",
    icone: "📳",
    conceito: "Sensor utilizado para detectar vibrações e choques mecânicos em máquinas e estruturas.",
    principio: "Contém uma pequena esfera metálica dentro de um tubo condutor. Quando ocorre vibração, a esfera se movimenta e altera momentaneamente o contato elétrico interno, gerando pulsos que são interpretados por um comparador com sensibilidade ajustável.",
    especificacoes: [
      "Alimentação: 3,3V a 5V",
      "Saída digital (nível alto/baixo) com LED indicador",
      "Sensibilidade ajustável via potenciômetro",
      "Tempo de resposta rápido, adequado para detecção de impactos"
    ],
    tipoSinal: "Digital",
    aplicacoes: [
      "Monitoramento de vibração em motores e máquinas rotativas",
      "Sistemas de alarme contra impacto ou arrombamento",
      "Manutenção preditiva industrial",
      "Detecção de terremotos em projetos experimentais"
    ],
    exemplo: "Em uma máquina rotativa industrial, o SW-420 detecta vibrações anormais causadas por desbalanceamento e aciona um alerta para a equipe de manutenção preditiva.",
    fabricantes: ["Módulos genéricos SW-420 (diversos fornecedores)"]
  },
  {
    id: "hall-a3144",
    nome: "Sensor Hall A3144",
    categoria: "Rotação",
    icone: "🌀",
    conceito: "Sensor de efeito Hall utilizado para detectar a presença de campos magnéticos, frequentemente aplicado na medição de velocidade de rotação.",
    principio: "Detecta a presença de um campo magnético próximo (geralmente um ímã fixado a um eixo giratório) e gera uma saída digital em nível baixo sempre que o ímã passa por sua face sensora, permitindo contar pulsos por tempo para calcular a velocidade de rotação (RPM).",
    especificacoes: [
      "Alimentação: 4,5V a 24V",
      "Saída: digital, coletor aberto (open-collector)",
      "Necessita ímã permanente próximo para acionamento",
      "Tempo de resposta rápido, adequado para altas rotações"
    ],
    tipoSinal: "Digital (saída open-collector)",
    aplicacoes: [
      "Medição de velocidade de motores (tacômetro digital)",
      "Contagem de rotações em rodas e eixos",
      "Sistemas de ignição eletrônica",
      "Monitoramento de esteiras e correias transportadoras"
    ],
    exemplo: "Em um motor industrial, um ímã é fixado ao eixo e o sensor Hall A3144 é posicionado próximo a ele, permitindo que o Arduino calcule a rotação por minuto (RPM) do motor contando os pulsos gerados.",
    fabricantes: ["Allegro MicroSystems (fabricante original)", "Módulos genéricos compatíveis"]
  },
  {
    id: "mfrc522",
    nome: "MFRC522",
    categoria: "RFID",
    icone: "💳",
    conceito: "Módulo leitor/gravador de cartões RFID (identificação por radiofrequência) utilizado para controle de acesso e identificação de objetos.",
    principio: "Opera na frequência de 13,56 MHz, emitindo um campo eletromagnético que alimenta e comunica-se com cartões e tags RFID passivos (padrão Mifare) posicionados a poucos centímetros do módulo, trocando dados de identificação por radiofrequência.",
    especificacoes: [
      "Alimentação: 3,3V",
      "Frequência de operação: 13,56 MHz",
      "Alcance de leitura: aproximadamente 3 a 5 cm",
      "Comunicação com o microcontrolador: SPI"
    ],
    tipoSinal: "Digital (SPI)",
    aplicacoes: [
      "Controle de acesso a ambientes restritos",
      "Sistemas de identificação de funcionários (ponto eletrônico)",
      "Rastreamento de ativos e produtos",
      "Bilhetagem eletrônica e catracas"
    ],
    exemplo: "Em uma porta de acesso restrito de uma fábrica, o MFRC522 lê o cartão RFID do colaborador e libera a fechadura eletrônica somente se o cartão estiver autorizado no sistema.",
    fabricantes: ["NXP Semiconductors (fabricante original do chip MFRC522)", "Módulos genéricos RC522"]
  },
  {
    id: "celula-carga-hx711",
    nome: "Célula de Carga + HX711",
    categoria: "Peso",
    icone: "⚖️",
    conceito: "Conjunto formado por uma célula de carga (sensor de deformação) e um módulo amplificador/conversor HX711, utilizado para medir peso e força.",
    principio: "A célula de carga contém extensômetros (strain gauges) que alteram sua resistência elétrica conforme se deformam sob peso, formando uma ponte de Wheatstone. O módulo HX711 amplifica esse sinal de poucos milivolts e o converte em um valor digital de alta resolução (24 bits).",
    especificacoes: [
      "Alimentação do HX711: 2,6V a 5,5V",
      "Resolução do conversor: 24 bits",
      "Capacidade da célula de carga: varia conforme o modelo (1kg, 5kg, 10kg, 20kg, entre outros)",
      "Comunicação com o microcontrolador: 2 fios (clock e dados)"
    ],
    tipoSinal: "Digital (protocolo síncrono de 2 fios)",
    aplicacoes: [
      "Balanças industriais e comerciais",
      "Sistemas de pesagem em linhas de produção",
      "Controle de estoque por peso (silos, tremonhas)",
      "Dosagem automática de matérias-primas"
    ],
    exemplo: "Em uma linha de embalagem industrial, a célula de carga com HX711 verifica o peso de cada pacote produzido, rejeitando automaticamente aqueles que estão fora da faixa de peso especificada.",
    fabricantes: ["Avia Semiconductor (fabricante original do HX711)", "Diversos fabricantes de células de carga (Straight Bar, Barra de Choque)"]
  },
  {
    id: "ky037",
    nome: "KY-037",
    categoria: "Som",
    icone: "🔊",
    conceito: "Módulo sensor de som composto por um microfone de eletreto, utilizado para detectar a presença e intensidade de ruídos sonoros.",
    principio: "O microfone capta ondas sonoras e as converte em um sinal elétrico. Esse sinal é amplificado por um circuito comparador com potenciômetro, gerando tanto uma saída analógica proporcional à intensidade do som quanto uma saída digital que indica se um limiar de som foi ultrapassado.",
    especificacoes: [
      "Alimentação: 3,3V a 5V",
      "Saída analógica proporcional à amplitude do som",
      "Saída digital com sensibilidade ajustável por potenciômetro",
      "Sensível principalmente a variações de amplitude sonora, não realiza reconhecimento de frequência"
    ],
    tipoSinal: "Analógico e Digital",
    aplicacoes: [
      "Monitoramento de nível de ruído em ambientes industriais",
      "Sistemas de alarme acionados por som (ex.: quebra de vidro)",
      "Automação residencial ativada por palmas",
      "Projetos de identificação de ruídos anormais em máquinas"
    ],
    exemplo: "Em um galpão industrial, o KY-037 monitora o nível de ruído ambiente e registra picos de som que podem indicar falhas mecânicas em equipamentos próximos.",
    fabricantes: ["Módulos genéricos KY-037/KY-038 (diversos fornecedores)"]
  },
  {
    id: "chama-ir",
    nome: "Sensor de Chama IR",
    categoria: "Chama",
    icone: "🔥",
    conceito: "Sensor infravermelho utilizado para detectar a presença de fogo ou chamas a partir da radiação infravermelha emitida por elas.",
    principio: "Um fototransistor ou fotodiodo sensível à faixa espectral do infravermelho (aproximadamente 760 a 1100 nm), característica da luz emitida por chamas, detecta essa radiação e a converte em sinal elétrico, comparado a um limiar ajustável.",
    especificacoes: [
      "Alimentação: 3,3V a 5V",
      "Comprimento de onda detectável: aproximadamente 760 a 1100 nm",
      "Ângulo de detecção: aproximadamente 60°",
      "Alcance: variável conforme o tamanho da chama (tipicamente até 1 metro em módulos simples)"
    ],
    tipoSinal: "Analógico e Digital",
    aplicacoes: [
      "Sistemas de detecção e alarme de incêndio",
      "Robótica de combate a incêndio (robôs apaga-fogo)",
      "Monitoramento de segurança em ambientes industriais inflamáveis",
      "Automação de sistemas de combate a incêndio"
    ],
    exemplo: "Em um robô de competição apaga-fogo, o sensor de chama IR é utilizado para localizar a direção da vela acesa, guiando o robô até a chama para extingui-la automaticamente.",
    fabricantes: ["Módulos genéricos de sensor de chama IR (diversos fornecedores)"]
  },
  {
    id: "encoder-ky040",
    nome: "Encoder Incremental KY-040",
    categoria: "Encoder",
    icone: "🎛️",
    conceito: "Encoder rotativo incremental com botão de pressão integrado, utilizado para detectar a direção e a quantidade de rotação de um eixo.",
    principio: "Possui dois contatos internos (canais A e B) defasados entre si. Ao girar o eixo, esses contatos geram pulsos digitais em quadratura; a ordem em que os pulsos ocorrem indica o sentido de rotação (horário ou anti-horário), e a contagem de pulsos indica a quantidade de rotação.",
    especificacoes: [
      "Alimentação: 3,3V a 5V",
      "Saídas: CLK, DT (sinais em quadratura) e SW (botão de pressão)",
      "Resolução comum: 20 pulsos por volta",
      "Necessita tratamento de debounce por hardware ou software"
    ],
    tipoSinal: "Digital",
    aplicacoes: [
      "Controle de posição e velocidade de motores",
      "Interfaces de ajuste manual (volume, menus, parâmetros de máquinas)",
      "Painéis de controle de CNC e máquinas industriais",
      "Contadores de posição em sistemas de automação"
    ],
    exemplo: "Em um painel de controle de uma máquina CNC, o encoder KY-040 permite que o operador ajuste manualmente parâmetros como velocidade de avanço, girando o eixo para incrementar ou decrementar valores exibidos em um display.",
    fabricantes: ["Módulos genéricos KY-040 (diversos fornecedores de componentes eletrônicos)"]
  }
];

/* Lista de categorias únicas, geradas automaticamente a partir dos dados,
   usada para montar o filtro de categorias na página de sensores. */
const CATEGORIAS_SENSORES = [...new Set(SENSORES.map(s => s.categoria))].sort();
