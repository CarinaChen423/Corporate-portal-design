<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'headPartHtml.php'; ?>
    <?php include 'baza.php'; ?>
    <?php include 'booksResultSetCZ.php'; ?>
</head>
<body>
    <header><?php include 'nav.php'; ?></header>
    <h2>Delete a Book</h2>
    <form action="shopStartCZ.php" method="POST">
        <label for="delete">Select a book to delete:</label>
        <select name="delete" id="delete">
            <?php
            while ($row = $rs->fetch_assoc()) {
                echo "<option value='{$row['book_id']}'>{$row['title']} - {$row['author']} - {$row['price']}</option>";
            }
            ?>
        </select>
        <br><br>
        <input type="submit" value="Delete Book">
    </form>
    <footer>Zhe Chen 64317 Group8</footer>
</body>
</html>
