//mostrar todos los numeros impares entre dos numeros

'use strict'

var num1 = parseInt(prompt("Ingrese un numero"));
var num2 = parseInt(prompt("Ingrese otro numero"));

for (var i = num1; i<=num2; i++){
    if(i%2 != 0){
        console.log(i);
    }
}
