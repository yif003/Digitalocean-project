<!DOCTYPE html>
<html>
<body>
<h1 align=center>General request echo PHP</h1><hr/>
<?php
    header("Cache-Control: no-cache");
    $line = trim(fgets(STDIN));
    $s = getenv('QUERY_STRING');
    $s1 = getenv('SERVER_PROTOCOL');
    $s2 = getenv('REQUEST_METHOD');
    echo "Server protocol: {$s1}<br>";
    echo "request method: {$s2}<br>";
    echo "Raw string: {$s} <br>";
    echo "message body: {$line}<br>";

?>

</body>
</html>