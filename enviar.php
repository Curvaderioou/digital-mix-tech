<?php

$email = "atendimento@digitalmix.tech";
$senha = "Fv020385#";
$smtp = "br46-pl.valueserver.net";
$porta = "465";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require "./PHPMailer/src/Exception.php";
require "./PHPMailer/src/PHPMailer.php";
require "./PHPMailer/src/SMTP.php";

// Crie o objeto PHPMailer
$mail = new PHPMailer(true);

$body = "";
foreach ($_POST as $label => $value) {
    $body .= filter_var($label, FILTER_SANITIZE_STRING) . ": " . filter_var($value, FILTER_SANITIZE_STRING) . "<br>";
}

$email_contato = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
$email_valid = filter_var($email_contato, FILTER_VALIDATE_EMAIL);

if (!$email_valid) {
    throw new Exception('Email inválido');
}

// Se um arquivo foi enviado
if ($_FILES['arquivo']['error'] === UPLOAD_ERR_OK) {
    $caminho_temporario = $_FILES['arquivo']['tmp_name'];
    $nome_arquivo = $_FILES['arquivo']['name'];

    // Adiciona o arquivo como anexo
    $mail->addAttachment($caminho_temporario, $nome_arquivo);
}

try {
    $mail->isSMTP();
    $mail->Host       = $smtp;
    $mail->SMTPAuth   = true;
    $mail->Username   = $email;
    $mail->Password   = $senha;
    $mail->SMTPSecure = "ssl";
    $mail->Port       = $porta;
    $mail->CharSet    = "utf-8";

    // Recipients
    $mail->setFrom($email, "Formulário");
    $mail->addAddress($email, "Formulário");
    $mail->addReplyTo($email_contato);

    $mail->isHTML(true);
    $mail->Subject = "Formulário Email";
    $mail->Body    = $body;

    $mail->send();
    echo "<h1>Mensagem enviada.</h1>";
} catch (Exception $e) {
    echo "<h1>Erro, mensagem não enviada.</h1>";
}
