
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponent = (element) => {

    element.innerHTML = 'Loading...'

    const renderValue = (value) => {
        element.innerHTML = value;
    }

    Promise.race([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
        slowPromise(),
        fastPromise(),
        mediumPromise(),

    ]).then(renderValue)
}


const slowPromise = () => new Promise(resolve=> {
    setTimeout(() => {
        resolve('Slow Promise');
    }, 2000);

}); // fn que regresa una promesa
//set timeout, ejecuta cierta linea en cierto tiempo

const mediumPromise = () => new Promise(resolve=> {
    setTimeout(() => {
        resolve('Medium Promise');
    }, 1500);

});

const fastPromise = () => new Promise(resolve=> {
    setTimeout(() => {
        resolve('Fast Promise');
    }, 1000);

});