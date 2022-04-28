<!DOCTYPE html>
<html>
<body>
<h1 align=center>Environment variable</h1><hr/>
<?php
header("Cache-Control: no-cache");

$env_array =getenv();
    foreach($_SERVER as $key_name => $key_value){
        echo "{$key_name}: {$key_value} <br>";
    }

?>

</body>
</html>