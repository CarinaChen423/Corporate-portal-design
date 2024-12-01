<!DOCTYPE html>
<html lang="pl">
<head>
<?php include 'headPartHtml.php'; ?>
 <?php include 'baza.php'; ?>
 <?php include 'booksResultSetCZ.php'; ?>
</head>
<body>
<header><?php include 'nav.php'; ?></header>
<h3>These are the books we have</h3>
<table>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
        </tr>
        <?php
        while ($row = $rs->fetch_assoc()) {
            echo "<tr><td>{$row['book_id']}</td><td>{$row['title']}</td><td>{$row['author']}</td><td>{$row['price']}</td></tr>";
        }
        ?>
    </table>
    <footer>Zhe Chen 64317 Group8</footer>
</body>
</html>
