// js/carrega_dados.js
document.addEventListener("DOMContentLoaded", function(){
  const tbody = document.querySelector("table tbody");
  if(!tbody) return;
  fetch("./dados.json")
    .then(resp => {
      if(!resp.ok) throw new Error("Falha ao carregar dados.json");
      return resp.json();
    })
    .then(dados => {
      tbody.innerHTML = "";
      dados.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td><img src="${item.img}" alt="${item.produto}"></td>
          <td>${item.produto}</td>
          <td>${item.desc}</td>
          <td>${item.tam}</td>
          <td>${item.preco}</td>
          <td>${item.estoque}${item.estoque <= 5 ? ' <span class="badge">Edição limitada</span>' : ''}</td>
        `;
        tbody.appendChild(tr);
      });
    })
    .catch(err => {
      console.error(err);
      tbody.innerHTML = '<tr><td colspan="6">Erro ao carregar produtos.</td></tr>';
    });
});
