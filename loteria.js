var segredos = [16, 34, 37, 42, 50, 58];
var caixaDoNumero = document.getElementById("numero");

function botaoClicado() {
    for(var i = 0; i<3; i++){
        j = i + 1;

        if(segredos[i] == caixaDoNumero.value) {
            alert("Parabéns! Você acertou o " + j + "° número secreto");
            return;
        }
        }
        alert("Infelizmente você errou!");
        caixaDoNumero.value = "";
};

var botaoAdivinhar = document.getElementById("adivinhar");
botaoAdivinhar.onclick = botaoClicado;