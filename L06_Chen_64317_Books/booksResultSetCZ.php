<?php
include 'baza.php';
$conn = new mysqli($server, $username, $password, $database);
$query = "SELECT * FROM books";
$rs = $conn->query($query);
$conn->close();
$num = $rs->num_rows;
 ?>