//string

let name = "Pedrito";
console.log(name);

console.log(typeof name);

name = 123;

console.log(typeof name);


//bool

let value = true;

console.log(value);
console.log(typeof value);

//undefined

let undef;
console.log(typeof undef);


//object

let soyNull = null;
console.log(typeof soyNull);

//symboll

let symbol1 = Symbol('a');
let symbol2 = Symbol('b');
console.log(typeof symbol1);


//dos simbolos del mismo tipo
console.log((typeof(symbol1) == typeof(symbol2)));

//dos simbolos nunca son iguales
console.log((symbol1 == symbol2));