<?php

$name =$_POST['name'];
$month =$_POST['month'];
$peoples =$_POST['peoples'];
$tel=$_POST['tel'];

$to="bobrovsi1988@gmail.com";
$subject="Client";
$message="
name :$name \r\n
 month: $month \r\n
 peoples: $peoples \r\n
 tel : $tel

";
/* Для отправки HTML-почты вы можете установить шапку Content-type. */
$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";

/* дополнительные шапки */
$headers .= "From: Birthday Reminder <birthday@example.com>\r\n";
$headers .= "Cc: birthdayarchive@example.com\r\n";
$headers .= "Bcc: birthdaycheck@example.com\r\n";

mail($to, $subject, $message, $headers);