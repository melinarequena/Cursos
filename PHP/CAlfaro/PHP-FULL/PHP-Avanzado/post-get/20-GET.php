<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GET Y POST</title>
</head>
<body>
    <h1>FILL OUT THIS FORM PLEASEEE</h1>
    <form action="20-index.php" method="get"> <!-- QUE METODO USA Y A DONDE LO MANDA !-->
        <input type="checkbox" name="terms" required> De acuerdo con los terminos y condiciones 
        <br>
        <br>

        <input id="email" type="email" placeholder="Tu email" name="email" required>
        <br>
        <br>

        <select id="puesto" name="puesto">
            <option value="backend">Desarrollador Backend</option>
            <option value="frontend">Desarrollador Frontend</option>
            <option value="UXUI">UX/UI</option>
        </select>
        <br>
        <br>

        <button type="submit">Suscribirse</button>
    </form>
</body>
</html>