<?php 


$saludo = "hola";

var_dump($saludo); //tipo de dato + long de cadena si es string

var_dump(100);

echo __LINE__; //numero de linea


//constantes 

define("EDAD", 21);
define("NOMBRE", "PHP");


echo EDAD; //sin los $
echo NOMBRE;

const dni = 223333;

echo dni;


//definir arrays

define("animales", array('perro', 'gato'));

echo animales[0];

var_dump(animales[1]);



$frutas = array('frutilla', 'melon', 'kiwi');

echo $frutas[2];

$frutas[2] = 'nuevo Kiwi';

echo $frutas[2];

//array asociativo
$arrayClave = array(
                'entero' => 2, 
                'palabra' => 'pala', 
                'float' => 3.14
); //creamos array en donde cada pos se referencia por una clave

echo $arrayClave['palabra']; //accedemos al contenido del la posicion 'palabra' (accedemos por medoo de la clave)

$array2 = [ //array asociativo hecho de forma mas facil
    "foo" => "bar",
    "bar" => "foo",
];

//array vacio
$arrayVacio = array(); //podemos definir un array vacio


//array de multiples dimesiones

$arrayMultiple = [
    'saludo' => 'hola',
    'despedida' => 'chau',
    'mix' => ['hola', 2, 3.4]
];

echo $arrayMultiple['mix'][0];

echo count($frutas); //contar elementos de arreglo unidimensional



?>