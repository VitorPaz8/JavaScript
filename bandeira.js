/*Algoritmo feito para mostrar a bandeira do Brasil no canvas(HTML)*/

var tela = document.getElementById("tela");
var c = tela.getContext("2d");

c.fillStyle="green";
c.fillRect(0, 0, 600, 400);

c.fillStyle="yellow";
c.beginPath();
c.moveTo(300, 20);
c.lineTo(30, 200);
c.lineTo(300, 380);
c.lineTo(570, 200);
c.fill();


c.fillStyle="blue";
c.beginPath();
c.arc(300, 200, 110, 0, 6.28);
c.fill();

c.fillStyle="white";
c.fillRect(190, 185, 220, 30);