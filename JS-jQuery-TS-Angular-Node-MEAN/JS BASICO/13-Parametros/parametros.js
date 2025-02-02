'use strict'

//parametros REST y SPREAD

//REST

function listado2Frutas(fruta1, fruta2){
    console.log("Fruta 1: " + fruta1);
    console.log("Fruta 2: " + fruta2);
}

listado2Frutas("anana", "frutilla");

function listadoTODASFrutas(...frutas){
    console.log("Fruta: " + frutas);

}


listadoTODASFrutas("anana", "frutilla", "pera", "kiwi");


//SPREAD

var frutasArray = ["frutilla", "pera", "kiwi"];
listadoTODASFrutas(frutasArray)