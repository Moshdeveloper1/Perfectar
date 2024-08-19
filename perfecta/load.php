<?php
session_start();
require('connection.php');

if (isset($_SESSION['emailID']) && isset($_SESSION['refNum'])) {
    $mail = $_SESSION['emailID'];

    if (isset($_POST['pure']) || isset($_FILES['avat'])) {
        $pureSrc = $_POST['pure'] ?? '';

        if (!empty($_FILES['avat']['name'])) {
            if ($_FILES['avat']['error'] === UPLOAD_ERR_OK) {
                $fileTmpPath = $_FILES['avat']['tmp_name'];
                $fileName = $_FILES['avat']['name'];
                $fileExtension = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));
                
                // Generate a new file name based on the session reference number
                $newFileName = substr($_SESSION['refNum'], strpos($_SESSION['refNum'], '-') + 1) . '.' . $fileExtension;

                // Directory where you want to save the uploaded files
                $uploadFileDir = './img/';
                $dest_path = $uploadFileDir . $newFileName;
                $timestamp = time();
                      $cacheBustingUrl = $dest_path . "?v=" . $timestamp;
                // Check if the file already exists
                if (file_exists($dest_path)) {
                    $oldMd5 = md5_file($dest_path);
                    $newMd5 = md5_file($fileTmpPath);

                    // Replace the file if its content is different
                    if ($oldMd5 !== $newMd5) {
                        if (unlink($dest_path)) {
                            $fileReplaced = true;
                        } else {
                            echo json_encode(['status' => 'error', 'message' => 'Error replacing the old file.']);
                            exit();
                        }
                    }
                    else {
                        $fileReplaced = false;
                        echo json_encode(['status' => 'success', 'path' => $cacheBustingUrl]);
                        exit();
                    }
                } else {
                    $fileReplaced = true;
                }

                // Move the uploaded file to the destination
                if ($fileReplaced && move_uploaded_file($fileTmpPath, $dest_path)) {
                   
                    $sql = "UPDATE users SET prof_img = '$dest_path' WHERE emailID = '$mail'";
                    $throwsql = mysqli_query($conn, $sql);

                    if ($throwsql) {
                        echo json_encode(['status' => 'success', 'path' => $cacheBustingUrl]);
                    } else {
                        echo json_encode(['status' => 'error', 'message' => 'There was an error updating the database.']);
                    }
                }else {
                    echo json_encode(['status' => 'error', 'path' => 'There was an error moving the uploaded file.']);
                }
            } else {
                echo json_encode(['status' => 'error', 'message' => 'File upload error.']);
            }
        } else {
            $try = "UPDATE users SET prof_img = '$pureSrc' WHERE emailID = '$mail'";
            $dosql = mysqli_query($conn, $try);

            if ($dosql) {
                echo json_encode(['status' => 'success', 'path' => $pureSrc]);
            } else {
                echo json_encode(['status' => 'error', 'message' => 'There was an error updating the database.']);
            }
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'No file or path provided.']);
    }
}
else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid session.']);
}
?>
