function Mudarestado(el) {
    const elemento = document.getElementById(el);
    if (!elemento) return;

    const estilo = window.getComputedStyle(elemento);
    if (estilo.display === "none") {
      elemento.style.display = "block";
    } else {
      elemento.style.display = "none";
    }
  }

  function mostrarSentimento() {
  const container = document.getElementById("sentimentoToggle");

  container.innerHTML = `
    <div id="minhaDiv">
      Ó minha musa, venho aqui expressar os meus sentimentos.<br>
      Ocasionalmente me pego distraído em todos os momentos.<br>
      Ao lhe ver meus sentimentos florescem.<br>
      E por um minuto de todos os meus problemas esquecem.<br><br>

      Eu pensei que esses sentimentos já estivessem extintos.<br>
      Mas eu lhe vi e descobri que sentimentos podem ressuscitar.<br>
      Sempre tive meus erros, mas lutei pra melhorar.<br>
      E como uma força do divino, você veio me tirar do labirinto.<br><br>

      Estive em uma época sem rumo e perdido.<br>
      Porém, coisa mais irônica que o destino não há.<br>
      Pois me encontro no seu sorriso e descanso em seu olhar.<br><br>

      Tu és tão magnífica que me fez proclamar ao coração.<br>
      Ah coração, esquece esse medo de amar.<br>
      Pois percebi que com você estou disposto a me entregar.<br>
    </div>
  `;
}
