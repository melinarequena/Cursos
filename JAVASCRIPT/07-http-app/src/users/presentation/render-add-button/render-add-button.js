import './render-add-button.css';

/**
 * 
 * @param {HTMLDivElement} element 
 */



export const renderAddButton = (element) => {

    const addButton = document.createElement('button');
    addButton.innerText = '+';
    addButton.classList.add('add-button');

    element.append( addButton );

    addButton.addEventListener('click', () => {
        throw Error ('no implementado');
    })


}