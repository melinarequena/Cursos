<?php

//funcion que toma nombre y saluda
function saludo($name){ 
    echo "hola {$name}";
}

saludo('Carlos Alfaro');

echo "<br>";

//funcion que toma nombre y se despide ezz
function despedida($name){
    return "chau, {$name}";
}


// funcion que toma nombre y lo retorna
function getName($name){
    return $name;
}

$nombre = getName('Carloooo');


$chau = despedida($nombre);

echo $chau;

echo "<br>";

echo despedida('Pepe Alfajor');
?>