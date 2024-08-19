<?php


session_start();
require_once 'connection.php';

if (isset($_SESSION['emailID'])) {
    $mail = $_SESSION['emailID'];
    if (isset($_POST['calc'])) {
        $calc = json_decode($_POST['calc'], true);

        $catTitles = $calc['catTitles'];
        $mergeVar = $calc['mergeVar'];
        $diffAvg = $calc['diffAvg'];
        $inp4Value1 = $calc['inp4Value1'];
        $votersVal = $calc['votersVal'];
        $reqParam = $calc['reqParam'];

        // Base price calculation
        $basePrice = 0;

        // Category Titles
        if (!empty($catTitles)) {
            $basePrice += $catTitles * 2;
        }

        // Keywords
        if (!empty($inp4Value1)) {
            $basePrice += $inp4Value1 * 1.5;
        } elseif (!empty($diffAvg)) {
            $basePrice += floor($diffAvg) * 1.5;
        }

        // Voters
        if (!empty($votersVal)) {
            if (preg_match('/^\d+-\d+$/', $votersVal, $matches)) {
                $firstInt = $matches[1];
                $secondInt = $matches[2];
                $votersAvg = ($firstInt + $secondInt) / 2;
            } elseif ($votersVal == 'unlimited') {
                $votersAvg = 100000;
            } else {
                $votersAvg = intval($votersVal);
            }
            $basePrice += log($votersAvg + 1, 2) * 5; // Logarithmic scaling
        }

        // Merge Variable (Time)
        if (!empty($mergeVar)) {
            $hrs = 'hrs';
            $day = 'days';
            if (strpos($mergeVar, $hrs) !== false) {
                $hours = (int) mb_strcut($mergeVar, 0, strpos($mergeVar, $hrs));
            } elseif (strpos($mergeVar, $day) !== false) {
                $days = (int) mb_strcut($mergeVar, 0, strpos($mergeVar, $day));
                $hours = $days * 24;
            }
            $basePrice += log($hours + 1, 2) * 3; // Logarithmic scaling
        }

        // Required Parameters
        if (!empty($reqParam)) {
            $basePrice += count($reqParam) * 3;
        }

        // Adjust the final price to be between 5 and 1000
        $finalPrice = max(5, min(1300, $basePrice));

        // Round to the nearest whole number
        $finalPrice = round($finalPrice);

        echo number_format($finalPrice, $decimals = 0, $dec_point = ".", $thousands_sep = ",");
    }
}

?>