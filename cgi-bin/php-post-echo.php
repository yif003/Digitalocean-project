<!DOCTYPE html>
<html>
<body>
<h1 align=center>Post echo PHP</h1><hr/>
<?php
    header("Cache-Control: no-cache");
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // collect value of input field
        $name = $_POST['username'];
    }
    echo "message body: {$name}";

?>

</body>
</html>