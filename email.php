<?php

$name = $_POST["name"];
$subject = $_POST["subject"];
$email = $_POST["email"];
$message = $_POST["message"];

$message = $message + " " + $email;

$headers = $email . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
 
ini_set ( "SMTP", "smtp-server.example.com" ); 
date_default_timezone_set('America/New_York');

mail("nelson.nt.tang@gmail.com", $subject, $message, $email);
header("Location: http://nelson-tang.com/iep/#/"); 
exit();

?>