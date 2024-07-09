<script>

    //função para fazer e guardar matriz na memória
    var criaMatriz = function(linhas, colunas){
    var matriz = [];
    var contador = 0;

    for (var i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (var j = 0; j < colunas; j++) {
            matriz[i][j] = contador;
            contador += 2;
        }
    }
    return matriz;
    }

    //funcão para mostrar a matriz
    var mostrar = function(matriz) {
        for (var i = 0; i < matriz.length; i++) {
            var linha = "";
            for (var j = 0; j < matriz[i].length; j++) {
                linha += matriz[i][j] + "\t";
            }
            console.log(linha.trim());
        }
    }

    //variavel para guardar a matriz
    var minhaMatriz = criaMatriz(10, 10);

    //mostrando a matriz no prompt
    console.log("Matriz gerada:");
    mostrar(minhaMatriz);

</script>
