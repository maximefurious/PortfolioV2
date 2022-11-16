<?php
if (isset($_POST['email']) && !empty($_POST['email']) && isset($_POST['message']) && !empty($_POST['message'])) {
    ini_set('display_errors', 1);
    error_reporting(E_ALL);
    $from = $_POST['email'];
    $to = "maxime.boujeant@gmail.com";
    $subject = "Contact Site Web";
    $message = $_POST['message'];
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    $headers .= 'From: ' . $from . "\r\n";
    $redirection = "refresh:1;url=../index.html";
    if (mail($to, $subject, htmlspecialchars($_POST['message']), $headers)) {
        echo "The email message was sent.";
        header($redirection);
    } else {
        echo "The email message was not sent.";
        header($redirection);
    }
} else {
    echo "Veuillez remplir tous les champs";
    header($redirection);
}
