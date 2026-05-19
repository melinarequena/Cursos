<?php



$user = $_POST['usuario'];

$pass = $_POST['pass'];


if(!preg_match("/^[a-zA-Z]{3,10}$/", $user)){
    // si la cadena de texto contiene la expresion regultar indicada
    // la expresion regular va entre plecas, indicando inicio (^) y final de la cadena ($)
    echo "El usuario no coincide con el formato solicitado";
    exit();
}

if(!preg_match("/^[a-zA-Z0-9$@.-]{8,30}$/", $pass)){
    // si la cadena de texto contiene la expresion regultar indicada
    // la expresion regular va entre plecas, indicando inicio (^) y final de la cadena ($)
    echo "La clave no coincide con el formato solicitado";
    exit();
}

// doble validacion, ya que el codigo html es manipulable
// la expresion regular del backend debe ser la misma del front

if($user == 'Melina' && $pass == 'hola'){
    session_name("LOGIN");
    session_start();
    $_SESSION['Nombre'] = 'Melina';
    $_SESSION['Apellido'] = 'Lala';
    $_SESSION['Pais'] = 'Argentina';



    if(headers_sent()){ //si se enviaron salidas al navegador, no podemos usar header //si hay encabezados previamente enviados redireccionemos con javascript 
        
        echo "<script>window.location.href='25-contador.php';</script>"; 
    }else {
        header("Location: 25-contador.php"); //redirecciona al usuario a ese archivo cuando el codigo llega a esa linea
    
    //no deben haber etqiuetas htmla ntes del codigo ni espacios en blanco que causen mostrar en apntalla (echo, html)
    }

} else {
    echo "Datos incorrectos";
}


?>