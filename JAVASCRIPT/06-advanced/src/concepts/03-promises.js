import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) => {

    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    }

    const renderTwoHeroes = (hero1, hero2) => {
        element.innerHTML = `
        <h3>${hero1.name}<h3>
        <h3>${hero2.name}<h3>
        `;

    }



    const renderError = (error) => {
        element.innerHTML = `
        <h2>ERROR<h2>
        <h3>${error}<h3>
        `
    }





    const id1 = '5d86371f25a058e5b1c8a65e';
    const id2 = '5d86371f233c9f2425f16916';


    Promise.all([
        findHero(id1),
        findHero(id2)
    ])
    .then(([hero1, hero2]) => renderTwoHeroes(hero1, hero2))
    .catch(renderError);
    
    
    //metdo estatico al que le puedo mandar un arreglo de promesas. en este caso sirve porque ambas promesas son INDEPENDIENTES ENTRE SI!!!, no tienen que ser en cadena.
    //retorna como un arreglo todos los valores resueltos
    //si alguna manda catch, entonces todas son catch. el then se ejecuta si todas mandan then




// forma 2
//let hero1;
    // findHero(id1) //promesas en cadena. 1 then 1 catch
    //     .then(hero => {
    //         hero1= hero;
    //         return findHero(id2);

    //     }).then(hero2 => {
    //         renderTwoHeroes(hero1, hero2);
    //     })
    //     .catch(renderError)

//forma 3


    //findHero(id1).then((superHero) => renderHero(superHero)); FORMA MAS LARGA

    // let hero1;

    // findHero(id1)
    //     .then((hero) => {
    //         hero1 = hero;

    //         findHero(id2)
    //             .then(hero2 => {
    //                 renderTwoHeroes(hero1, hero2);
    //             })
    //             .catch(renderError);
    //     })
    //     .catch(error => renderError(error)); 
    //     //.catch(renderError(error)); FORMA MAS CORTA
    
}




/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = (id) => {
//resolve: valor producto de la promesa || reject, no se llego a cumplir la promesa
    return new Promise( (resolve, reject) => {
        const hero = heroes.find(hero => hero.id === id);

        if(hero) {
            resolve(hero); //fin del flujo
            return;
        }
        reject(`Hero with id ${id} not found`);

    });
    
}

//promise, pacto entre dos partes en donde una se compormete a realizar algo si la otra lo hace.