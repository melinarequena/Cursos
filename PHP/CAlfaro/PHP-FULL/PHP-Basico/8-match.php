<?php

$x = 2;
$y = 3;
$z = 5;

$a = "3";

$resultado = match($a) { //operador === (tiene en cuenta el tipo de dato)

    $x => 'Valor igual a X',
    $y => 'Valor igual a Y',
    $z => 'Valor igual a Z',

    default => "No coincide con ningun valor"




}; //punto y coma luego de llaves

echo $resultado;


$edad = 18;

$result2 = match(true){
    $edad > 60 => "old",
    $edad < 60 && $edad > 30 => 'mid',
    
    default => "joven"
};

echo $result2;


?>