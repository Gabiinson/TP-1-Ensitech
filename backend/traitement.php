<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];
    
    // Vérifiez les informations de connexion ici (par exemple, en interrogeant une base de données).
    // Si les informations sont correctes, vous pouvez rediriger l'utilisateur vers une page de succès.
    
    // Exemple de redirection vers une page de succès :
    header("Location: succes.php");
    exit();
}
?>