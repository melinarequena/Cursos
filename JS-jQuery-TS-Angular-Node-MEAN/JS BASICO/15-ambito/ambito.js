'use strict'

function holaMundo (texto) {
    var hola_mundo = "Hola estoy dentro de la fn";
    console.log(texto);
    console.log(typeof(numero.toString())); //convierto a string
    console.log(hola_mundo);
}

var texto = "Hola soy una variabe global";
var numero = 12;

holaMundo(texto);

//console.log(hola_mundo); //variable dentro de la fn, no es global so error