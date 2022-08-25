function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function gerarNum() {
    var numGerado = randomNumber(0, 1000)

    if (numGerado < 10) {
        numGerado = "000"+numGerado
    }
    else if (numGerado < 100) {
        numGerado = "00"+numGerado
    }
    else if (numGerado < 1000) {
        numGerado = "0"+numGerado
    }
    
    document.getElementById("numResul").innerHTML = numGerado
}