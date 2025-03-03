
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = (element) => {

    // const generator = myFirstGeneratorFunction();

    // console.log(generator.next()); //el siguente valor Primer valor

    //se genera una secuencia de valores

    const idGen = idGenerator();

    const boton = document.createElement('button');

    boton.innerHTML = 'TOCAME';

    element.append(boton);

    const renderButton = () => {
        const { value } = idGen.next();
        boton.innerHTML = `Click ${value}`;

    }

    boton.addEventListener('click', renderButton)


    
}

function* idGenerator(){
    let currentId = 0;
    while(true){
        yield ++currentId;
    }
}

//FN GENERADORA: no se puede usar mediante fn flecha =>

function* myFirstGeneratorFunction() {

    yield 'Primer valor'; //ceder - "pausa la fn" se puede luego splicitar mas valores

    yield 'Segundo valor';

    yield 'Tercer';

    yield 'Cuarto';


    return 'No hay valores';

    yield 'Ya aca no se llega dps del return'
}

