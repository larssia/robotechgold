/* ================================================
   MAIN.JS - RoboTech
   Script compartilhado por todas as páginas do site:
   - Controle do menu hambúrguer (versão mobile)
   - Fecha o menu ao clicar em um link
   ================================================ */

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    // Alterna a exibição do menu ao clicar no ícone hambúrguer
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("show");
    });

    // Fecha o menu mobile automaticamente após o clique em um link
    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        hamburger.classList.remove("active");
        navMenu.classList.remove("show");
      });
    });
  }
});
