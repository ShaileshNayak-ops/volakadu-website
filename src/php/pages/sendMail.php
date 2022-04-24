<?php


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';
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
  $mail->SetFrom("neelesh1nayak@gmail.com");
  $mail->Subject = "Test is Test Email sent via Gmail SMTP Server using PHP Mailer";
  $mail->Body = "<b>This is a Test Email sent via Gmail SMTP Server using PHP mailer class.</b>";
  $mail->send();
} catch (Exception $e) {
  echo "Error Mail Couldnot be sent";
  echo $e->getMessage();
}
