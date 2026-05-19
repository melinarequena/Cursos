<?php


$terms = $_POST['terms'];
$email = $_POST['email'];
$puesto = $_POST['puesto'];

echo $terms . "<br>";
echo $email . "<br>";
echo $puesto . "<br>";


$terms = $_GET['terms']; //los datos se ven en la url
$email = $_GET['email'];
$puesto = $_GET['puesto'];

echo $terms . "<br>";
echo $email . "<br>";
echo $puesto . "<br>";


?>