const heroes = ['heroe 1', 'heroe 2', 'heroe 3', 'heroe 4'];

//for in

for(let i in heroes) { //copado- recorre todo el array
    console.log(heroes[i]);
}

//for of --> extrae el valor del arreglo y lo asigna a la variable heroe

for( let heroe of heroes){ //mucho mas clean. se acostumbra en vez de ia  poner el nombre singular del arreglo
    console.log(heroe);
}