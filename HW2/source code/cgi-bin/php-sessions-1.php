<?php
    session_start();
?>
<!DOCTYPE html>
<?php
    $name='';
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // collect value of input field
        $name = $_POST['username'];
    }
    $cookie_name = "user";
    $cookie_value = $name;
    if(strlen($name) > 0){
        setcookie($cookie_name, $cookie_value, time()+86400);
        $_SESSION["user"] = $cookie_value;
    }
    
?>
<html>
<body>
<h1>Session 1</h1>
<?php
    header("Cache-Control: no-cache");
    

    if($_SESSION["user"]){
        echo "name: {$_SESSION["user"]} <br> <br>";
    }
    else{
        echo "name: destroyed <br> <br>";
    }


?>
    <a href ="/cgi-bin/php-sessions-2.php">Session 2</a><br>
    <a href ="/php-cgiform.html">CGI form</a>

    <form style="margin-top:30px" action="/cgi-bin/php-destroy-session.php" method="get">
    <button type="submit">Destroy Session</button>
    </form>
</body>
</html>