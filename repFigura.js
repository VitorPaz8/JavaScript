function quadrado(x,y,color){

    var tela = document.getElementById("tela");
    var c = tela.getContext("2d");
    
    c.fillStyle = color;
    c.fillRect(x, y, 50, 50);
    
    c.strokeStyle = "black";
    c.strokeRect(x, y, 50, 50);

};
function circulo(x,y,color){
    
    var tela = document.getElementById("tela");
    var c = tela.getContext("2d");
    
    c.fillStyle = color;
    c.beginPath();
    c.arc(x, y, 25, 0, 2 * 3.14)
    c.fill();
};

var quadradoColor = prompt("Digite a cor do primeiro quadrado! (em inglês)");
var quadrado2Color = prompt("Digite a cor do segundo quadrado! (em inglês)");
var circColor = prompt("Digite a cor do circulo! (em inglês)");

quadradoColor = quadradoColor.toLocaleLowerCase();
quadrado2Color = quadrado2Color.toLocaleLowerCase();
circColor = circColor.toLocaleLowerCase();

for(var x = 0; x < 600; x = x + 50) {
    for(var y = 0; y < 300; y = y+100){
        quadrado(x, y, quadradoColor);
        quadrado(x, y + 50, quadrado2Color);
        if(x < 300 && y < 400){
            circulo(x, y, circColor);
        }
    }
}