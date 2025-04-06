console.log('hola mundo');

//Variables y constantes

//no usar var
//se usan const y let

const nombre = 'Melina';
const apellido = 'Requena';

let valorDado = 5;

valorDado = 4;

if(true) {
    let valorDado = 6;
    const nombre = 'Peter';

    console.log(valorDado); //6

    console.log(nombre); //Peter
}

console.log(valorDado); //4
console.log(nombre); //Melina