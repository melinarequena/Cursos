const fher = {
    nombre: 'Fernando',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${this.nombre}`); //como pp3
    }
}

fher.imprimir();


function Persona (nombre, edad) { //fn para crear instancias - seuda constructor
    console.log(`Se  ejecuto esta linea`);

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`); //como pp3
    }

    
}

const maria = new Persona(`Maria`, 18); //new indica que quiero crear una nueva instancia de persona

const melisa = new Persona(`Melisa`, 20);

console.log(maria);
maria.imprimir();

melisa.imprimir();