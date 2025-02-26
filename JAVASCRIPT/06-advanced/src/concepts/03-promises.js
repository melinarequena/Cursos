import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) => {

    console.log('promiseComponent');
    
}


const findHero = (id) => {

    const hero = heroes.find(hero = > hero.id === id);

     
}

//promise, pacto entre dos partes en donde una se compormete a realizar algo si la otra lo hace.