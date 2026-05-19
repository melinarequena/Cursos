<?php
//crear carpeta donde se van a alojar los archivos
if(!file_exists("archivos")){ //si un directorio o carpeta existe
    if(!mkdir("archivos", 0777)){
        echo "error al crear el directorio";
        exit();
    } //0777 permisos de escritura y lectura
}

if($_FILES['file']['size'] / 1024 > 3072){ //calculamos cuanto pesa nuestro archivo en megabytes, si es mayor a 3mb (3 * 1024) chau
    echo $_FILES['file']['size'] / 1024 . "<br>";
    echo "Tamaño de archivo no soportado";
    exit();
} else {
    echo $_FILES['file']['size'] / 1024 / 1024 . "<br>";
}

chmod("archivos", 0777); //darle permisos a una carpeta

if(move_uploaded_file($_FILES['file']['tmp_name'], "archivos/" . $_FILES['file']['name'])){
    echo "archivo subido con exito";
}else{
    echo "error al subir el archivo";
}

?>