/* ================================================
   ARDUINO.JS - RoboTech
   Controla a navegação por abas entre os exemplos de
   programação e a funcionalidade de copiar o código.
   ================================================ */

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab-btn");
  const exemplos = document.querySelectorAll(".exemplo-codigo");
  const botoesCopiar = document.querySelectorAll(".btn-copiar");

  // Alterna entre os exemplos de código ao clicar nas abas
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) { t.classList.remove("active"); });
      exemplos.forEach(function (ex) { ex.classList.remove("active"); });

      tab.classList.add("active");
      document.getElementById(tab.dataset.alvo).classList.add("active");
    });
  });

  // Copia o código-fonte do exemplo exibido para a área de transferência
  botoesCopiar.forEach(function (botao) {
    botao.addEventListener("click", function () {
      const codigo = botao.closest(".code-wrapper").querySelector("pre").innerText;
      navigator.clipboard.writeText(codigo).then(function () {
        const textoOriginal = botao.textContent;
        botao.textContent = "✅ Copiado!";
        botao.classList.add("copiado");
        setTimeout(function () {
          botao.textContent = textoOriginal;
          botao.classList.remove("copiado");
        }, 2000);
      });
    });
  });
});
