const arr = new Array(10);
console.log(arr);

let juegos = ["gta", "mario", "sims"];

console.log(juegos);

console.log({juegos});

console.log(juegos[1]);

let arreglo = [
    true,
    123,
    "Melina",
    1+2,
    ()=>{},
    { a: 1 },
    ["hola", "como", "estas"]
];

console.log(arreglo);

console.log(arreglo[6][2]); //imprime "estas"

//mas sobre asrreglos

console.log("longitud ",  arreglo.length);

juegos.forEach((elemento, indice, arr) =>{
    console.log({elemento, indice, arreglo});
})

juegos.push("COD"); //inserta al final

console.log(juegos);

juegos.unshift("Plants vs Zombies"); //inserta al principio

console.log(juegos);

juegos.pop(); //elimina el ultimo

juegos.splice(1, 1); //me paro en una pos y cuantos elementos quiero borrar a partir de ese. borramos gta.

console.log(juegos);

let marioIndex = juegos.indexOf("mario"); //returns index of string. -1 si no lo encontro

console.log(marioIndex);
