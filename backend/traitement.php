<?php
/**Connexion à la base de données**/
    $servername = 'localhost';
    $username = "root";
    $password = ""; /**mdp à voir**/
    $dbname = "fromDonnees";
    
try {
    /**Connexion établie**/
    $conn = new PDO("mysql:host=$servername;dbname=$dbname, $username, $password");
    $conn-> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e){
    echo "la connexion a échoué:" . $e->getMessage();
}

if(isset($_POST['email'])){
    
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = ("INSERT INTO 'users'( 'email', 'password' ) VALUES"(:email, :password));
    $stmt = $conn->prepare($sql);
    
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':password', $password);
    $stmt->Execute();

}
?>