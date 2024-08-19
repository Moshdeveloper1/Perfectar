<?php
if (isset($_SESSION['emailID'])) {
    # code...
    // Your OpenAI API key

    // The API endpoint for chat completions
    $url = "https://api.openai.com/v1/chat/completions";

    // Prepare the data you want to send to the API
   

    // Initialize a cURL session
    $ch = curl_init($url);

    // Set the cURL options
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "Authorization: Bearer $api_key"
    ]);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

    // Execute the request
    $response = curl_exec($ch);

    // Check for errors
    if (curl_errno($ch)) {
        echo 'Error:' . curl_error($ch);
    } else {
    // Decode the JSON response
    $response_data = json_decode($response, true);

    // Print the response
    echo $response_data['choices'][0]['message']['content'];

    
// Define the directory name
$mail =$_SESSION['emailID'];

$dirName = str_shuffle($mail);

// Check if the directory already exists
if (!is_dir($dirName)) {
    // Create the directory
    mkdir($dirName, 0777, true);
}

// File contents for each file type
$htmlContent = <<<PHP
<?php
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Project</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Hello, World!</h1>
    <script src="script.js"></script>
</body>
</html>
?>
PHP;

$cssContent = <<<CSS
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
}
h1 {
    color: #007bff;
}
CSS;

$jsContent = <<<JS
document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript is working!");
});
JS;

$phpContent = <<<PHP
<?php
echo "This is a PHP file.";
?>
PHP;

$htaccessCont = <<<HTACCESS
RewriteEngine On
RewriteBase /$dirName/
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.+)$ intro.php?url=$1 [QSA,L]
HTACCESS;
// Define file paths
$htmlFile = $dirName . '/page.php';
$cssFile = $dirName . '/style.css';
$jsFile = $dirName . '/script.js';
$htaccessFile = $dirName . '/.htaccess';
$phpFile = $dirName . '/intro.php';

// Write contents to files
file_put_contents($htmlFile, $htmlContent);
file_put_contents($cssFile, $cssContent);
file_put_contents($jsFile, $jsContent);
file_put_contents($htaccessFile,$htaccessCont);
file_put_contents($phpFile, $phpContent);

echo "Files have been created successfully!";
    }

    // Close the cURL session
    curl_close($ch);
}

?>





