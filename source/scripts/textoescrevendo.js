// Texto Escrevendo sozinho
const el = document.querySelector("#textoescrevendo");
const text =
  "Soluções para diversos tipos de burocracias com preciso conhecimento técnico, resultados satisfatórios e um ótimo custo benefício.";
const interval = 80;
function showText(el, text, interval) {
  const char = text.split("").reverse();

  const typer = setInterval(() => {
    if (!char.length) {
      return clearInterval(typer);
    }

    const next = char.pop();

    el.innerHTML += next;
  }, interval);
}

showText(el, text, interval);
