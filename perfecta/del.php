<?php
session_start();
require_once 'connection.php';


if (isset($_SESSION['emailID'])) {
    # code...
    $mail = $_SESSION['emailID'];
    $del = "SELECT * FROM users WHERE emailID='$mail';";
    $doquery=mysqli_query($conn, $del);
    
    if ($doquery) {

        if (mysqli_num_rows($doquery)>0) {
        
            $row = mysqli_fetch_assoc($doquery);
            $fileName = $row['prof_img'];
            $fileArray = ['./img/download (5).png','./img/download (4).png','./img/download (3).png','./img/download (2).png','./img/download (1).png'];

            if (!in_array($fileName,$fileArray)&& file_exists($fileName)) {
            echo $fileName;
                unlink($fileName);
            }
        }
            # code...
         $sql = "DELETE FROM users WHERE emailID ='$mail';";
         $run= mysqli_query($conn, $sql);
        if ($run) {
            # code...
            header('Location:./login');
            session_unset();
            session_destroy();
   
            exit();
        }
    }  
}

?>