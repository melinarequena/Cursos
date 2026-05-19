<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CargaFile</title>
</head>
<body>
    <h3>Carga tu archivo</h3>
    <form action="23-carga.php" method="post" enctype="multipart/form-data" class="formularioAjax"> <!-- como se codifican los datos del form antes de enviarse al servidor: con multipart form data cada campo del formulaario se separa en partes individuales !-->
        <input type="file" name="file" placeholder="Suba su archivo" accept=".pdf, .png"> <!-- acepta solo pdf y png!-->
        <br>
        <button type="submit">Confirmar</button>
    </form>

    <br>

    <form action="23-carga.php" method="post" enctype="multipart/form-data" class="formularioAjax"> <!-- como se codifican los datos del form antes de enviarse al servidor: con multipart form data cada campo del formulaario se separa en partes individuales !-->
        <input type="file" name="file" placeholder="Suba su archivo" accept=".pdf, .png"> <!-- acepta solo pdf y png!-->
        <br>
        <button type="submit">Confirmar</button>
    </form>    

    <script src="23-ajax.js"></script>
</body>
</html>