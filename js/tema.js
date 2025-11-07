// js/tema.js
const temaAtual = localStorage.getItem("tema") || "claro";
document.documentElement.setAttribute("data-theme", temaAtual);

function toggleTema(){
    const novoTema = (temaAtual === "claro") ? "escuro" : "claro";
    localStorage.setItem("tema", novoTema);
    location.reload()
}
