<?php

$age = 21;

$output = match(true) { //un switch pero mas cool
    $age < 20 => "bebe",
    $age > 20 => "adulto",
    default => "En el medio triston",

};

echo $output;

?>