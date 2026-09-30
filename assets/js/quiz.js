/* QUIZ ROBOTECH - estilo Kahoot: cronômetro, pontos por velocidade, sequência (streak) e recorde */
const IMG = "../assets/img/quiz/";
const QUESTOES = [
  { tema: "Robô", tempo: 40, correta: 1,
    ctx: "Uma indústria de cosméticos precisa posicionar, em caixas, frascos plásticos de 30 g que passam sem parar em uma esteira. A tarefa exige altíssima velocidade (mais de 100 ciclos por minuto), boa precisão e carga muito baixa.",
    p: "Qual modelo de robô industrial é o mais indicado para essa aplicação?",
    op: ["Robô Cartesiano, de três eixos lineares, indicado para grandes cursos e cargas pesadas.",
         "Robô Delta, de estrutura paralela e leve, indicado para pick and place em alta velocidade.",
         "Robô Cilíndrico, de base giratória e braço linear, indicado para peças grandes e lentas.",
         "Robô Articulado, de seis eixos rotativos, indicado para soldagem de carrocerias pesadas."],
    ex: "O Delta tem braços paralelos leves e o motor fixo na base, o que permite altíssima aceleração com cargas baixas." },
  { tema: "Sensores", tempo: 40, correta: 0,
    ctx: "Em uma linha de usinagem, peças de aço passam por uma esteira coberta de óleo de corte e cavaco. Cada peça deve ser detectada a cerca de 4 mm do sensor, sem contato físico.",
    p: "Qual sensor é o mais adequado para detectar as peças nesse ambiente?",
    op: ["Indutivo, que detecta metais por campo eletromagnético e não é afetado por óleo ou sujeira.",
         "Fotoelétrico por reflexão, cujo feixe de luz é prejudicado pelo óleo e pelo cavaco.",
         "Termistor NTC, que mede a temperatura da peça e não a presença dela na esteira.",
         "LDR, que responde apenas às variações de luminosidade do ambiente ao redor."],
    ex: "O sensor indutivo só detecta metais, não tem contato e ignora óleo e poeira, ideal para chão de fábrica." },
  { tema: "Sensores", tempo: 40, correta: 2,
    ctx: "Um forno de tratamento térmico opera a cerca de 400 °C. Um projeto com Arduino precisa monitorar a temperatura interna do forno.",
    p: "Qual sensor atende a essa faixa de temperatura?",
    op: ["DHT11, que mede de 0 a 50 °C e serve para ambientes climatizados.",
         "LM35, que mede até cerca de 150 °C com saída linear de 10 mV/°C.",
         "Termopar tipo K com módulo amplificador, que mede temperaturas acima de 1000 °C.",
         "NTC 10 kΩ comum, limitado a cerca de 125 °C pelo encapsulamento."],
    ex: "Só o termopar tipo K (com módulo como o MAX6675) alcança centenas de graus. Os demais ficam abaixo de 150 °C." },
  { tema: "Multímetro", tempo: 60, correta: 3, img: "multimetro.svg", alt: "Multímetro em DCV 20 marcando 4,97 V entre 5V e GND",
    ctx: "Um técnico confere a alimentação de um Arduino Uno ligado ao USB. Ele gira a chave para DCV 20, liga a ponta preta em COM e a vermelha em VΩ e encosta as pontas nos pinos GND e 5V, obtendo a leitura da imagem.",
    p: "Com base na imagem, é correto concluir que:",
    op: ["a leitura é de 4,97 A, o que indica consumo de corrente elevado na placa.",
         "a escala DCV 20 é inadequada e a medição exigiria a posição ACV 750.",
         "a tensão está muito abaixo de 5 V, portanto a placa deve ser substituída.",
         "a tensão contínua de 4,97 V é coerente com os 5 V nominais, e a alimentação está normal."],
    ex: "A chave em DCV mede tensão contínua e 20 V comporta a leitura. 4,97 V está dentro da tolerância dos 5 V do USB." },
  { tema: "Arduino", tempo: 40, correta: 1,
    ctx: "Em um projeto de iluminação, um LED está ligado ao pino digital 9 do Arduino Uno (marcado com ~) e seu brilho é controlado por PWM com o comando analogWrite(9, 191).",
    p: "Sabendo que o valor máximo de analogWrite é 255, o LED ficará em nível alto:",
    op: ["50% do tempo, com brilho médio reduzido à metade.",
         "75% do tempo, com brilho médio de cerca de três quartos.",
         "25% do tempo, com brilho médio de cerca de um quarto.",
         "100% do tempo, com brilho máximo e contínuo."],
    ex: "Ciclo de trabalho = 191 ÷ 255 ≈ 0,75, ou seja, 75%." },
  { tema: "Arduino", tempo: 60, correta: 2,
    ctx: "Em um painel de sinalização com Arduino, um LED vermelho (queda de tensão de 2 V e corrente nominal de 20 mA) será alimentado pelo pino de 5 V por meio de um resistor em série.",
    p: "Pela Lei de Ohm, qual resistor limita a corrente do LED a 20 mA?",
    op: ["75 Ω", "100 Ω", "150 Ω", "250 Ω"],
    ex: "R = (5 V − 2 V) ÷ 0,02 A = 150 Ω. Usar 250 Ω seria esquecer a queda de tensão do LED." },
  { tema: "ESP32", tempo: 50, correta: 0,
    ctx: "Uma equipe monta um monitor de nível de reservatório com ESP32, que envia as leituras por Wi-Fi a um painel na nuvem. O sensor HC-SR04 é alimentado com 5 V e seu pino ECHO devolve sinal de 5 V, mas os GPIOs do ESP32 trabalham com lógica de 3,3 V.",
    p: "Qual medida protege o ESP32 nesse circuito?",
    op: ["Usar um divisor de tensão ou conversor de nível entre o ECHO e o GPIO.",
         "Ligar o ECHO ao pino EN, que funciona como entrada tolerante a 5 V.",
         "Ler o ECHO com analogRead, pois entradas analógicas suportam 5 V.",
         "Ligar o ECHO direto ao GPIO, pois todos os pinos do ESP32 toleram 5 V."],
    ex: "Os GPIOs do ESP32 não são tolerantes a 5 V. Um divisor resistivo ou conversor de nível reduz o sinal a 3,3 V." },
  { tema: "Código", tempo: 60, correta: 3, img: "codigo1.svg", alt: "Código presenca_luz.ino",
    ctx: "Um sistema de iluminação automática usa um sensor PIR (presença) e um LDR, conforme o código da imagem. O LDR está ligado de modo que valores menores indicam ambiente mais escuro.",
    p: "Qual situação faz o LED do pino 8 ficar aceso?",
    op: ["Sem presença detectada e leitura do LDR igual a 800.",
         "Sem presença detectada e leitura do LDR igual a 500.",
         "Sem presença detectada e leitura do LDR igual a 650.",
         "Presença detectada e leitura do LDR igual a 900, com ambiente claro."],
    ex: "O operador || exige apenas uma condição verdadeira. Com presença = true o LED acende, mesmo com luz alta. Nas demais, luz < 500 é falso." },
  { tema: "Código", tempo: 75, correta: 1, img: "codigo2.svg", alt: "Código estacionamento.ino",
    ctx: "O código da imagem simula um sensor de estacionamento: o potenciômetro em A0 ajusta a distância-limite (cm) e medirDistanciaCm() retorna a distância do obstáculo. O potenciômetro está na posição central (leitura 512) e o carro está a 20 cm.",
    p: "Considerando a divisão inteira do Arduino, como o LED do pino 8 se comporta?",
    op: ["Fica apagado, pois a distância de 20 cm ultrapassa a metade do limite calculado.",
         "Pisca a cada 100 ms, pois o limite é 27 cm e a distância está entre 13 cm e 27 cm.",
         "Fica aceso fixo, pois a distância de 20 cm é menor que o limite de 27 cm.",
         "Fica aceso fixo, pois o map retorna limite 50 e a metade desse valor é 25 cm."],
    ex: "map(512, 0, 1023, 5, 50) = 512·45/1023 + 5 = 22 + 5 = 27. Como 27/2 = 13, e 20 > 13 mas 20 ≤ 27, cai no else if e o LED pisca." },
  { tema: "Código", tempo: 60, correta: 2, img: "codigo3.svg", alt: "Código contador_pecas.ino",
    ctx: "Um aluno testa a contagem de peças de uma esteira com o código da imagem. Ao ser carregado na placa, o setup() é executado uma única vez e o loop() está vazio.",
    p: "Qual valor será exibido no Monitor Serial?",
    op: ["8", "10", "20", "30"],
    ex: "O laço soma 1·2 + 2·2 + 3·2 + 4·2 = 2 + 4 + 6 + 8 = 20. Como i <= 4 é inclusivo, o i = 5 não entra (isso daria 30)." }
];

const FORMAS = ["▲", "◆", "●", "■"], LETRAS = ["A", "B", "C", "D"];
const app = document.getElementById("quiz-app");
let est;

function salvar(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
function ler(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function inicio() {
  const rec = ler("robotech_quiz_recorde"), nome = ler("robotech_quiz_nome") || "";
  app.innerHTML = `<div class="q-start">
    <div class="q-logo">🧠</div><h2>Pronto para o desafio?</h2>
    <p>${QUESTOES.length} questões • quanto mais rápido você acertar, mais pontos ganha (até 1000) • acertos seguidos dão bônus de sequência 🔥</p>
    <input id="q-nome" maxlength="16" placeholder="Seu apelido" value="${esc(nome)}" autocomplete="off">
    <button class="q-btn" id="q-go">Jogar</button>
    ${rec ? `<div class="q-record">🏆 Recorde: <strong>${rec}</strong> pontos</div>` : ""}</div>`;
  document.getElementById("q-go").onclick = () => {
    const n = document.getElementById("q-nome").value.trim() || "Jogador";
    salvar("robotech_quiz_nome", n);
    est = { i: 0, pts: 0, seq: 0, acertos: 0, nome: n, hist: [] };
    pergunta();
  };
}

let timer;
function pergunta() {
  const q = QUESTOES[est.i];
  est.t0 = Date.now(); est.resp = false;
  app.innerHTML = `<div class="q-top"><span>Questão <b>${est.i + 1}</b>/${QUESTOES.length} • ${q.tema}</span>
      <span class="q-score">${est.seq >= 2 ? "🔥" + est.seq + " " : ""}⭐ <b id="q-pts">${est.pts}</b></span></div>
    <div class="q-bar"><div id="q-fill"></div></div>
    <div class="q-ctx"><small>CONTEXTO</small><p>${q.ctx}</p></div>
    ${q.img ? `<img class="q-img" src="${IMG + q.img}" alt="${esc(q.alt)}">` : ""}
    <h3 class="q-enun">${q.p}</h3>
    <div class="q-opts">${q.op.map((t, k) => `<button class="q-opt c${k}" data-k="${k}"><span class="q-forma">${FORMAS[k]}</span><span class="q-letra">${LETRAS[k]}</span><span>${t}</span></button>`).join("")}</div>
    <div id="q-fb"></div>`;
  app.querySelectorAll(".q-opt").forEach(b => b.onclick = () => responder(+b.dataset.k));
  const fill = document.getElementById("q-fill");
  clearInterval(timer);
  timer = setInterval(() => {
    const r = 1 - (Date.now() - est.t0) / (q.tempo * 1000);
    fill.style.width = Math.max(r, 0) * 100 + "%";
    fill.classList.toggle("low", r < 0.25);
    if (r <= 0) responder(-1);
  }, 100);
}

function responder(k) {
  if (est.resp) return;
  est.resp = true; clearInterval(timer);
  const q = QUESTOES[est.i], ok = k === q.correta;
  const frac = Math.min((Date.now() - est.t0) / (q.tempo * 1000), 1);
  let ganho = 0;
  if (ok) {
    est.seq++; est.acertos++;
    ganho = Math.round(1000 * (1 - frac / 2)) + Math.min((est.seq - 1) * 100, 500);
  } else est.seq = 0;
  est.pts += ganho;
  est.hist.push({ ok, ganho, k });
  app.querySelectorAll(".q-opt").forEach((b, n) => {
    b.disabled = true;
    b.classList.add(n === q.correta ? "certa" : n === k ? "errada" : "apagada");
  });
  document.getElementById("q-pts").textContent = est.pts;
  const ultima = est.i === QUESTOES.length - 1;
  const titulo = k === -1 ? "⏰ Tempo esgotado!" : ok ? `✅ Correto! +${ganho} pontos` : "❌ Não foi dessa vez";
  document.getElementById("q-fb").innerHTML = `<div class="q-fb ${ok ? "ok" : "no"}"><strong>${titulo}</strong>
    <p>Resposta: <b>${LETRAS[q.correta]}</b>. ${q.ex}</p>
    <button class="q-btn" id="q-next">${ultima ? "Ver resultado 🏁" : "Próxima ➜"}</button></div>`;
  const next = document.getElementById("q-next");
  next.onclick = () => { est.i++; ultima ? fim() : pergunta(); };
  next.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function fim() {
  const n = QUESTOES.length, pct = est.acertos / n;
  const nivel = pct >= 0.9 ? ["🏆", "Mestre da Robótica"] : pct >= 0.7 ? ["🥇", "Técnico Especialista"] : pct >= 0.5 ? ["🥈", "Aprendiz Avançado"] : ["🥉", "Continue praticando"];
  const rec = +(ler("robotech_quiz_recorde") || 0), novo = est.pts > rec;
  if (novo) salvar("robotech_quiz_recorde", est.pts);
  app.innerHTML = `<div class="q-end"><div class="q-logo">${nivel[0]}</div>
    <h2>${esc(est.nome)}, você é ${nivel[1]}!</h2>
    <div class="q-final"><b>${est.pts}</b> pontos</div>
    ${novo ? `<div class="q-record">🎉 Novo recorde!</div>` : `<div class="q-record">🏆 Recorde: ${rec}</div>`}
    <p>${est.acertos} de ${n} acertos (${Math.round(pct * 100)}%)</p>
    <div class="q-review">${est.hist.map((h, x) => `<span class="${h.ok ? "ok" : "no"}" title="Questão ${x + 1}">${x + 1}${h.ok ? "✓" : "✗"}</span>`).join("")}</div>
    <button class="q-btn" id="q-again">Jogar novamente</button></div>`;
  document.getElementById("q-again").onclick = inicio;
}

document.addEventListener("keydown", e => {
  if (!est || !app.querySelector(".q-opt")) return;
  const k = "abcd1234".indexOf(e.key.toLowerCase());
  if (k >= 0 && !est.resp) responder(k % 4);
  else if (e.key === "Enter" && est.resp) { const b = document.getElementById("q-next"); if (b) b.click(); }
});

inicio();
