const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

function get(nome) {
    return urlParams.get(nome)
}

function set(nome, string) {
    document.getElementById(nome+"Display").innerHTML = string
}

function mostrarDados() {
    set("nomeCompleto", "Nome Completo: " + get("nome") + " " + get("sobrenome"))
    
    set("email", "Email: " + get("email"))
}