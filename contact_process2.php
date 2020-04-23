<?php

    $to = "kontakt@e-lekcje.com";
    $from = $_REQUEST['email'];
    $name = $_REQUEST['name'];
    $number = $_REQUEST['number'];
$temat = $_REQUEST['subject'];
$wiadomosc = $_REQUEST['message'];


    $headers = "From: $from";
	$headers = "From: " . $from . "\r\n";
	$headers .= "Reply-To: ". $from . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $subject = "Formularz kontaktowy - $temat";

    $logo = 'img/logo.png';
    $link = '#';

	$message ='<table style="width:100%">
        <tbody><tr>
                <td>Imię i nazwisko:  '.$name.'</td>
        </tr>
        <tr><td> nr telefonu: '.$number.'</td></tr>
		<tr><td> Wiadomość: '.$wiadomosc.'</td></tr>

</tbody></table>';

   


$send = mail($to, $subject, $message, $headers);

?>