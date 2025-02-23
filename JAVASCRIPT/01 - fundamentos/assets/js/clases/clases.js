
class Persona {
    //por defecto cada clase tiene el use strict

    static _conteo = 0; //se comparte entre todas las instancias de la clase (pp3)

    static get conteo() { //metodo statico, accede a datos puramente static
        return Persona._conteo;
    }

    static mensaje() {
        console.log('Hola, soy metodo estatico');
    }


    nombre;
    codigo;
    frase; //definimos las propiedades de la clase - opcional
    comida;

    constructor(nombre, codigo, frase) {  //unico metodo que retorna por default la instancia del objeto
        console.log(`Hola!`);

        this.codigo = codigo;
        this.nombre = nombre;
        this.frase = frase;

        Persona._conteo++; //se accede por medio de la clase, no por this (this se usa para acceder por medio del objeto. como miemboro static se comparte entre todas las instancias se accede pro medio de la clase)
        
    }

    quienSoy () {
        console.log(`Yo soy ${this.nombre}`);
    }

    miFrase () {
        this.quienSoy();
        console.log(`  ${this.frase}`);
    }


    //setters y getters

    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase(); // todo en mayusc
    }

    get getComidaFavorita() {
        return this.comida;
    }




}

const spiderman = new Persona(`Spiderman`, 210, `Hombre arania`);
const ironman = new Persona(`Tony Stark`, 999, `Ironman`);

//console.log(ironman);

spiderman.quienSoy();
//ironman.miFrase();

spiderman.setComidaFavorita = 'Pizza';

console.log(spiderman);

//console.log(spiderman.getComidaFavorita);

console.log('Conteo estatico:', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();


//definit prop estaticas fuera e la clase

Persona.propiedadExterna = 'Hola Mundo';

console.log(Persona.propiedadExterna);



