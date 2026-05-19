<?php
include "timeZone.php";

function getFecha(){
    return explode(" ", date("l d m, Y - h:i"));
}


?>