class Rectangulo {
    #area = 0; //campo privado

    constructor(base = 0, altura = 0){
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }

    calcularArea() {
        console.log(this.#area * 2);
    }
}

const rectangulo = new Rectangulo(10, 20);

console.log(rectangulo);
console.log(rectangulo.area);

//rectangulo.#area = 100; //no deberiamos poder modificar los atributos de la clase externamente


