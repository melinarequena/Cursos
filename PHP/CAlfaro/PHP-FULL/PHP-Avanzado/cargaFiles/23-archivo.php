<?php
echo $_FILES['file']['name'] . "<br>"; //recibo nombre del archivo
echo $_FILES['file']['tmp_name'] . "<br>"; //recibo ruta local del archivo
echo $_FILES['file']['type'] . "<br>"; //tipo de archivo
echo $_FILES['file']['error'] . "<br>";//error
echo $_FILES['file']['size'] . "<br>"; //tam en bytes







?>