
//en JS, todo menos los objetos se pasan por valor

let a = 1;
let b = a;

console.log({a,b});

a = 30; 

console.log({a,b});

//en JS, todos los objetos se pasan por referencia

//operador para separar variables de objeto ...

let juan = {nombre:"juan"};
let ana = {...juan}; //operador SPREAD(SEPARA REFERENCIA), no REST
ana.nombre = "ana";

console.log({juan,ana});


const cambiaNombre = (persona) => {
    persona.nombre = "tony";
    return persona;
}

let peter = {nombre: "peter"};
let tony = cambiaNombre({...peter}); //OPERADOR SPREAD PT 2

console.log(peter);
console.log(tony);


//con arreglos

const frutas = ["manzana", "pera", "pina"];

const buenasFrutas = [...frutas];

//const otrasFrutas = frutas;


buenasFrutas.push("mango");

//console.table(otrasFrutas);
console.table(frutas); //MISMA CANTIDAD DE ELEMENTOS EN FRUTAS Y EN OTRASFRUTAS



console.table(buenasFrutas); //rompimos la relacion por referencia

