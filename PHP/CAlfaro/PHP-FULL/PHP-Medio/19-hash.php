<?php 

$clave = "HolaMundo123";

echo md5($clave); // algoritmo md5

echo "<br>";

echo sha1($clave); //algoritmo sha1

echo "<br>";

echo hash("md5", $clave); //funcion hash soporta multiples algoritmos, cuales?

foreach(hash_algos() as $algoritmo){
    echo $algoritmo . ":   " . hash($algoritmo, $clave) . "<br>"; // todods los algoritmos que soporta hash
}

//fn recomendable: no retorna valores fijo
//cada vez que recargamos la pagina se actualiza el hash
echo "<br>";
echo "<br>";


$encriptDefault = password_hash($clave, PASSWORD_DEFAULT); //con DEFAULT

$encriptBCRYPT = password_hash($clave, PASSWORD_BCRYPT, ["cost"=>10]); //con BCRYPT || cost --> cuantas veces se aplico el algoritmo


echo "Default: " . $encriptDefault;
echo "<br>";
echo "BCRYPT: " . $encriptBCRYPT;


//verificar hash procesado

if(password_verify($clave, $encriptBCRYPT)){
    echo "<br> TRUE";
}else
    echo "<br> FALSE";

//comprueba que coincidan el hash con la clave

?>