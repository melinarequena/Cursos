<?php

$arrayLenguajes = ["PHP", "C", "C++", "HTML", "CSS", "JAVASCRIPT", 1];
//podemos combinar distintos tpps de datos

$arrayLenguajes[] = "R"; //agregamos al final

echo $arrayLenguajes[2];


?>

<h3>El mejor lenguaje es <?= $arrayLenguajes[4]?></h3>

<ol> 
    <?php foreach ($arrayLenguajes as $lenguaje) : ?>
    <li> <?=$lenguaje?></li>
    <?php endforeach; ?>
</ol>

<!-- recorremos el array -->

<ul> 
    <?php foreach ($arrayLenguajes as $key => $lenguaje) : ?>
    <li> <?= $key . " " . $lenguaje?></li>
    <?php endforeach; ?>

</ul>

<!-- key -> sacamos el indice del elemento del array -->