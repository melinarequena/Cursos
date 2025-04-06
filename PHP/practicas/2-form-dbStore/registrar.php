<?php 

$conexion = new mysqli("localhost", "root", "", "usuarios_db"); //nos conectamos a la db

if($conexion->connect_error){ //verif conexion
    die("Conexion fallida: " . $conexion->connect_error);
    //imprimimos codigo de error?
}

//obtenemos datos de form

$email = $_POST['email'];
$nombre = $_POST['nombre'];

//insertamos datos en bd - insertamos cod sql

$sql = "INSERT INTO usuarios (nombre, email) VALUES ('$nombre', '$email')";

//checkeamos insercion exitosa de sql

if ($conexion->query($sql) === TRUE) {
    echo "Registro Exitoso! ✅";
}else {
    echo "Error en el registro: " . $conexion->error;
}

//cerrar sesion
$conexion->close();

?>