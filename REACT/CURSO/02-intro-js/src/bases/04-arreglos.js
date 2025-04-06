// Arreglos

const arreglo = [1, 2, 3, 4];

// arreglo.push(1); // no se recomienda el push ya que modifica la referencia, se recomienda el spread ...

let arreglo2 = arreglo;
// arreglo2.push(5);

arreglo2 = [...arreglo, 5] //crea arreglo nuevo con todos los elementos de arreglo + el 5. copia por valor, no x ref



const arreglo3 = arreglo2.map(function(i){
    return i;
}); //callbak

//el metodo map siempre recibe una fn como parametro, en esta fn simplemente retorna el elemento i del array, podria, x ej, multiplicarlo

arreglo3.push(6);

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);