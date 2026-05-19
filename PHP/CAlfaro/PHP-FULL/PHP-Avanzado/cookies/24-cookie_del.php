<?php
    setcookie(
        "Idioma", 
        "", 
        time()-3600, 
        '/'
    );

    $enlace = "24-cookies.php";

    echo "<a href=\"$enlace\">HAGA CLICK PARA VOLVER A CREARLA</a>"

    //para modificar valor de la cookie simplemente volvemos a llamar a setcookie con el mismo nombre
    // para hacerla expirar le pones el tiempo negativo


?>