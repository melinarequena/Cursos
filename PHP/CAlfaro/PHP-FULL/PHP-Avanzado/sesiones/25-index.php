<?php
    session_name("LOGIN");
    session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LOGIN</title>
</head>
<body>
    <form action="25-login.php" method="post">
        <label>USUARIO</label> <br>
        <input type="text" name="usuario" pattern="[a-zA-Z0-9$@.-]{8,30}" maxlength="30"> 
        <!-- EXPRESIONES REGULTARES: Permitimos solo letras -->
         <!-- que caracteres y cuantos aceptara(cuantos exactamente o entre cuantos) -->
          <!-- maxlength: cuantos caracteres maximo me va a dejar escreibir -->
        <br>

        <label>CONTRASEÑA</label> <br>
        <input type="password" name="pass" pattern="[a-zA-Z]{3,10}>
        <br>

        <br>
        <button type="submit">Inciar Sesion</button>

    </form>
</body>
</html>