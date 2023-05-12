var bruna = window.document.getElementById("bruna")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var setadir = window.document.getElementById("setadir")
var setaesq = window.document.getElementById("setaesq")

function RolarParaDireita() {
    bruna.style = "display: none"
    samantha.style = "display: inline-flex; margin-left: 30px;"
    leonardo.style = "margin-left: 0px"
    setadir.style = "opacity: 0"
    setaesq.style = "opacity: 1"
}

function RolarParaEsquerda() {
    bruna.style = "display: inline-flex"
    samantha.style = "display: none"
    leonardo.style = "margin-left: 30px"
    setaesq.style = "opacity: 0"
    setadir.style = "opacity: 1"
}