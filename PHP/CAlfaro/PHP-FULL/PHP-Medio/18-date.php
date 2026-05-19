<?php 
// retorna fecha en formato eeuu

date_default_timezone_set("America/Argentina/Buenos_Aires"); //seteamos time zone

echo date("d/m/Y"); //formato de fecha 18/06/2025

echo "<br>";

echo date("l, d M Y - H:i:s"); //formato de fecha   h formato 12 || H formato 24


?>