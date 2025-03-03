import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorAsync = async(element) => {

    const heroGenerator = getHeroGenerator();
    let hasElements = false;
    
    do {
        const {value, done} = await heroGenerator.next();

        hasElements = done;

        if(hasElements) break;

        console.log({value, done});
        
        element.innerHTML = value;


    } while ( !hasElements );
    
}

async function* getHeroGenerator() {
    for (const hero of heroes) {
        await sleep();
        yield hero.name;
    }
}


const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 750);
    })
}