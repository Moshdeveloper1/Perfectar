<?php
session_start();

include 'connection.php';

if (isset($_POST['submit'])) {
    # code...
    $mailId = $_POST['email'];
    $passKey = $_POST['phrase'];
    // $linkUrl = 
    if ($mailId ==='jimohmoshood07@gmail.com'&& $passKey==='@Bigmosh17') {
        # code...
        $_SESSION['emailID'] = 'jimohmoshood07@gmail.com';
        header('Location:./admin');
        exit();
    }
    // function passCheck(){
        
    // }
    
    $sql = "SELECT * FROM users WHERE emailID = '$mailId';";

    $runquery = mysqli_query($conn,$sql);
    
    if (mysqli_num_rows($runquery)>0) {
        # code...
             $row = mysqli_fetch_assoc($runquery);
            # code...
            if (password_verify($passKey,$row['passID'])) {
                # code... @1234qwe
                 $_SESSION['emailID'] = $row['emailID'];
                 $_SESSION['userName'] = $row['userName'];
                 $_SESSION['refNum'] = $row['refNum'];
                  $_SESSION['prof_img'] = $row['prof_img'];
                 header('Location:./dashboard');
                
            }
            else {
                header('Location:./login?msg="false"');
                exit();
            }
           
        
    }
    
}

?>