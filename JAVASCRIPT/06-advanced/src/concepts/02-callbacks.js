import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {

    const id1 = '5d86371fd55e2e2a30fe1ccb1';
    const id2 = '5d86371fd55e2e2a30fe1ccb2';




    findHero(id1, (error, cualquierHero1) => {

        if(error) {
            element.innerHTML = error;
            return;
        }

        //element.innerHTML = cualquierHero?.name || 'No hay heroe'; //si hero existe, buscamos su nombre, sino no hay heroe

        findHero(id2, (error, hero2) => {
            if(error) {
                element.innerHTML = error;
                return;
            }

            element.innerHTML = `${cualquierHero1.name} / ${hero2.name}`
        })

        //element.innerHTML = cualquierHero1.name ;
    });
    
}

/**
 * 
 * @param {String} id 
 * @param {(error: String|null, hero: Object)=> void} callback 
 */

const findHero = (id, callback) => {

    const hero = heroes.find(hero => hero.id ===id);

    if(!hero){
        callback(`Hero with id ${id} not found`);
        return; //regresa undefined
    }

    callback( null, hero );

}




//callback, fn que recibe un argumento y ese argumento es otra fn que se llama dentro de la primera fn wtf

