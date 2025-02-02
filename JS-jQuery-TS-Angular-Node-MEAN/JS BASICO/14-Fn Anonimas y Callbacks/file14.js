'use strict'

//funciones anonimas
//fn que no tienen nombre, usadas para hacer callbacks

var pelicula = function(nombre){
    return "La peli es" + nombre;
}

pelicula("LALALAND");


function sumame(num1, num2, sumaYMuestra, sumaPorDos){
    var sumar = num1 + num2;

    sumaYMuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

sumame(5, 7, function(dato){  //function es fn callback
    console.log("La suma es:" + dato);
},
function(dato){
    console.log(("La suma por dos es:" + dato*2));
});


//literal esta haciendo
/*

sumame(5, 7, fn1=suma, fn2=sumaxdos)
*/


//FN FLECHA

function resta(num1, num2, restaYMuestre){
    var resta = num1 - num2;

    restaYMuestre(resta);
    return resta;
}

resta(7, 4, dato => {
    console.log("La resta es:" + dato);
    }
);

//ponemos simplemente una flecha en vez de function