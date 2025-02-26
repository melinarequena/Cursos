import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async(element) => {

    const id1 = '5d86371f9f80b591f499df32';
    const id2 = '5d86371fd55e2e2a30fe1ccb';    


    try {
        const hero1 = await findHero(id1); //solo dentro de modulos asyncronos. sin await es una promesa
        const {name: name2} = await findHero(id2); //desestructurar

        element.innerHTML = `${hero1.name} / ${name2}`;

    } catch (error) {
        element.innerHTML = error;
    }

}


const findHero = async(id) => {
    const hero = heroes.find(hero => hero.id === id);
    if(!hero) {
        throw `Hero with id ${id} not found`;
    }
    return hero;
}