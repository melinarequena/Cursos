//numero par o impar
//validar numero

'use strict'

var num1 = parseInt(prompt("Ingrese un numero"));

while(isNaN(num1)){
    num1 = parseInt(prompt("Ingrese un numero"));
}

if(num1%2 == 0){
    console.log("Par");
}else{
    console.log("Impar");
}

