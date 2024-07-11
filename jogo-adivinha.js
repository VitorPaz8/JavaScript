    /*esse codigo faz um jogo de adivinhação*/

    function mostre(frase){
        document.write(frase + "<br>");
    }
    function sorteia(x){
        var y = Math.round(Math.random() * x);
        return y;
    }

    var x = prompt("O sorteio sera até qual numero?")
    
    if(isNaN(x)){
        mostre("Apenas numeros são validos!!")
    } else{
        
        var numero = sorteia(x)
        var chute = prompt("Já pensei. Qual você acha que é?");
    
        if(chute == numero) {

        mostre("Uau! Você acertou, pois eu pensei no " + numero);

        } else if(isNaN(chute)){
            
            mostre("Apenas numeros são validos!!")
        
        } else {
            
            if(chute > numero){
        
                mostre("Vovê errou! Seu chute foi maior que o numero pensado.")
                mostre("Que era " + numero)
        
            } else{
        
                mostre("Você errou! Seu chute foi menor que o numero pensado.");
                mostre("Que era " + numero)
        
            }
        }
    }