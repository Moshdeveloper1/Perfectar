<?php
session_start();

include('connection.php');

if (isset($_SESSION['emailID'])) {
    $mailID = $_SESSION['emailID'];
    if (isset($_POST['max'])) {
        # code...
        $data =json_decode($_POST['max'],true);

       
        $mergeVar =$data['mergeVar'];
        $site1Val =$data['site1Val'];
        $workVal =$data['workVal'];
        $toPay =$data['toPay'];
        $siteLink = 'http://xxxxxxxxxxxxxxxx';
       
        if (!empty($mergeVar)) {

            $hrs = 'hrs';
            $day = 'days';
             $dateTime = new DateTime($workVal);
            // $dateTime = new DateTime($initialDateTime);

            // Check if the string contains 'hrs' or 'days'
            if (strpos($mergeVar, $hrs) !== false) {
            // Extract the number of hours
            $num = (int) mb_strcut($mergeVar, 0, strpos($mergeVar, $hrs))*60;
            $non =$num/60;
            // Add the hours to the initial date-time
            $dateTime->modify("+$non hours");
            }
            elseif (strpos($mergeVar, $day) !== false) {
            // Extract the number of days
            $num = (int) mb_strcut($mergeVar, 0, strpos($mergeVar, $day))*24*60;
            $non = $num/1440;
            $dateTime->modify("+$non days");

             
        }
        else {
            echo "Invalid time format";
            exit;
        }
        // .time()
     
        // Output the new date-time
       
        $payStat='Pending';
        $workStat='Not started';
        $dashLink = 'https://xxxxxxxxxxxxxxxxx';
        $endDate = $dateTime->format('Y-m-d H:i:s');
        $sql = "INSERT INTO sites (emailID, site_title, site_link, starting_date, end_date, pay_amount, pay_status, work_status, dashboard_link) VALUES ('$mailID', '$site1Val', '$siteLink', '$workVal', '$endDate', '$toPay', '$payStat', '$workStat', '$dashLink');";

        $trysql = mysqli_query($conn,$sql);
        if ($trysql) {
            echo '1';
            exit();
        }
        else {
            
            echo 'nice';
            exit();
        }
    }
}
}
?>