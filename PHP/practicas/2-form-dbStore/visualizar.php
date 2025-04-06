<?php 
$conexion = new mysqli("localhost", "root", "", "usuarios_db"); //nos conectamos a la db

if($conexion->connect_error){ //verif conexion
    die("Conexion fallida: " . $conexion->connect_error);
    //imprimimos codigo de error?
}


$sql = "SELECT * FROM usuarios";

$resultado = $conexion->query($sql);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LISTA DE usuarios</title>
</head>
<body>
    <table border="1" cellpadding="10">
        <tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>EMAIL</th>
        </tr>

        <?php 
        while($fila = $resultado->fetch_assoc()): ?>
            <tr>
                <td><?= $fila['id'] ?></td>
                <td><?= $fila['nombre'] ?></td>
                <td><?= $fila['email'] ?></td>
            </tr>

        <?php endwhile; ?>

    </table>
</body>
</html>

<?php 
$conexion->close();
?>