'use strict'

var num = 44;
var texto1 = "Buenvenido";
var texto2 = "malisimo este curso";

//transoformar tdd
num.toString();

var dato = num.toString();

console.log(typeof dato);

//transofrmar string

dato = texto1.toLocaleUpperCase();

console.log(dato);

//calcular longitud

var nombre ="melina";
console.log(nombre.length);

var array = [1,2,3,4,5];

console.log(array.length);

//concatenar textos

var textoUnido = texto1 + texto2 + dato;

console.log(textoUnido);

//concatenar pt 2

var textoConcatenado = texto1.concat(nombre);

console.log(textoConcatenado);

//ubicar palabra

var donde = texto2.indexOf("este");
console.log(donde);