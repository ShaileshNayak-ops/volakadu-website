<?php


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

echo "Name: $name\n";
echo "Email: $email\n";
echo "Subject: $subject\n";
echo "Message Lenght: " + strlen($message) + '\n';
try {
  $mail = new PHPMailer();
  $mail->IsSMTP();
  $mail->SMTPDebug  = 1;
  $mail->SMTPAuth   = TRUE;
  $mail->SMTPSecure = "tls";
  $mail->Port       = 587;
  $mail->Host       = "smtp.gmail.com";
  $mail->Username   = "nayakshailesh369@gmail.com";
  $mail->Password   = "shailesh@google";
  $mail->IsHTML(true);
  $mail->AddAddress("nayakshailesh369@gmail.com");
  $mail->SetFrom($email);
  $mail->Subject = $subject;
  $DT = date('Y-m-d H:i:s');
  $mail->Body = "
    <h3>From: $name</h3>
    <h3>Email: $email</h3>
    <h3>DT: $DT</h3>
    <br />
    $message";
  $mail->send();
  header('Location: ' . $_SERVER['HTTP_REFERER']);
} catch (Exception $e) {
  echo "Error Mail Couldnot be sent";
  echo $e->getMessage();
}
