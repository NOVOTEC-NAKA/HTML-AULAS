function mudar(imagemSrc, texto) {
    document.getElementById("imagemDisplay").src = imagemSrc;
    document.getElementById("personagem").innerHTML = texto;
}

function levarWiki() {
    var personagem = document.getElementById("personagem").innerHTML

    if (personagem == "Dio Brando") {
        window.open("https://jjba.fandom.com/pt-br/wiki/Dio_Brando")
    }

}