<?php

$name = 'uwu';

$nombre = 'hola';

if($name === 'uwu'){
    echo "<h1>Hola</h1>";
}
?>

<!--Alternativa 
<?php if($name != 'uwu') : ?>
    <h1>Hola</h1>

<?php elseif (!(1 > 3)) : ?> <!-- ELSEIF va junto-->
    <h2>suma</h2>  

<?php else : ?>
    <h2>eaaa</h2>

<?php endif; ?>


<!-- ternario

<?php 

    $name = $nombre
    ? 'FALSOO'
    : 'TRU';

    echo $name;
?>












