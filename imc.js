function IMC(peso, altura){

    altura = altura / 100;
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function resultImc(imc) {
    var mensagem;

    if (imc < 18.5) {
        mensagem = "Você está abaixo do peso.";
    } else if (imc < 25) {
        mensagem = "Você está com peso normal.";
    } else if (imc < 30) {
        mensagem = "Você está com sobrepeso.";
    } else {
        mensagem = "Você está obeso.";
    }
    console.log(mensagem);
}

var peso = 90;
var altura = 190;

var imc = IMC(peso, altura);
resultImc(imc);
