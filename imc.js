// Função para calcular o IMC
function IMC(peso, altura) {

    altura = altura / 100;

    // Fórmula do IMC
    let imc = peso / (altura * altura);

    // Arredondando o IMC para duas casas decimais
    return imc.toFixed(2);
}

function resultImc(imc) {
    let mensagem;

    // Classificação do IMC
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

// Exemplo de uso:
let peso = 90;
let altura = 190;

let imc = IMC(peso, altura);
resultImc(imc);