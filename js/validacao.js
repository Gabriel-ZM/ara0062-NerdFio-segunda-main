// js/validacao.js
const email = document.getElementById("email");
const cpf = document.getElementById("cpf");
const form = document.querySelector("form");

form.addEventListener("submit", function(e){
    const regexEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    if(!regexEmail.test(email.value)){
        alert("Email inválido. Ex: joao.silva@net.com");
        e.preventDefault();
        return;
    }

    if(!regexCPF.test(cpf.value)){
        alert("CPF inválido. Ex: 999.999.999-99");
        e.preventDefault();
        return;
    }
});
