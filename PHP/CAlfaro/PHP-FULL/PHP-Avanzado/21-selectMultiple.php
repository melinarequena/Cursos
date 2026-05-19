<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GET Y POST</title>
</head>
<body>
    <h1>FILL OUT THIS FORM PLEASEEE</h1>
    <form action="21-index.php" method="post"> <!-- QUE METODO USA Y A DONDE LO MANDA !-->
        <label for="checkbox-1">
            <input type="checkbox" value="Coso1" name="coso[]" id="checkbox-1">  <!-- le agregamos el mismo name y [] !-->
        Coso 1</label>    
        
        <br>
        
        <label for="checkbox-2">
            <input type="checkbox" value="Coso2" name="coso[]" id="checkbox-2"> 
        Coso 2</label>   
        <br>

        <label for="checkbox-3">
        <input type="checkbox" value="Coso3" name="coso[]" id="checkbox-3">       
        Coso 3</label>  
        <br>
        <br>


        <select id="puesto" name="puestos[]" multiple> <!-- multiples opciones y las almacena en un array !-->
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