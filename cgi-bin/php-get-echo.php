<!DOCTYPE html>
<html>
<body>
<h1 align=center>Get echo PHP</h1><hr/>
<?php
    header("Cache-Control: no-cache");

    $s = getenv('QUERY_STRING');
    echo "Raw string: {$s} <br>";

    $format_ = explode("=", $s);
    echo "formated string: {$format_[1]}";

?>

</body>
</html>