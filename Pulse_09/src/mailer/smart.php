<?php 

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

require_once('phpmailer/PHPMailerAutoload.php');
$mailer = new PHPMailer;
$mailer->CharSet = 'utf-8';

// $mailer->SMTPDebug = 3;                               // Enable verbose debug output

$mailer->isSMTP();                                      // Set mailer to use SMTP
$mailer->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mailer->SMTPAuth = true;                               // Enable SMTP authentication
$mailer->Username = '';                 // Наш логин
$mailer->Password = '';                           // Наш пароль от ящика
$mailer->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mailer->Port = 465;                                    // TCP port to connect to
 
$mailer->setFrom('', 'Pulse');   // От кого письмо 
$mailer->addAddress('kuodtaynrljqqyarwm@awdrt.net');     // Add a recipient
//$mailer->addAddress('ellen@example.com');               // Name is optional
//$mailer->addReplyTo('info@example.com', 'Information');
//$mailer->addCC('cc@example.com');
//$mailer->addBCC('bcc@example.com');
//$mailer->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mailer->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mailer->isHTML(true);                                  // Set email format to HTML

$mailer->Subject = 'Данные';
$mailer->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>
	Номер телефона: ' . $phone . '<br>
	E-mail: ' . $email . '';

if(!$mailer->send()) {
    return false;
} else {
    return true;
}

?>