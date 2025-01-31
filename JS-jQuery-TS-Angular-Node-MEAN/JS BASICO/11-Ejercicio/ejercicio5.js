//todos los numeros divisores de ese numero
'use strict'

var num1 = parseInt(prompt("Ingrese un numero"));

for (var i = num1; i>0; i--){
    if(num1%i == 0){
        console.log(i);
    }
}
