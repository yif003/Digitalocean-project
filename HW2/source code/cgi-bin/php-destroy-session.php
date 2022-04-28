<?php
    session_start();
?>
<!DOCTYPE html>

<html>
<body>
<h1>Destroy session</h1>
<?php
    header("Cache-Control: no-cache");
    
    session_unset();

    session_destroy();

?>
    <a href ="/cgi-bin/php-sessions-1.php">Session 1</a><br>
    <a href ="/cgi-bin/php-sessions-2.php">Session 2</a><br>
    <a href ="/php-cgiform.html">CGI form</a>
</body>
</html>