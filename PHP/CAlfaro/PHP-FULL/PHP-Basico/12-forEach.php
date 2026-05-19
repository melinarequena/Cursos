<?php

$frutas = ['banana', 'manzana', 'banana', 'pera'];

$verdurasStock = [
    'zapallo' => 20,
    'tomate' => 10,
    'zanahoria' => 15
];

foreach($frutas as $fruta){
    echo $fruta . "<br>";

}

echo "<br>";

foreach($verdurasStock as $key => $verdura){
    echo $key . " => " . $verdura . "<br>";
}

echo "<br>";

//array 'indexado' dentro de un array simple

$arraySimple = [
    ['nombre' => 'pablo', 'apellido' => 'pepe'],
    ['nombre' => 'maria', 'apellido'=> 'mama']
];

foreach($arraySimple as $persona){
    echo $persona['apellido'] . ", " . $persona['nombre'];
    echo "<br>";

}




?>