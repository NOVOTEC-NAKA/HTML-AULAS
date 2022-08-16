function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function rodarDado() {
    document.getElementById("dadoResul").innerHTML = randomNumber(1, 6)
}