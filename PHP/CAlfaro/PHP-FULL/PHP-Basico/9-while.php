<?php

$edad = 0;

while($edad < 18){
    echo $edad . ": muy niño";
    $edad = $edad + 1;
}

echo $edad . ": old";


$valor = 0;

while($valor < 18){
    echo "<br>";
    if($valor == 15){
        echo '15 años sdjasfja';
        $valor++;
        break; //sale del while
    }  
    echo $valor . " joven aun.";
    $valor++;
}

echo "<br>"; 

$valor = 0;

while($valor < 18){
    echo "<br>";
    if($valor == 15){
        echo '15 años sdjasfja';
        $valor++;
        continue; //salta a la proxima iteracion del ciclo
        
    }  
    echo $valor . " joven aun.";

    $valor++;
}

echo "<br>";
echo "<br>";
echo "<br>";

$components = ['CPU', 'RAM', 'GTX', 'SSD'];
foreach($components as $indivComponent){
    if($indivComponent == 'GTX'){
        continue;
    }else
    echo $indivComponent . ': Component' . "<br>";
}




?>