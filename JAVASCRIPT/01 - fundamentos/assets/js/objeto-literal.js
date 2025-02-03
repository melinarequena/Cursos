let personaje = {
    nombre: "Meli",
    apellido: "Requena",
    edad: 20,
    estudiante: true,
    coords: {
        lat: 20.23,
        long: -47.20
    },
    materias: ["fisica", "matematica", "edya"],
    direccion: {
        zip: "1234",
        ubicacion: "caba"
    },
};

console.log(personaje.nombre); //notacion 1 para acceder a atributos

console.log(personaje);

console.log(personaje['edad'], personaje['nombre']); //notacion dos para acceder a atributos


console.log("No de materias", personaje['materias'].length);

console.log("Ultima amteria", personaje['materias'][personaje['materias'].length -1]);


const x = 'coords';
console.log("Coordenadas", personaje[x]);


//mas detalles

//eliminar atributo

delete personaje.direccion;
console.log(personaje);

//crear array con los elementos del objeto

let entriesPares = Object.entries(personaje); //crea array con dos elementos cada pos, titulo y atributo.

console.log(entriesPares);

//agrego atributo

personaje.soltera = true;

entriesPares = Object.entries(personaje);

console.log(entriesPares);


//si definimos al objeto como const, bloqueamos la reasignacion directa al objeto, pero si podemos cambiar sus propiedades

Object.freeze(personaje); //no permite agregar ni eliminar props

personaje.dinero = "alto"; //no afecta


//crea arreglo con los nombres de las propiedades

const propiedades = Object.getOwnPropertyNames(personaje);

console.log(propiedades);

//idem pero con los valores

const valores = Object.values(personaje);
console.log(valores);
