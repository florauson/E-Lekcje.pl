<?php

    $to = "kontakt@e-lekcje.com";
    $from = $_REQUEST['email'];
    $name = $_REQUEST['name'];
    $number = $_REQUEST['number'];
	$przedmiot1 = $_POST['przedmiot1'];
	$przedmiot2 = $_POST['przedmiot2'];
	$przedmiot3 = $_POST['przedmiot3'];
	$przedmiot4 = $_POST['przedmiot4'];
	$kto=$_POST['kim'];



	$inna = $_REQUEST['inna'];
    $headers = "From: $from";
	$headers = "From: " . $from . "\r\n";
	$headers .= "Reply-To: ". $from . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $subject = "Nowe zapytanie formularza - $name";

    $logo = 'img/logo.png';
    $link = '#';

	$message ='<table style="width:100%">
        <tbody><tr>
                <td>Imię i nazwisko:  '.$name.'</td>
		</tr>
		<tr><td> Kto: '.$kto.'</td></tr>
		<tr><td> Numer telefonu: '.$number.'</td></tr>
		<tr><td>Angielski: '.$przedmiot1.'</td></tr>
		<tr><td>Matematyka: '.$przedmiot2.'</td></tr>
		<tr><td>Informatyka: '.$przedmiot3.'</td></tr>
		<tr><td>pomoc w lekcjach: '.$przedmiot4.'</td></tr>
		<tr><td> Inne: '.$inna.'</td></tr>
</tbody></table>';

   


$send = mail($to, $subject, $message, $headers);

?>