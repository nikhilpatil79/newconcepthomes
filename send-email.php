<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // If using Composer
// Or manually include PHPMailer files if not using Composer

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name    = strip_tags(trim($_POST["name"]));
    $email   = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone   = strip_tags(trim($_POST["contact-phone"]));
    $subject = strip_tags(trim($_POST["contactsubject"]));
    $message = trim($_POST["message"]);

    $mail = new PHPMailer(true);

    try {
        // SMTP settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com'; // Replace with your SMTP server
        $mail->SMTPAuth   = true;
        $mail->Username   = 'nikseven9@gmail.com';     // Your email
        $mail->Password   = 'lcxk auys xgrk idke';        // App password or SMTP passkey
        $mail->SMTPSecure = 'tls';                      // 'ssl' or 'tls'
        $mail->Port       = 587;                         // 465 for SSL, 587 for TLS

        // Email content
        $mail->setFrom('nikseven9@gmail.com', 'NewConceptHomes');
        $mail->addAddress('nikilpatil079@gmail.com');   // Destination

        $mail->Subject = "New Contact Form Submission From NewConceptHomes: $subject";
        $mail->Body    = "Name: $name\nEmail: $email\nPhone: $phone\nMessage:\n$message";

        $mail->send();
        echo 'success';
    } catch (Exception $e) {
        echo 'error: ' . $mail->ErrorInfo;
    }
}
?>
