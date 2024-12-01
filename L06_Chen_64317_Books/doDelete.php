<?php 
 $conn = new mysqli($server, $username, $password, $database); 
 if ($delete) { 
 $query = "DELETE FROM books WHERE book_id='".$book_id."'"; 
 $conn->query($query); 
 echo "<p style='color: red;'>Book deleted successfully!</p>";
 } 
 $conn->close(); 
?> 
