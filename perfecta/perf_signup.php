<?php
// session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perfectvote|Signup page</title>
    <link rel="stylesheet" href="sign.css">
</head>

<body>
    <main>
        <div class="login-info">
         <span></span>
            <form action="signup.php" method="post" >
                <table>
                    <thead>
                        <th><img src="./download (2).png" alt="" srcset=""></th>
                    </thead>
                    <tbody>
                        <tr>
                        
                            <td><label for="Username">Username:</label><input type="text" name="name" id="Username" required>
                            </td>
                        </tr>
                        <tr>

                            <td><label for="Email">Email:</label><input type="email" name="usermail" id="mail-info" required>
                            </td>
                        </tr>
                        <tr>
                            <td><label for="Password">Password:</label><input type="password" name="userpass" id="pass-info"
                                    minlength="8" maxlength="14" required></td>

                        </tr>
                      
                        <tr>
                            <td><button type="submit" name="submit">Sign up</button></td>
                        </tr>
                        <tr>
                            <td><a href=""><button type="button">Sign up using Google</button></a></td>
                        </tr>
                        <tr>
                            <td><a href=""><button type="button">Sign up using Facebook</button></a></td>
                        </tr>
                        
                    </tbody>
                    <tfoot>

                        <tr>
                            <td>Powered by Big3 tech corporation Inc.</td>
                        </tr>
                    </tfoot>
                </table>
            </form>

        </div>


    </main>

</body>

</html>