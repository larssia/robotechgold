/* QUIZ ROBOTECH - 10 questões estilo SAEP/ENEM, sem cronômetro */
const IMG = "../assets/img/quiz/";
const COD = {
  1: `void setup() {
  pinMode(13, OUTPUT);
}

void loop() {
  digitalWrite(13, HIGH);
  delay(1000);
  digitalWrite(13, LOW);
  delay(1000);
}`,
  2: `void setup() {
  Serial.begin(9600);
}

void loop() {
  int valor = analogRead(A0);
  Serial.println(valor);
  delay(500);
}`,
  3: `int botao = 7;
int led = 13;

void setup() {
  pinMode(botao, INPUT);
  pinMode(led, OUTPUT);
}

void loop() {
  if (digitalRead(botao) == HIGH) {
    digitalWrite(led, HIGH);
  } else {
    digitalWrite(led, LOW);
  }
}`
};

/* correta = índice (0 = A) na ordem original da questão */
const QUESTOES = [
  { tema: "Robô UR3e", correta: 0,
    ctx: "Em uma indústria, um robô colaborativo UR3e é utilizado para realizar tarefas de montagem e manipulação de pequenos componentes. Por possuir estrutura articulada e capacidade de trabalhar próximo aos operadores em determinadas aplicações, o equipamento pode ser programado para executar movimentos precisos e repetitivos.",
    p: "Considerando as características do UR3e, sua utilização nesse cenário está relacionada principalmente à",
    op: ["realização de tarefas automatizadas com movimentos precisos e programáveis.",
         "geração de energia elétrica para os demais equipamentos da indústria.",
         "substituição dos sensores responsáveis pela coleta de informações do ambiente.",
         "execução exclusiva de tarefas que exigem movimentação de cargas muito pesadas."],
    ex: "O UR3e é um cobot compacto e articulado, feito para tarefas leves de montagem, com programação flexível e movimentos repetitivos e precisos." },
  { tema: "Sensores", correta: 0,
    ctx: "Um robô móvel precisa identificar obstáculos durante seu deslocamento em um ambiente interno. Para isso, foi instalado um sensor que emite ondas e utiliza o tempo necessário para que elas retornem após atingir um objeto.",
    p: "O sensor descrito é utilizado principalmente para",
    op: ["medir a distância até um obstáculo.",
         "controlar a tensão de alimentação do robô.",
         "medir diretamente a corrente do motor.",
         "armazenar os dados coletados pelo robô."],
    ex: "É o princípio do sensor ultrassônico: distância = (tempo do eco × velocidade do som) / 2." },
  { tema: "Sensores", correta: 0,
    ctx: "Em um sistema automatizado de iluminação, um sensor LDR é utilizado para identificar se o ambiente está claro ou escuro. Durante o dia, a iluminação artificial permanece desligada. À noite, quando a luminosidade diminui, as lâmpadas são acionadas automaticamente.",
    p: "Nesse sistema, o LDR tem a função de",
    op: ["detectar variações de luminosidade do ambiente.",
         "aumentar a tensão fornecida às lâmpadas.",
         "controlar diretamente a velocidade das lâmpadas.",
         "armazenar a programação utilizada pelo Arduino."],
    ex: "O LDR é um resistor que muda a resistência conforme a luz recebida. Ele só informa a luminosidade; quem decide é o controlador." },
  { tema: "Multímetro", correta: 0, img: "multimetro.svg", alt: "Multímetro digital com o seletor na escala DCV 20",
    ctx: "Um estudante está realizando a manutenção de um circuito eletrônico e utiliza o multímetro apresentado na imagem.",
    p: "Considerando a configuração apresentada, o instrumento está sendo utilizado para",
    op: ["medir tensão contínua.",
         "medir resistência elétrica.",
         "medir corrente alternada.",
         "testar a continuidade de um cabo."],
    ex: "O seletor está na escala DCV (tensão contínua), com as pontas em VΩ e COM medindo a tensão entre 5 V e GND." },
  { tema: "Arduino", correta: 1,
    ctx: "O Arduino é bastante utilizado em projetos de automação porque permite conectar sensores e atuadores a um sistema programável. Em um projeto escolar, um aluno conecta um sensor de temperatura à placa e utiliza um programa para interpretar os valores recebidos.",
    p: "Nesse projeto, o Arduino atua principalmente como",
    op: ["fonte de energia exclusiva para qualquer dispositivo eletrônico.",
         "controlador programável que processa entradas e controla saídas.",
         "sensor responsável por medir diretamente a temperatura.",
         "componente mecânico responsável pelos movimentos do sistema."],
    ex: "O Arduino lê as entradas (sensores), processa o programa e comanda as saídas (atuadores). Quem mede a temperatura é o sensor." },
  { tema: "Arduino", correta: 2,
    ctx: "Durante uma aula de programação, um estudante precisa configurar um LED conectado a uma porta digital do Arduino para que ele possa ser acionado pelo programa.",
    p: "A função normalmente utilizada para definir se uma porta será entrada ou saída é",
    op: ["digitalWrite()", "analogRead()", "pinMode()", "delay()"],
    ex: "pinMode(pino, INPUT ou OUTPUT) define o modo do pino. digitalWrite escreve HIGH/LOW, analogRead lê entradas analógicas e delay apenas espera." },
  { tema: "ESP32", correta: 0,
    ctx: "Um grupo está desenvolvendo um sistema de automação residencial. Além de controlar sensores e atuadores, os estudantes desejam que o dispositivo consiga enviar informações para um aplicativo por meio de uma rede Wi-Fi.",
    p: "Para esse tipo de aplicação, uma característica importante de placas da família ESP, como o ESP32, é",
    op: ["possuir conectividade sem fio integrada em modelos como o ESP32.",
         "funcionar exclusivamente sem qualquer tipo de comunicação.",
         "ser utilizada somente para medir tensão elétrica.",
         "substituir mecanicamente motores e servomotores."],
    ex: "O ESP32 já traz Wi-Fi e Bluetooth integrados, o que o torna ideal para IoT e automação residencial." },
  { tema: "Código", correta: 2, cod: 1,
    ctx: "Observe o código abaixo. Um estudante executa esse programa em um Arduino com um LED conectado à porta 13.",
    p: "Considerando o funcionamento do código, o LED",
    op: ["permanece sempre desligado.",
         "permanece sempre ligado.",
         "acende e apaga em intervalos de aproximadamente um segundo.",
         "acende somente quando um sensor conectado ao Arduino é ativado."],
    ex: "O loop liga o LED, espera 1000 ms, desliga e espera mais 1000 ms, repetindo para sempre. Não há sensor no programa." },
  { tema: "Código", correta: 0, cod: 2,
    ctx: "Em um projeto de monitoramento, um sensor analógico está conectado à porta A0 de um Arduino. O programa utilizado é apresentado abaixo.",
    p: "A partir do funcionamento do programa, é correto afirmar que ele",
    op: ["envia para o Monitor Serial os valores lidos pelo sensor.",
         "transforma automaticamente o sensor em um atuador.",
         "aciona um LED sempre que o sensor apresentar qualquer valor.",
         "impede que o Arduino receba informações da porta A0."],
    ex: "analogRead(A0) lê o sensor e Serial.println() mostra o valor no Monitor Serial a cada 500 ms. Nenhum LED é usado." },
  { tema: "Código", correta: 1, cod: 3,
    ctx: "Um sistema de automação possui um botão conectado à porta digital 7 e um LED conectado à porta 13. O trecho de programa utilizado é apresentado abaixo. Ao analisá-lo, percebe-se que o LED é acionado quando determinada condição relacionada ao botão é satisfeita.",
    p: "Essa condição ocorre quando",
    op: ["a leitura do botão é LOW.",
         "a leitura do botão é HIGH.",
         "o valor do botão é igual a 13.",
         "o Arduino recebe um valor analógico pela porta A0."],
    ex: "O if testa digitalRead(botao) == HIGH. Nesse caso o LED (pino 13) recebe HIGH e acende; caso contrário, apaga." }
];

const LETRAS = ["A", "B", "C", "D"];
const app = document.getElementById("quiz-app");
let est, ordem;

const ler = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
const salvar = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function embaralhar(a) {
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

function inicio() {
  const rec = ler("robotech_quiz_pontos");
  app.innerHTML = `<div class="q-start">
    <div class="q-logo">🧠</div>
    <h2>Pronto para o desafio?</h2>
    <p>${QUESTOES.length} questões sobre robótica, sensores, multímetro, Arduino, ESP32 e programação. Sem cronômetro: cada acerto vale 100 pontos e acertos seguidos rendem bônus de sequência 🔥 (até +100 por questão).</p>
    <button class="q-btn" id="q-go">Começar quiz</button>
    ${rec !== null ? `<div class="q-record">🏆 Recorde: <strong>${rec}</strong> pontos</div>` : ""}</div>`;
  document.getElementById("q-go").onclick = () => { est = { i: 0, acertos: 0, pts: 0, seq: 0, hist: [] }; pergunta(); };
}

function pergunta() {
  const q = QUESTOES[est.i];
  ordem = embaralhar(q.op.map((_, k) => k));
  est.resp = false;
  app.innerHTML = `<div class="q-top"><span>Questão <b>${est.i + 1}</b> de ${QUESTOES.length} • ${q.tema}</span>
      <span class="q-score">${est.seq >= 2 ? "🔥" + est.seq + " " : ""}⭐ <b>${est.pts}</b> pts</span></div>
    <div class="q-bar"><div id="q-fill" style="width:${(est.i / QUESTOES.length) * 100}%"></div></div>
    <div class="q-ctx"><small>CONTEXTO</small><p>${q.ctx}</p></div>
    ${q.cod ? `<pre class="q-code"><code>${esc(COD[q.cod])}</code></pre>` : ""}
    ${q.img ? `<img class="q-img" src="${IMG + q.img}" alt="${esc(q.alt)}">` : ""}
    <h3 class="q-enun">${q.p}</h3>
    <div class="q-opts">${ordem.map((k, pos) => `<button class="q-opt" data-k="${k}"><span class="q-letra">${LETRAS[pos]}</span><span>${q.op[k]}</span></button>`).join("")}</div>
    <div id="q-fb"></div>`;
  app.querySelectorAll(".q-opt").forEach(b => b.onclick = () => responder(+b.dataset.k));
}

function responder(k) {
  if (est.resp) return;
  est.resp = true;
  const q = QUESTOES[est.i], ok = k === q.correta;
  let ganho = 0;
  if (ok) { est.acertos++; est.seq++; ganho = 100 + Math.min((est.seq - 1) * 25, 100); }
  else est.seq = 0;
  est.pts += ganho;
  est.hist.push(ok);
  app.querySelectorAll(".q-opt").forEach(b => {
    b.disabled = true;
    const v = +b.dataset.k;
    if (v === q.correta) b.classList.add("certa");
    else if (v === k) b.classList.add("errada");
    else b.classList.add("apagada");
  });
  const ultima = est.i === QUESTOES.length - 1;
  const fb = document.getElementById("q-fb");
  fb.innerHTML = `<div class="q-fb ${ok ? "ok" : "no"}"><strong>${ok ? "✅ Resposta correta! +" + ganho + " pontos" + (est.seq >= 2 ? " (sequência 🔥" + est.seq + ")" : "") : "❌ Não foi dessa vez. Sequência zerada."}</strong>
    <p>${q.ex}</p><button class="q-btn" id="q-next">${ultima ? "Ver resultado" : "Próxima questão →"}</button></div>`;
  document.getElementById("q-next").onclick = () => { est.i++; ultima ? fim() : pergunta(); };
  fb.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function fim() {
  const n = QUESTOES.length, a = est.acertos;
  const rec = +(ler("robotech_quiz_pontos") ?? -1), novo = est.pts > rec;
  if (novo) salvar("robotech_quiz_pontos", est.pts);
  const [emoji, msg] = a === n ? ["🏆", "Perfeito! Você domina o assunto."] : a >= 7 ? ["🎉", "Muito bem! Falta pouco para a nota máxima."] : a >= 5 ? ["👍", "Bom começo! Revise os conteúdos e tente de novo."] : ["📚", "Vale estudar mais as páginas do site e tentar novamente."];
  app.innerHTML = `<div class="q-end"><div class="q-logo">${emoji}</div>
    <h2>${msg}</h2>
    <div class="q-final"><b>${est.pts}</b> pontos</div><p class="q-acertos">${a} de ${n} acertos</p>
    <div class="q-review">${est.hist.map((ok, i) => `<span class="${ok ? "ok" : "no"}">${i + 1}</span>`).join("")}</div>
    ${novo ? `<div class="q-record q-novo">🎯 Novo recorde!</div>` : `<div class="q-record">🏆 Recorde: <strong>${rec}</strong> pontos</div>`}
    <button class="q-btn" id="q-again">Jogar novamente</button></div>`;
  document.getElementById("q-again").onclick = () => { pararConfete(); inicio(); };
  if (a >= 5) confete(a === n || novo ? 220 : 110);
}

/* Confete em canvas, sem bibliotecas */
let cvs, anim;
function pararConfete() { cancelAnimationFrame(anim); if (cvs) { cvs.remove(); cvs = null; } }
function confete(qtd) {
  pararConfete();
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  cvs = document.createElement("canvas");
  cvs.className = "q-confete";
  document.body.appendChild(cvs);
  const ctx = cvs.getContext("2d"), cores = ["#6366f1", "#ec4899", "#14b8a6", "#fbbf24", "#22c55e"];
  const W = cvs.width = innerWidth, H = cvs.height = innerHeight;
  const ps = Array.from({ length: qtd }, (_, i) => ({
    x: Math.random() * W, y: -20 - Math.random() * H * 0.6, w: 6 + Math.random() * 6, h: 10 + Math.random() * 8,
    vx: -1.5 + Math.random() * 3, vy: 2 + Math.random() * 3.5, rot: Math.random() * 6, vr: -0.2 + Math.random() * 0.4,
    c: cores[i % cores.length] }));
  const t0 = Date.now();
  (function quadro() {
    ctx.clearRect(0, 0, W, H);
    ps.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.rot += p.vr;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
      ctx.fillStyle = p.c; ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); ctx.restore();
    });
    if (Date.now() - t0 < 6000 && ps.some(p => p.y < H + 20)) anim = requestAnimationFrame(quadro);
    else pararConfete();
  })();
}

inicio();
