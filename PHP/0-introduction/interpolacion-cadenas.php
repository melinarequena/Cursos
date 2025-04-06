<?php  
$name = "Lila";
$cadena = "<br/>Hola $name 👄";

$cadena1 = '<br/>Hola $name 👄'; //comillas simples no permite interpolacion

echo $cadena;
echo $cadena1;

$cadena .= "interpolamos con .=";

echo $cadena;


?>