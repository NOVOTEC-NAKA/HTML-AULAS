const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

function pegarDado(nome) {
    return urlParams.get(nome)
}

function set(nome, alt) {
    document.getElementById(nome+"Display").innerHTML = alt+": " + pegarDado(nome)
}

function mostrarDados() {
    set("nome", "Nome")
    set("data", "Data de Nascimento")
    set("éVivo", "Pessoa Vivo")
   
    set("temBike", "Tem Bike")
    set("temCarro", "Tem Carro")
    set("taiwanExiste", "Taiwan é um País")
   
    set("pato", "Pato")
    set("num", "Número")
    set("data2", "Escolhe uma Data")
   
    set("cor", "Cor Code")
    set("email", "Email")
}