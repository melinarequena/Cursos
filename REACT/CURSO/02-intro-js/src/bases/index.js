// funciones en js

const fn = function (nombre) {
    return `Hola ${nombre}`;
}

console.log(fn('lorca'));


const fn2 = (nombre) => {
    return `Hola flechita: ${nombre}`
}

console.log(fn2('lalalal'));


const fn3 = (nombre) => `Hola ligera ${nombre}`

console.log(fn3('skinyyy '));


const f4 = () => `Hola en 2D`

console.log(f4());


const getUser = () => ({
        uid: 'ABC123',
        username: 'user1229348',
    //retorno un objeto
});

const user = getUser();

console.log(user);


