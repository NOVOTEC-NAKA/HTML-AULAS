const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

function pegarDado(nome) {
    return urlParams.get(nome)
}

function mostrarDados() {
    document.getElementById("nomeDisplay").innerHTML = "Nome: " + pegarDado("nome")
}