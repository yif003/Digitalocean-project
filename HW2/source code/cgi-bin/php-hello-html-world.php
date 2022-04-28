<!DOCTYPE html>

<html>
<body>
<h1 align=center>Hello HTML World</h1><hr/>
<?php
header("Cache-Control: no-cache");
echo "Hello World!";
echo "<br>";
$date = date('m/d/Y h:i:s a', time());
$ip = getenv('REMOTE_ADDR');
echo "Current Time is: {$date}";
echo "<br>";
echo "Current IP adress is {$ip}";
?>

</body>
</html>