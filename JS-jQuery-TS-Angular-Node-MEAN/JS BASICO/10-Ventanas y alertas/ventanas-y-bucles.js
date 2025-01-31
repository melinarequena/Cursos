'use strict'

//alerta
alert("Esta e suna alerta");


// Alertas de confirmacion
confirm("Estas seguro de querer continuar?");

var respuesta = confirm("Seguro que estas seguro?");

console.log(respuesta);


//ventana de ingreso de informacion

var rtaPrompt = prompt("Cuatos anos tienes", 18); // es el valor por defecto en el caso de que no ingrese nada

//siempre va a ser un string la rta del prompt

console.log(rtaPrompt);