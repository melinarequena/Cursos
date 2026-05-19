<?php
    setcookie(
        "Idioma", 
        "ES", 
        time()+3600, 
        '/'
    );
    // nombre de la cookie
    // valor de la cookie
    // expiracion de la cookies (30 dias)
    // directorio "/" --> la cookie esta disponible dentro de todo el servidor
    // dominio
    // secure, true --> solo se crea cuando usemos protocolo https
    // httponly, true --> la cookie solo puede ser accesible por protocolo http
?>
<!-- no poner nada antes del codigo php, eso me causo error  -->
<!-- las cookies se crean antes del codigo html -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cookies</title>
</head>
<body>
    <h1>Creamos cookie</h1>
    <?php
    echo $_COOKIE['Idioma'] ?? '(no existe aun)';
    ?>

    <p><a href="24-cookie_del.php"> HAGA CLICK PARA ELIMINAR COOKIE </a></p>

</body>
</html>