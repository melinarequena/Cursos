<?php


if(1 < 2): //forma 1 de if
    echo '1 es menor que 2';

endif;


if(1 < 2){
    echo '1 es menor que 2';
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo 1</title>
</head>
<body>
    <?php if(2 > 1): ?>
        <h1>hola</h1>
    <?php endif; ?>
</body>
</html>