<?php

class Router{
    public static function handle($method ,$path, $filename){
        $currentMethod =$_SERVER['REQUEST_METHOD'];
        
         $currentUri = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/perfecta/');
         if ($currentMethod!=$method) {
            # code...
            // echo $method;
            return false;
         }
        //  $pattern = '/^\/'.$path.'\/(\d+):ID/';
         if ($path === $currentUri) {

            if (file_exists($filename)) {
                require $filename;
                exit();
            } 
            else {
                // Handle file not found error
                // header('Location:404.php');
                exit();
            }
        }
         return false;
    }
}

// class Router {
//     private static $routes = [];

//     public static function handle($method, $uri, $file) {
//         self::$routes[] = [
//             'method' => $method,
//             'uri' => $uri,
//             'file' => $file
//         ];
//     }

//     public static function dispatch() {
//         $requestMethod = $_SERVER['REQUEST_METHOD'];
        // $requestUri = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');
        
        
//         foreach (self::$routes as $route) {
//             if ($requestMethod == $route['method'] && $requestUri == $route['uri']) {
//                 echo $requestUri,$route['file'];
//                 require $route['file'];
//                 return;
//             }
//         }
//         // If no route matches, handle 404 or redirect to a default page
//         http_response_code(404);
//         echo "404 Not Found";
//     }
// }

// // Call the dispatch method to process the current request
// Router::dispatch();

?>