'use strict'

var operation = prompt("Ingrese una operacion");
var num1 = parseInt(prompt("Ingrese un num"));
var num2 = parseInt(prompt("Ingrese otro num"));

switch(operation){
    case "+":
        console.log(num1+num2);
        break;

    case "-":
        console.log(num1-num2);
        break;


    case "*":
        console.log(num1*num2);
        break;


    case "/":
        console.log(num1/num2);
        break;

}