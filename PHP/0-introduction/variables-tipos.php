<?php
    $name = "Miguel"; //creamos variable $nombre
    $isDev = true;
    $name = 3;

    $name = "Melina";

    //tipado DINAMICO --> NO NECESARIO DECLARAR TIPO, puede cambiar en tiempo de ejecucion

    //tipado DEBIL --> INTENTARA CONVERTIR TIPOS AUTOMATICAMENTE (COMO JS)

    $age = 39;
    echo $age; //39

    $age = 39 + '1';
    echo $age; //40. en vez de 391


    //concatenado de numeros

    $cadena = "20";

    echo $cadena + "1"; //21 --> + no sirve para concatenar strings

    echo $cadena . 1; //201 --> operador . para concatenar strings

    //tipado GRADUAL --> PODEMOS INDICAR EXPLICITAMENTE LOS TIPOS DE VARIABLES (ej: clases, funciones)

?>




<h1>
    <?= "Mi primera app";
    // el <?= reemplaza a <?php echo
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