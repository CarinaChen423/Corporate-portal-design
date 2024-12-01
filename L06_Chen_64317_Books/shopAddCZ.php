<!DOCTYPE html>
<html lang="en">
<head>
<?php include 'headPartHtml.php'; ?>
 </head>
 <body>
<header>
<h1>Add New Book</h1>
<?php include 'nav.php'; ?>
</header>

<article>
We add books here:
</article>
<form action="shopAddCZ.php" method="POST">
        <table>
            <tr>
                <td>Title:</td>
                <td><input type="text" name="title" required></td>
            </tr>
            <tr>
                <td>Author:</td>
                <td><input type="text" name="author" required></td>
            </tr>
            <tr>
                <td>Price:</td>
                <td><input type="number" name="price" step="0.01" required></td>
            </tr>
            <tr>
                <td colspan="2" style="text-align:center;">
                    <input type="submit" value="Add Book">
                </td>
            </tr>
        </table>
    </form>
    <?php

    include 'baza.php';

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        $title = $_POST['title'];
        $author = $_POST['author'];
        $price = $_POST['price'];
        $title = $conn->real_escape_string($title);
        $author = $conn->real_escape_string($author);
        $price = (float)$price;

        $stmt = $conn->prepare("INSERT INTO books (title, author, price) VALUES (?, ?, ?)");
        if ($stmt) {
            $stmt->bind_param("ssd", $title, $author, $price);

            if ($stmt->execute()) {
                echo "<p style='color:green;'>Book added successfully!</p>";
            } else {
                echo "<p style='color:red;'>Error adding book: " . $stmt->error . "</p>";
            }
            $stmt->close();
        } else {
            echo "<p style='color:red;'>Failed to prepare the SQL statement: " . $conn->error . "</p>";
        }

        $conn->close();
    }
    ?>

<footer>
Zhe Chen 64317 Group8
</footer>
</body>
</html>