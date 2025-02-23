
class Persona {

    static porObjeto ({nombre, apellido, pais}) { //desestructuralizaion de parametros
        return new Persona(nombre, apellido, pais);
    }


    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo() {
        console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }



}

const nombre1 = 'Meli',
        apellido = 'flores',
        pais = 'honduras';

const persona1 = new Persona(nombre1, apellido, pais);

persona1.getInfo();


const fher = {
    nombre: 'fer',
    apellido: 'herrera',
    pais: 'honduras'
}


const persona2 = Persona.porObjeto(fher);
persona2.getInfo();