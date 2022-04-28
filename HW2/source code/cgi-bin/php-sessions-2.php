<?php
    session_start();
?>
<!DOCTYPE html>
<html>
<body>
<h1>Session 2</h1>
<?php
    header("Cache-Control: no-cache");
    
    if($_SESSION["user"]){
        echo "name: {$_SESSION["user"]} <br> <br>";
    }
    else{
        echo "name: destroyed <br> <br>";
    }

?>
    <a href ="/cgi-bin/php-sessions-1.php">Session 1</a><br>
    <a href ="/php-cgiform.html">CGI form</a>

    <form style="margin-top:30px" action="/cgi-bin/php-destroy-session.php" method="get">
    <button type="submit">Destroy Session</button>
    </form>
</body>
</html>