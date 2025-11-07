fetch("dados.json")
.then(r=>r.json())
.then(dados=>{
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    dados.forEach(item=>{
        tbody.innerHTML += `
        <tr>
          <td><img src="${item.img}" alt="${item.produto}"></td>
          <td>${item.produto}</td>
          <td>${item.desc}</td>
          <td>${item.tam}</td>
          <td>${item.preco}</td>
          <td>${item.estoque}</td>
        </tr>`;
    })
})
