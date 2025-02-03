
function crearPersona(nom, ape){
    return {
        nombre: nom,
        apellido:ape,
    }
}


//alternativa mas clean
//flecha, sin nombrar las prop

const crearPersonaBETTER = (nom, ape) => ({nom, ape});


//2


function imprimeArgumentos() {
    console.log(arguments);
}

imprimeArgumentos(1, "Meli", 40.2);


//fn flecha

const imprimeArgumentosBETTER = (...args) => { console.log(args); }

imprimeArgumentosBETTER(1, "Meli", 40.2);
