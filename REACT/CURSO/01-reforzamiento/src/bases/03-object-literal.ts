const ironman = {
    nombre: 'Mel',
    apellido: 'Requen',
    age: 21,
    address: {
        postalCode: 1426,
        calle: 'maure',
    }
}

// objeto literal, puedo cambiar sus propiedades

ironman.nombre = 'pedro';

console.log(ironman);

// person = {
//     nombre: 'paula',
//     apellido: 'perez',
//     age: 40
// }

const spiderman = { ...ironman }; // apunta al mismo espacio de memoria
// operador SPREAD --> rompe referencia de memoria al primer nivel

spiderman.nombre = 'pablo';
spiderman.age = 44;
spiderman.address.calle = 'lmc'; 

console.log({ ironman }, { spiderman }); // tendran calle en lmc porque sigue la referencia a memoria a segundo nivel
