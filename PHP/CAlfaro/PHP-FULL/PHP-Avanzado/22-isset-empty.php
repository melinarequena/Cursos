<?php

$numero=NULL;

if(is_null($numero)){
    echo 'true';            //true
}else echo 'false';


$variable;

if(empty($variable)){       // empty: "" | 0 | 0.0 | "0" | null | false | array() sin nada adentro
    echo 'true';            //true
}else echo 'false';


$edad = 21;

if(empty($edad)){
    echo 'true';            //false
}else echo 'false';

unset($edad); // eliminamos el valor de la variable

if(empty($edad)){
    echo 'true';            //true
}else echo 'false';


$edad = 20;
echo "<br>";
if(isset($edad)){
    echo 'true';            //false
}else echo 'false';








?>