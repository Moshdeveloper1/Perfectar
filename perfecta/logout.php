<?php
session_start();
header('Location:./login');

session_unset();
session_destroy();

exit();

?>