function criaMatriz(linhas, colunas) {
    let matriz = [];
    let contador = 0;

    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = contador;
            contador += 2;
        }
    }

    return matriz;
}

function mostrar(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        let linha = "";
        for (let j = 0; j < matriz[i].length; j++) {
            linha += matriz[i][j] + "\t";
        }
        console.log(linha.trim());
    }
}

let minhaMatriz = criaMatriz(10, 10);
console.log("Matriz gerada:");
mostrar(minhaMatriz);