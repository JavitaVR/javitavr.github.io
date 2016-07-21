//2016 07 20 wendnsday
//estoy en la uss
//funcion setup se ejecuta una vez al principio
//asi se escriben comentarios entre codigos con slash
//camelCase es escribir la primera palabra en min y la segunda en may
//variables
//para usar una variable hay que declararla 
var diametro;
//hay variables locales y globales
//las globales viven fuera de una funcion
//las locales dentro de una funcion donde fueron declaradas 
//solo despues de declararla se puede asignar un valor
//las funciones tb se declaran nombreFuncion();
diametro = 40;

function setup() {
  //createCanvas(dim, dimVer)
  //crea el lienzo
  createCanvas(400, 300);
  //background da el color
  background(200, 100, 0);
}
//funcion draw() se ejecuta despues de setup
//y se ejecuta 60 veces por segundo
function draw() {

  var anchoBorde = 10;

  //ellipse(posicion X, pos Y, width ancho, heigt altura);
  //ellipse dibuja una elipse
  //noFill();
  background(0, 255, 0);
  //definamos el tamaño del borde
  //strokeWeigh permite una cant de px
  //srtoke(red, gree, blue)
  
  estilo1();

  quad(mouseX, mouseY, diametro, diametro);
  
  estilo2();

  rect(30, 20, 55, 55, 20);

  diametro = diametro + 1;
}
//declaracion de funcion de estilo elipse
function estilo1() {

  strokeWeight(5);
  stroke(255, 0, 100);
  fill(255, 200, 0);
  
  
  //color del borde

  //fill() elige el color del relleno
  //fill(res, green, blue)

}

function estilo2() {

  strokeWeight(5);
  stroke(210, 0, 100);
  fill(255, 222, 0);
  
  curve(5, 26, 5, 26, 73, 24, 73, 61);
curve(5, 26, 73, 24, 73, 61, 15, 65);
fill(255);
ellipseMode(CENTER);
steps = 10;
for (i = 0; i <= steps; i++) {
  t = i / steps;
  x = curvePoint(5, 5, 73, 73, t);
  y = curvePoint(26, 26, 24, 61, t);
  ellipse(x, y, 5, 5);
  x = curvePoint(5, 73, 73, 15, t);
  y = curvePoint(26, 24, 61, 65, t);
  ellipse(x, y, 5, 5);
}
  //color del borde
  //fill() elige el color del relleno
  //fill(res, green, blue)

}
