<?php
    $isDev = true;
    $name = "Melina";
    $age = 39;
    $cadena = "20";

    var_dump($age); //dumps info about a variable
    echo gettype($isDev); //gets type

    $age = (bool) 0; //cambiamos dato

    var_dump($age);

?>

<h1>
    <?= "Hola, "
    . $name
    . "<br />" //salto de linea --> inyectamos html
    . "❤️"
    // el <?= reemplaza a <?php echo
    . "<script>alert('HOLA')</script>";
    
    ?>

    
</h1>


<h2>
    <?= $name ?> <!-- imprimimos -->
</h2>

<style>
    :root {
        color-scheme: light dark;
    }

    body {
        display: grid;
        place-content: center;
    }
</style>