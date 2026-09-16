/* ================================================
   SENSORES.JS - RoboTech
   Página simplificada
   - Pesquisa em tempo real
   - Exibe apenas os 10 principais sensores
   - Modal com informações completas
================================================ */

document.addEventListener("DOMContentLoaded", () => {

  const grid = document.getElementById("sensores-grid");
  const busca = document.getElementById("busca-sensor");
  const contador = document.getElementById("contador-resultados");
  const modal = document.getElementById("modal-sensor");
  const modalBox = document.getElementById("modal-box");

  if (!grid) return;

  // Apenas os 10 primeiros sensores
  const sensores = SENSORES.slice(0, 10);

  let pesquisa = "";

  function renderizarSensores() {

      const lista = sensores.filter(sensor =>
          sensor.nome.toLowerCase().includes(pesquisa) ||
          sensor.categoria.toLowerCase().includes(pesquisa)
      );

      contador.textContent = `${lista.length} sensor(es) encontrado(s)`;

      if (lista.length === 0) {

          grid.innerHTML = `
              <p class="sem-resultados">
                  Nenhum sensor encontrado.
              </p>
          `;

          return;
      }

      grid.innerHTML = lista.map(sensor => `

          <article class="sensor-card" data-id="${sensor.id}">

              <div class="sensor-icon">
                  ${sensor.icone}
              </div>

              <span class="sensor-categoria">
                  ${sensor.categoria}
              </span>

              <h3>${sensor.nome}</h3>

              <p>${sensor.conceito}</p>

          </article>

      `).join("");

      document.querySelectorAll(".sensor-card").forEach(card => {

          card.addEventListener("click", () => {
              abrirModal(card.dataset.id);
          });

      });

  }

  function abrirModal(id) {

      const sensor = sensores.find(s => s.id === id);

      if (!sensor) return;

      modalBox.innerHTML = `

          <button class="modal-close" id="fechar-modal">
              &times;
          </button>

          <div class="modal-header">

              <div class="modal-icon">
                  ${sensor.icone}
              </div>

              <h2>${sensor.nome}</h2>

              <span class="modal-categoria">
                  ${sensor.categoria}
              </span>

          </div>

          <div class="modal-body">

              <h4>Conceito</h4>
              <p>${sensor.conceito}</p>

              <h4>Princípio de Funcionamento</h4>
              <p>${sensor.principio}</p>

              <h4>Especificações Técnicas</h4>

              <ul>
                  ${sensor.especificacoes.map(item => `<li>${item}</li>`).join("")}
              </ul>

              <h4>Tipo de Sinal</h4>

              <p>${sensor.tipoSinal}</p>

              <h4>Aplicações</h4>

              <ul>
                  ${sensor.aplicacoes.map(item => `<li>${item}</li>`).join("")}
              </ul>

              <h4>Exemplo de Utilização</h4>

              <p>${sensor.exemplo}</p>

              <h4>Fabricantes</h4>

              <ul>
                  ${sensor.fabricantes.map(item => `<li>${item}</li>`).join("")}
              </ul>

          </div>

      `;

      modal.classList.add("active");
      document.body.style.overflow = "hidden";

      document
          .getElementById("fechar-modal")
          .addEventListener("click", fecharModal);

  }

  function fecharModal() {

      modal.classList.remove("active");
      document.body.style.overflow = "";

  }

  modal.addEventListener("click", e => {

      if (e.target === modal) {
          fecharModal();
      }

  });

  document.addEventListener("keydown", e => {

      if (e.key === "Escape") {
          fecharModal();
      }

  });

  busca.addEventListener("input", () => {

      pesquisa = busca.value.toLowerCase().trim();

      renderizarSensores();

  });

  renderizarSensores();

});