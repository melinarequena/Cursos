<?php


$coso = $_POST['coso'];
$puestos = $_POST['puestos']; // sin los corchetes


foreach($puestos as $puesto){
    echo $puesto . "<br>";
}

foreach($coso as $cosoAtom){
    echo $cosoAtom . "<br>";
}



?>