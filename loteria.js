var numeroUsuario = [];
var numeroSortiado = [];

//sorteando numeros
function sorteaNumero(){

    numeroSortiado = [];

    for(var i = 0; i < 6; i++){
        var numero = (Math.floor(Math.random() * 60) + 1);
        numeroSortiado.push(numero)
        
        // ver se pussui numeros sorteados iguais
        for(var j = 0; j < i; j++){
            if(numeroSortiado[i] == numeroSortiado[j]){
                numeroSortiado[i] = 0;
                i--;
            }
        }
    }
    console.log(numeroSortiado);
};

function adicionarNumero() {
    
    numeroUsuario = []
    
    for(var i = 0; i < 6; i++){

        var numero = 0, vezes = i + 1;

        numero = parseInt(prompt("Insira o " + vezes + "° numero!"));

        // Checando se o numero pode ser adicionado
        for (var j = 0; j < 6; j++) {
            if (isNaN(numero) || numero > 60 || numero < 1) {
                alert("Por favor, insira um número inteiro de 1 a 60.");
                i--;
                break;
            } else if(numero == numeroUsuario[j]) {
                alert("Número já escolhido!");
                i--;
                break;
            }
            numeroUsuario[j] = numero;
        }
    }
};


function comparaNumeros(){
    var acertos = 0;

    for(var i = 0; i < 6; i++){
        for(var j = 0; j < 6; j++){ 
            if(numeroSortiado[i] == numeroUsuario[j]){
                acertos++;
            }
        }
    }
    if(acertos == 0){
        alert("Você não acertou nenhum numero!");
    }else{
        alert("Parabêns! Você acertou " + acertos + " vezes!");
    }
};

var botao = document.getElementById("verificar");
botao.onclick = adicionarNumero;

sorteaNumero();

var botao3 = document.getElementById("comparar")
botao3.onclick = comparaNumeros;