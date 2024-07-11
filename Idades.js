<script>
    function mostrarTela(frase){
        document.write(frase + "<br>");
    }
    
    //pedindo para o usuario uma entrada e tornando-a minuscula
    var duvida = prompt("Gostaria de calcular idades hoje? (Sim/Não)");
    duvida = duvida.toLowerCase();
    
    if (duvida === "sim" || duvida === "ss") {
        var idade1 = prompt("Digite a sua idade");
        var idade2 = prompt("Digite a idade da segunda pessoa");
        var idade3 = prompt("Digite a idade da terceira pessoa");
    
        idade1 = parseInt(idade1);
        idade2 = parseInt(idade2);
        idade3 = parseInt(idade3);
    
        mostrarTela("Sua idade é: " + idade1);
    
        var somaIdades = idade1 + idade2 + idade3;
        
        mostrarTela("A soma das idades é: " + somaIdades);
        mostrarTela("A média das idades é: " + (somaIdades / 3));
        
    } else {
        alert("fim do programa")
        }
</script>
