<?php

session_start();

if (isset($_SESSION['emailID']) && isset($_POST['things']) && isset($_FILES['inp3Val1'])) {
    $mail = $_SESSION['emailID'];
    $thin =json_decode($_POST['things']);
    $site1Val = $thin['site1Val'];
    $site2Val = $thin['site2Val'];
    $reqParam = $thin['reqParam'];
    $allParam = $thin['allParam'];
    $changeVars = $thin['changeVars'];
    $dynamicVars = $thin['dynamicVars'];

    
    
   
    // // Prepare the file
    // $fileTmpPath = $_FILES['inp3Val1']['tmp_name'];
    // $fileName = $_FILES['inp3Val1']['name'];
    // $fileSize = $_FILES['inp3Val1']['size'];
    // $fileType = $_FILES['inp3Val1']['type'];

    // // Ensure the file upload was successful
    // if (is_uploaded_file($fileTmpPath)) {
        // Move the file to a specific directory (optional)
        if (empty($_FILES['inp3Val1'])) {
    $prompt = "Create a modern, captivating login page for a typical $site2Val website ";
    $prompt .= "that uses $site1Val as the site title. ";
    
    if (!empty($reqParam)) {
        $prompt .= "Use the values from the object variable of $reqParam as labels for each login parameter. ";
    }
} else {
    $prompt = "Create a modern, captivating login page for a typical $site2Val website ";
    $prompt .= "that uses $site1Val as the site title. ";
    $prompt .= "Incorporate the uploaded file as the brand logo. ";
    
    if (!empty($reqParam)) {
        $prompt .= "Use the values from the object variable of $reqParam as labels for each login parameter. ";
    }
}

if (!empty($changeVars) || !empty($allVars)) {
    $prompt .= "Additionally, create a separate image that blends with the login page style. ";
    $prompt .= "This image should contain form fields using $dynamicvar values of keys as category questions. ";
    $prompt .= "Match the output of cat- removal of the keys to the first 6 letters of keys ";
    $prompt .= "from either $changeVars or $allVars. ";
}
        $uploadFileDir = './uploaded_images/';
        // $dest_path = $uploadFileDir . $fileName;
         $image_name = basename($_FILES['inp3Val1']['name']);
        $imageUrl =  $uploadFileDir . $image_name;

        if (move_uploaded_file($_FILES['inp3Val1']['tmp_name'], $imageUrl)) {
            // File successfully uploaded
             // Assuming you host this image on your server

            // Prepare the prompt
            $prompt = "Create a captivating login page if reqParam values as input form which is from thin param is not null or empty and use the image located at $imageUrl if it is not null or empty as the brand logo and if empty use any other logo that matches as the brand logo. Ensure the background color combination fits the brand logo. Generate an additional image of the site that rhymes with the login page that uses the parameter in thin param that contains the sitename as site1val variable,let the image match the site type of variable site2val,then create the form fields that uses dynamicvars values as each category title and match the string removed cat- form of each key and map it with the first six letters of the key of the variable that isnt empty amongst changevars or allvars.";

            // Prepare the API data
         
            $data = [
            "model" => "gpt-4",
              "prompt" => "create me a captivating login page for a variable of site2val type image using the image from the inp3val variable as the brand logo and the reqparam object variable values of key to create the required input if it is not empty making sure the background color combination fits the brand logo. create separately the image of the site and make sure it rhymes with the login using the dynamicvars each values of the key as each category and mapping the cat- removed keys result to the one that matches the first six keys of the variable that is not null amongst changevars or allvars and use their values as a radio input under each of the categories. Make sure you follow each step carefully and use only the max required of the dynamicvars allvars or changevars produce.",
            "param" => [
                "things" => $_POST['things'],
                "inp3Val1" => $imageUrl
            ],
            "n" => 4,
            "size" => "1024x1024"
            ];
            // Set up cURL
            $ch = curl_init('https://api.openai.com/v1/images/generations');

            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, [
                "Content-Type: application/json",
                "Authorization: Bearer $api_key"
            ]);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

            // Execute the request
            $response = curl_exec($ch);

            // Handle errors
            if (curl_errno($ch)) {
                echo 'Error:' . curl_error($ch);
            } else {
                // Decode the JSON response
                $response_data = json_decode($response, true);

                // Check if the response contains the images
                if (isset($response_data['data'])) {
                    foreach ($response_data['data'] as $image) {
                        echo '<img src="' . $image['url'] . '" alt="Generated Image" />';
                    }
                } else {
                    echo 'Error: ';
                }
            }

            // Close cURL
            curl_close($ch);
        } else {
            echo 'There was an error moving the uploaded file.';
        }
    } else {
        echo 'No file uploaded or file upload error.';
    }
//  else {
//     echo 'Required data not provided.';
// }

?>