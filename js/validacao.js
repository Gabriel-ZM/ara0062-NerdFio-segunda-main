// js/validacao.js
document.addEventListener("DOMContentLoaded", function(){
  const form = document.getElementById("contact-form");
  if(!form) return;
  const email = document.getElementById("email");
  const cpf = document.getElementById("cpf");

  function showError(el, msg){
    let next = el.nextElementSibling;
    if(next && next.classList && next.classList.contains("input-error")) next.remove();
    const span = document.createElement("div");
    span.className = "input-error";
    span.style.color = "var(--cor-accento)";
    span.style.fontSize = "0.9rem";
    span.style.marginTop = "6px";
    span.textContent = msg;
    el.insertAdjacentElement('afterend', span);
  }
  function clearError(el){
    let next = el.nextElementSibling;
    if(next && next.classList && next.classList.contains("input-error")) next.remove();
  }

  form.addEventListener("submit", function(e){
    let ok = true;
    // exige pelo menos um ponto no local-part: joao.silva@dominio.tld
    const regexEmail = /^[a-z0-9]+(?:\.[a-z0-9]+)+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    clearError(email); clearError(cpf);

    if(!regexEmail.test(email.value.trim())){
      showError(email, "Formato de e-mail inválido. Use: joao.silva@net.com");
      ok = false;
    }
    if(!regexCPF.test(cpf.value.trim())){
      showError(cpf, "Formato de CPF inválido. Use: 999.999.999-99");
      ok = false;
    }
    if(!ok){
      e.preventDefault();
      const firstErr = document.querySelector(".input-error");
      if(firstErr) firstErr.previousElementSibling.focus();
    } else {
      // não enviamos a dados reais; apenas simula sucesso e limpa campos
      e.preventDefault();
      alert("Formulário válido (simulação). Campos serão limpos.");
      form.reset();
    }
  });
});
