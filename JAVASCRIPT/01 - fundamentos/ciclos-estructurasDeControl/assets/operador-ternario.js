/* dias de semana abrimos a las 11, pero los fines 
de semana abrimos a las 9*/


const dia = 0; //domingo es 0
const horaActual = 8;

let horaApertura; //11 o 9
let mensaje; //abierto o cerrado


//hecho con if

/*if(dia == 0 || dia == 6){
    horaApertura = 9;
    
}else{
    horaApertura = 11;
    
}

if(horaActual>= horaApertura){
    mensaje = "abierto";
}else{
    mensaje = `cerrado, abrimos a las ${ horaApertura}`; //forma nueva de concatenar strings. mejor practica que el +
}
*/


//buena forma --> operacion ternaria:

horaApertura = ([0, 6].includes(dia) ) ? 9 : 11; 

mensaje = (horaActual>=horaApertura) ? `abierto` : `cerrado, abrimos a las ${horaApertura}`;
//condicion, true, false

console.log(mensaje);
