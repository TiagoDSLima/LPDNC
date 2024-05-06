var Leonardo = document.getElementById('Leonardo');
var Samantha = document.getElementById('Samantha');
var Bruna = document.getElementById('Bruna');
var setaDireita = document.getElementById('setadireita');
var setaEsquerda = document.getElementById('setaesquerda');


function rolarParaDireita(){
    Leonardo.style = "display: none";
    Bruna.style = "display: flex";
    setaDireita.style = "display: none";
    setaEsquerda.style = "display: flex; margin-top: 65px";
}
function rolarParaEsquerda(){
    Leonardo.style = "display: flex";
    Bruna.style = "display: none";
    setaEsquerda.style = "display: none";
    setaDireita.style = "display: flex";
}