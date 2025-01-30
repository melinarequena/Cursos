
//OPERADORES Y TIPOS DE DATOS

'use strict'

//OPERADORES

var numero1 = 7;
var numero2 = 5;
var suma = numero1 + numero2;
var resta = numero1 - numero2;
var division = numero1 / numero2;
var multiplicacion = numero1 * numero2;
var modulo = numero1 % numero2;




alert("El resultado de la operacion es:" +suma); //concatenacion entre 2 strings, "el result" + operacion.

alert("El resultado de la operacion es:" +resta); //concatenacion entre 2 strings, "el result" + operacion.


//TIPOS DE DATOS
// entero, string, float, bool, array, object/

var entero = 44;
var stringNumero = "44"; //stringNumero + entero = 4444

var stringConComillasDobles = "hola";
var stringConComillasSimples = 'Hola';
var float = 23.10;
var bool = true; // false, o 0/1

//Convertir de un dato a otro

Number(stringNumero);
parseFloat(stringNumero); //Retornan numeros de todo tipo, o float o int.
parseInt(stringNumero);

console.log(stringNumero); //44 en string

var sumaValida = entero + Number(stringNumero);

console.log(sumaValida);


// VER TIPO DE DATO

console.log(typeof(stringNumero));


