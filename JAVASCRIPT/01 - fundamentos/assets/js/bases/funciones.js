
function saludar(){ //no conviene como  uena practica
    console.log("Hola, Mundo!");
}

saludar();


//otra forma de defiiri fn


let saludar2;
saludar2 = function() { // fn anonima notacion 1
    console.log("HOLAAA");
}

const saludar3 = function() { //fn anonima notacion 2 (es lit lo mismo)
    console.log("HOLAAAAA ANONIMA");
}

saludar2();
saludar3();



function despedir(despedida) {
    console.log(despedida);
}

despedir("CHAU");


function pruebaArguments (despedida){
    console.log(arguments); //retorna todos los elementos linkeados a la fn, inclusive aquellos que no se encuentren como parametros en su def.
}

pruebaArguments("chau", 42, "Meli");



//fn flecha

let edad = 12;

const fnFlecha = (edad) => {
    console.log("HOLA", edad);
}

fnFlecha(edad);

const getAleatorio = () => Math.random(); //fn flecha sin {} cuando solo retorna algo

console.log(getAleatorio());