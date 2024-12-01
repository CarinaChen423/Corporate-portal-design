<?php
$username = 'root';
$password = '';
$server = 'localhost';
$database = 'shop_chen';

$conn = new mysqli($server, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>