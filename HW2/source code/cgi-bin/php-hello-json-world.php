<?php
header("Cache-Control: no-cache");
header("Content-type: application/json");
$date = date('m/d/Y h:i:s a', time());
$ip = getenv('REMOTE_ADDR');

$message = array('title' => 'Hello, php!', 'heading' => 'Hello, php!', 'message' => 'This page was generated with the php programming language', 'time' => $date, 'IP' => $ip);

$s = json_encode($message, JSON_PRETTY_PRINT);
echo $s;
?>