'use strict'

/* programa que pida dos numeros y que diga cual es el mayor y cual es el menor*/

//ahora validar resultados, si son menore so iguales a cero o si no son numeros


var num1 = parseInt(prompt("Ingrese un nuemro"));
var num2 = parseInt(prompt("Ingrese otro numero"));

while(num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)){
    num1 = parseInt(prompt("Ingrese un nuemro"));
    num2 = parseInt(prompt("Ingrese otro numero"));
}

if(num1 == num2){
    alert("los numeros son iguales");
}else{
    if(num1 > num2){
        alert(num1 + " es mayor");
    }else
    alert(num2 + "es mayor");
}

