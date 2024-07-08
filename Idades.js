var pulaLinha = function(){
    document.write("<br><hr>");
    console.log("esta mensagem aparece apenas no log");
}

var mostra = function(frase){
    document.write("<h1>"+ frase +"</h1");
    pulaLinha();
}

var duvida = prompt("Gostaria de calcular idades hoje? (Sim/Não)");

duvida = duvida.toLowerCase();

if (duvida === "sim" || duvida === "ss") {
    var idade1 = prompt("Digite a sua idade");
    var idade2 = prompt("Digite a idade da segunda pessoa");
    var idade3 = prompt("Digite a idade da terceira pessoa");

    idade1 = parseInt(idade1);
    idade2 = parseInt(idade2);
    idade3 = parseInt(idade3);

    mostra("Sua idade é: " + idade1);

    var somaIdades = idade1 + idade2 + idade3;
    
    mostra("A soma das idades é: " + somaIdades);
    mostra("A média das idades é: " + (somaIdades / 3));
} else {
    alert("fim do programa")
    mostra("Desculpe, estamos programados apenas para calcular idades.");
    mostra("Fique à vontade para voltar quando quiser, quem sabe até lá já não atualizamos essa funcionalidade.");
}