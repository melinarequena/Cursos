class Persona {

    static _conteo = 0; 
    static get conteo() { 
        return Persona._conteo;
    }
    static mensaje() {
        console.log('Hola, soy metodo estatico');
    }

    nombre;
    codigo;
    frase;
    comida;

    constructor(nombre, codigo, frase) { 
        console.log(`Hola!`);

        this.codigo = codigo;
        this.nombre = nombre;
        this.frase = frase;

        Persona._conteo++; 
    }

    quienSoy () {
        console.log(`Yo soy ${this.nombre}`);
    }
    miFrase () {
        this.quienSoy();
        console.log(`  ${this.frase}`);
    }

    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase(); 
    }
    get getComidaFavorita() {
        return this.comida;
    }

}

class Heroe extends Persona{ //hereda de persona
    clan; //nuevo atributo particular de la subclase

    constructor(nombre, codigo, frase) {
        super(nombre, codigo, frase); //primero va el super

        this.clan = 'Avengers';
    }
}


const spiderman = new Heroe(`Spiderman`, 210, `Hombre arania`);

console.log(spiderman);
