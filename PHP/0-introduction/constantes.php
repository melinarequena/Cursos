<?php

$name = 'uwu';

$nombre = 'hola';

if($name === 'uwu'){
    echo "<h1>Hola</h1>";
}

//dos tipos de ctes
define('GATITO' , 'https://cdn0.expertoanimal.com/es/posts/5/7/5/como_socializar_un_gato_cachorro_22575_600.jpg'); //variables globales
//constante global

const NOMBRE = 'Michu'; 

//no deben de depender de valores que cambien en tiempo de ejecucion

?>

<img src="<?= GATITO ?>">

<p><?=NOMBRE ?></p>

