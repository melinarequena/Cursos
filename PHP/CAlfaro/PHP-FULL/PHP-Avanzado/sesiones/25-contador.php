<?php
    session_name("LOGIN");
    session_start(); //creamos una sesion
                    // se crea una cookie de sesion

    //variables de sesion


    



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sesiones</title>
</head>
<body>
    <?php
    echo "Hola: " . $_SESSION['Nombre'] . "<br>"; //las variables de sesion pueden utilizRSE EN TODAS LAS PAGINAS QUE TENGAN LA SEION INCIADA
     
    ?>

    <a href="25-index.php">Iniciar Sesion</a>
    <a href="25-cerrar.php">Eliminar Sesion</a>

</body>
</html>