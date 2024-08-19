<?php
include('connection.php');

    if (isset($_POST['submit'])) {
    # code...

    function sanitizer($data) {
        $data = trim($data);
        $data = htmlspecialchars($data);
        $data = stripcslashes($data);
        return $data;
        }
    $userName  = sanitizer($_POST['name']);
    $eMail = sanitizer($_POST['usermail']);
    $passId =password_hash(sanitizer($_POST['userpass']),PASSWORD_DEFAULT) ;
    $uniqueName = str_shuffle($userName);
    $sqlCheck = "SELECT * FROM users WHERE emailID = '$eMail';";
    $doquery =  mysqli_query($conn,$sqlCheck);
    if (mysqli_num_rows($doquery)>0) {
        # code...
        header('Location:./signup?msg="existed"');
        exit();
    }
    else {
        # code...
        function generateReferalId($uniqueName){
    return $uniqueName.'-'.time().'-'.substr(md5(rand()),0,5);
    };
    $referalId = generateReferalId($uniqueName);
    $referralLink= 'http://localhost/perfecta/signUp?$ref='.$referalId;

    $sql = "INSERT INTO users (userName,emailID,passID,refNum) VALUES ('$userName','$eMail','$passId','$referralLink');";
   $runquery =  mysqli_query($conn,$sql);

   if ($runquery) {
    # code...
    header('Location:perf_login.php');
    exit();
   }
   else{
    exit();
   }
   
    }
    
}


?>