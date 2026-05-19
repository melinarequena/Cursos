<?php

/*
2 - en un almacen se hace un 20% de descuento a clientes cuya compra supera los $100, cual sera la cantidad que pagara una persona por su compra?*/

$costoCompra = 150.50;

if($costoCompra > 100){
    echo $costoCompra * 0.80 . " es el valor total de la compra";
} else
echo "{$costoCompra} es el valor total de la compra";

?>