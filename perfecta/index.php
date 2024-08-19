<?php

require_once './router.php';
// echo $currentUri,$currentMethod;


Router::handle ('GET','','./perfecta.php');
Router::handle ('GET','login','./perf_login.php');
Router::handle ('GET','signup','./perf_signup.php');
Router::handle ('GET','dashboard','./perf_user_dashboard.php');
Router::handle ('GET','admin','./perf_admin_dashboard.php');
// header("Location: /404.php");
exit();
// Router::dispatch(); 

// Get the requested URL path
// $requestUri = $_SERVER['REQUEST_URI'];

// Remove the query string from the URL if present
// $requestUri = parse_url($requestUri, PHP_URL_PATH);

// Define your routes
// switch ($requestUri) {
//     case './home':
//         Router::handle('GET','./home','./perfecta.php');
//         break;
//     case './signup':
//         Router::handle('GET','./signup','./perf_sign.php');
//         // require_once '';
//         break;
//     case './login':
//         Router::handle('GET','./login','./perf_login.php');
//         break;
//         case './dashboard':
//              Router::handle('GET','./dashboard','./perf_user_dashboard.php');
//         break;

//     default:
//         require '404.php';
//         break;
// }

?>