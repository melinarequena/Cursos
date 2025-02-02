'use strict'

// IF CONDITION

if(3>2){
    alert("alerta");
    console.log("hola");
}else{
    console.log("chau");
}

var edad1 = 12;
var edad2 = 60;
var edad3 = 15;

//and &&
//or

if(edad1 > edad2 && edad3 > edad2){
    console.log(true);
}else{
    console.log(false);
}

//SWITCH

var edad = 15;

switch(edad){
        case 18:
        var imprime = "Sos mayor de edad";
        break;

        default:
        console.log("No pueddes entrar al club");
}