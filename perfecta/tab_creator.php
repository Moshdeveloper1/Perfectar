<?php
session_start();
require_once 'connection.php';
    if (isset($_SESSION['emailID'])) {
                # code...
                
            $mailId = $_SESSION['emailID'];
            $case = "SELECT * FROM sites WHERE emailID = '$mailId';";
            $try = mysqli_query($conn,$case);
            $numRows =mysqli_num_rows($try);

            if ($numRows>0) {
            
                # code...
                 $info=[];
                    $i =1;
                    while ($row = mysqli_fetch_assoc($try)) {
                        # code...
                        $temp = ['S/N' => $i,
                                'Site title' =>$row['site_title'],
                                'Date created' =>$row['create_date'],
                                'Site link'=> $row['site_link'],
                                'Ending date'=> $row['end_date'],
                                'Payment status'=>$row['pay_status'],
                                'Site status'=> $row['work_status'],
                                'Result'=> $row['dashboard_link'],
                        ];
                        $info[]=(object)$temp;
                         
                        $i++;
                        
                    }
                    //  border="1"
                $thead = array_keys(get_object_vars($info[0]));
                $table='<table class ="activities-table">';
                $table.='<thead>';
                $table.='<tr>';
                foreach ($thead as $key) {
                    # code...
                    $table.= '<th>'.$key.'</th>';
                }
                 $table.="</tr>";
                 $table.="</thead>";
                foreach($info as $horizon){
                     $table.="<tr>";
                    foreach($horizon as $key =>$value){
                      
                        if ($key =='Result') {
                            # code...
                            $table .= '<td><a target="_blank" href='.$value.' disabled>Check result</td>';
                        }
                        else {
                            # code...
                              if ($key =='Site link') {
                                # code...
                                $table .= '<td class="site-link">'.$value.'</td>';
                            }
                            else {
                                # code...
                                $table .= '<td>'.$value.'</td>';
                            }
                             
                        }
                       
                    }
                     $table.="</tr>";
                }
                $table.="</table>";
                echo $table;
                exit();
            }
            else {

                echo 'all';
                exit();
            }
           
        
    }
    else {
        # code...
        header('Location:./login');
        exit();
    }
?>
            
