<?php

$cadena = "Hola mundo";

$cadenaMinuscula = strtolower($cadena);

$cadenaMayus = strtoupper($cadena);

$primeraMayus = ucfirst($cadenaMinuscula); //le pasamos la cadena toda minusc

$camelCase = ucwords($cadenaMinuscula);

echo $cadena . "<br>" . $cadenaMayus . "<br>" . $cadenaMinuscula . "<br>" . $camelCase . "<br>";



$longitudCadena = strlen($cadena); //cant elementos

$cantPalabras = str_word_count($cadena); //cant palabras

echo $cadena . ": " . $longitudCadena . " caracteres, " . $cantPalabras . " palabras";


echo "<br>";
//convertir palabras de una cadena a un array

$palabras = "UNO DOS TRES CUATRO CINCO SEIS SIETE OCHO NUEVE DIEZ";

$arrayPalabras = explode(" ", $palabras, ); // delimitador (dividir por espacio, coma, /, |, etc), string a dividir, limitador (opcional)

// delimitador: cuantos elementos tendra el nuevo array. 
// ejemplo, delimitador 2:
// [0]: UNO || [1]: DOS TRES CUATRO...


/*limit
Si el parámetro limit es positivo, el array devuelto contendrá el máximo de limit elementos, y el último elemento contendrá el resto del string.

Si el parámetro limit es negativo, se devolverán todos los componentes a excepción del último -limit.

Si el parámetro limit es cero, se tratará como 1.*/

foreach($arrayPalabras as $palabra){
    echo $palabra . "<br>";
}