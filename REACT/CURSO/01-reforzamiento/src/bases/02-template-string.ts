const nombre = 'mel';
const apellido = 'reque';
const apellidoCompuesto = "o'neal";
const apellidoLargo = '0\'neal "es el nombre de alguien"';

console.log(nombre + ' ' + apellidoLargo + ':');

const fullSentence = ` 
El nombre completo es:
    ${apellidoLargo} y ${nombre} ${1+1} ` // lo que coloque entre ${} es una expresion de js


console.log(fullSentence);

