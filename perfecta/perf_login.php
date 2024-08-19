
<?php
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perfectvote|Login page</title>
    <link rel="stylesheet" href="log.css">
</head>

<body>
    <main>
        <div class="login-info">
            <form action="login.php" method="post">
                <table>
                    <thead>
                            <th><img src="./download (2).png" alt="" srcset="" ></th>
                    </thead>
                    <tbody>
                        <tr>
                           
                            <td><label for="Email">Email:</label><input type="email" name="email" id="mail-info" required></td>
                        </tr>
                        <tr>
                            <td><label for="Password">Password:</label><input type="password" name="phrase" id="pass-info"  minlength="8" maxlength="14" required></td>
                            
                        </tr>
                        <tr>
                            <td><a href="">Forget password?</a></td>
                        </tr>
                        <tr>
                            <td><button name='submit' type="submit">Login</button></td>
                        </tr>
                        <tr>
                            <td><a href=""><button type="button">Login using Google</button></a></td>
                        </tr>
                        <tr>
                            <td><a href=""><button type="button">Login using Facebook</button></a></td>
                        </tr>
                        
                        <tr>
                            <td>I don't have an account yet?<a href="signup">Sign up &RightArrow;</a></td>
                        </tr>
                    </tbody>
                    <tfoot>
                       
                        <tr><td>Powered by Big3 tech corporation Inc.</td></tr>
                    </tfoot>
                </table>
            </form>
            <span></span>
        </div>


    </main>

</body>

</html>