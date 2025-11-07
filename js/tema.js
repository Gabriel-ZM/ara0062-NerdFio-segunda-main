// js/tema.js
(function(){
  const buttonElems = document.querySelectorAll("#theme-toggle");
  const current = localStorage.getItem("nerdfio-tema") || "light";
  function applyTema(tema){
    if(tema === "dark"){
      document.documentElement.setAttribute("data-theme", "dark");
      buttonElems.forEach(b => b.textContent = "☀️");
    } else {
      document.documentElement.removeAttribute("data-theme");
      buttonElems.forEach(b => b.textContent = "🌙");
    }
  }
  applyTema(current);
  function toggle(){
    const novo = (document.documentElement.getAttribute("data-theme") === "dark") ? "light" : "dark";
    localStorage.setItem("nerdfio-tema", novo);
    applyTema(novo);
  }
  buttonElems.forEach(b => {
    b.addEventListener("click", function(e){ e.preventDefault(); toggle(); });
  });
})();
