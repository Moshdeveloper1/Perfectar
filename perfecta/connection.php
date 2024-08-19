<?php
$server = 'localhost';
$users = 'root';
$pass = '';
$database = 'perfect_table';


$conn = mysqli_connect($server,$users,$pass,$database);
if ($conn-> connect_error) {
    # code...
    die();
    exit();
}
?>