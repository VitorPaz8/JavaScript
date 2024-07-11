/*esse codigo faz um jogo de adivinhação onde o usuario possui 3 tentativas 
de acertar o numero e também define de 0 até qual numero o sorteio vai*/

function mostre(frase){
    document.write(frase + "<br>");
}
function sorteia(sorteioMax){
    var y = Math.floor(Math.random() * (sorteioMax + 1))
    return y;
}

while (true) {

    var sorteioMax = prompt("Até qual número você deseja sortear?");
    
    // Se o usuário cancelar o prompt
    if (sorteioMax === null){
        mostre("Operação cancelada.");
        break;
    }

    sorteioMax = parseInt(sorteioMax);

    if (isNaN(sorteioMax)){
        alert("Por favor, insira apenas números.");
    } else {
        break;  // Sai do loop se o valor for válido
    }
}
    
var numero = sorteia(sorteioMax);
var tentativas = 3;

for(var i = 1; i<=3; i++){

    var chute = prompt("Ok, você tem " + tentativas + " tentativas. Qual numero você acha que é?");
    chute = parseInt(chute)
    
    if(chute == numero){
        
        mostre("Uau, você acertou de " + i +"°, Parabens!!!");    
        break;

    } else if(isNaN(chute)){
        tentativas--;
        alert("Você acabou de perder uma tentetiva, apenas numeros serão validos!!");            
    
    } else if(sorteioMax < chute){
        tentativas--;
        alert("O numero não esta no sorteio")

    } else if(chute != numero){
        tentativas--;
        if(chute > numero){
            alert("Vovê errou! Seu chute foi maior que o numero pensado.");
        } else{
            alert("Você errou! Seu chute foi menor que o numero pensado.");
        }
    }
}
if(chute != numero){
    mostre("Acabaram as tentativas, infelizmente você perdeu.");
    mostre("O numero pensado era o " + numero)
}