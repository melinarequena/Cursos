const persona = {
    nombre: 'Paulin',
    apellido: 'Jaja',
    edad: 21,
    direccion: {
        ciudad: 'Ney York',
        zip: 5555,
        lat: 43.21,
        lon: -70.12,
    }

};

console.log({persona}); //creamos un objeto que tiene una propiedad llamada persona que posee los atributos de arriba

console.table(persona); //imprime en formato de tabla (NO LO CONOCIA)


const persona2 = persona; //por referencia, si cambiamos algo de persona 2 cambiaremos de 1. no se recomienda como practica. 

persona2.nombre = 'Otro FAKE name'

console.log(persona);

//forma de crear un clon persona

const persona3 = {...persona} //operador SPREAD,  crea persona tipo clon
