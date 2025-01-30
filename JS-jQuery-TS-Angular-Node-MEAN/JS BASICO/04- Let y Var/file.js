//VARIABLES
'use strict'
var pais = "japon"; //varaible global

let nombre = "meli"; //limitado al bloque o estructura donde se ejecuta

//VAR

var numero = 40;

if(true){
    var numero = 50;
    console.log(numero); //valor 50
}

console.log(numero); // valor 50

//LET

let texto = "hola";

if(true){
    let texto = "chau";
    console.log(texto); //valor chau
}

console.log(texto); // valor hola