<?php
    session_name("LOGIN");
    session_start();

    session_destroy(); //destruir toda la informacion de la sesion: varaibles de sesion, ids

    // session_unset(); ELIMINA VARIABLES DE SESION 
        // --> es lo mismo que poner unset($_session(nombre))

    if(headers_sent()){ 
        
        echo "<script>window.location.href='25-index.php';</script>"; 
    }else {
        header("Location: 25-index.php");
    }    

?>