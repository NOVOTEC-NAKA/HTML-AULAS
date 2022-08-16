function mudar(imagemSrc="imagems/black.png", texto=" ") {
    document.getElementById("imagemDisplay").src = imagemSrc
    document.getElementById("personagem").innerHTML = texto
}

function levarWiki() {
    var personagem = document.getElementById("personagem").innerHTML
    if (personagem == " ") {
        return
    }
    window.open("https://jjba.fandom.com/pt-br/wiki/"+personagem.replace(" ", "_"))
}