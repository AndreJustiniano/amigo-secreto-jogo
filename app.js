

let listaDeAmigos = [];

function adicionarAmigo() {
    let inputNome = document.getElementById("amigo");
    let nome = inputNome.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido!");
        return;
    }

    listaDeAmigos.push(nome);
    inputNome.value = "";
    atualizarLista();
}

function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    listaDeAmigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    let nomeSorteado = listaDeAmigos[indiceSorteado];
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${nomeSorteado}</strong></li>`;
}
