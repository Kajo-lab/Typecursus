<?php
// TODO backend: Controleer of ingelogd, anders naar de inlogpagina.


// TODO backend: pagina voor beheerder uitwerken
$mysqli = new mysqli('localhost', 'root', 'root', 'bedrijf');
$mysqli_result = $mysqli->query('SELECT * FROM medewerkers');
echo $mysqli_result->num_rows;

error_reporting(E_ALL);
ini_set('display_errors',1);