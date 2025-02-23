//singleton: instancia unica de la clase en toda la aplicacion
//todas las instancias duplicadas aputnan al mismo espacio de memoria, ahorro de memoria


class Singleton {

    static instancia;
    nombre = '';

    constructor (nombre) {

        if(!!Singleton.instancia){ //!!undefined = false \\ !undefined = true
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;

    }

}

const instancia1 = new Singleton('ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('gatu');


console.log(`Nombre en la sintancia 1 es: ${instancia1.nombre}`);

console.log(`Nombre en la sintancia 2 es: ${instancia2.nombre}`);

console.log(`Nombre en la sintancia 3 es: ${instancia3.nombre}`);