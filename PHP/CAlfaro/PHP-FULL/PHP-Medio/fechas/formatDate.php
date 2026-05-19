<?php
include "date.php";


function formatDate(){
    $finalDate = "";
    foreach(getFecha() as $pieceOfDate){
        $finalDate .= match($pieceOfDate){
            'Monday' => 'Lunes ',
            'Tuesday' => 'Martes ',
            'Wednesday' => 'Miercoles ',
            'Thursday' => 'Jueves ',
            'Friday' => 'Viernes ',
            default => " {$pieceOfDate} ",
        };
    }
    return $finalDate;
}

?>