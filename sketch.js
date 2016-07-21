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
  background(0, 255, 0);
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

  ellipse(mouseX, mouseY, diametro, diametro);
  
  ellipse(100, 100, 30, 30);
  
 diametro = diametro + 1;
}
//declaracion de funcion de estilo elipse
function estilo1(){

strokeWeight(10);
  
  //color del borde
  stroke(220, 0 , 100);
  //fill() elige el color del relleno
  //fill(res, green, blue)
  fill(255, 200, 0);
  }
  
  function estilo2(){

strokeWeight(5);
  
  //color del borde
  stroke(210, 0 , 100);
  
  //fill() elige el color del relleno
  //fill(res, green, blue)
  fill(255, 222, 0);
  }
