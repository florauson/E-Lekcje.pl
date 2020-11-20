<?php

    $to = "kontakt@e-lekcje.com";
    $from = $_REQUEST['email'];
    $name = $_REQUEST['name'];
    $number = $_REQUEST['number'];
	$ang = $_POST['ang'];
	$mat = $_POST['mat'];
	$infor = $_POST['infor'];
	$fiz = $_POST['fiz'];
	$niem = $_POST['niem'];
	$opieka = $_POST['opieka'];
	$pol = $_POST['pol'];
$bio = $_POST['bio'];
$chem=$_POST['chem'];
	$ang_level = $_POST['ang_level'];
	$mat_level  = $_POST['mat_level'];
	$infor_level  = $_POST['infor_level'];
	$fiz_level  = $_POST['fiz_level'];
	$niem_level  = $_POST['niem_level'];
	$opieka_level  = $_POST['opieka_level'];
	$inny_level  = $_POST['inny_level'];
	$bio_level = $_POST['bio_level'];
	$chem_level=$_POST['chem_level'];
	$pol_level=$_POST['pol_level'];
	$probna= $_POST['probna'];
	$kto=$_POST['kim'];
	$dodatkowe=$_POST['dodatkowa'];



	$inna = $_REQUEST['inna'];
    $headers = "From: $from";
	$headers = "From: " . $from . "\r\n";
	$headers .= "Reply-To: ". $from . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $subject = "Nowe zapytanie formularza - $name";

    $logo = 'img/logo.png';
    $link = '#';

	$message ='<table>
        <tbody><tr>
                <td>Imię i nazwisko:  '.$name.'</td>
		</tr>
		<tr><td> Kto: '.$kto.'</td></tr>
		<tr><td> Numer telefonu: '.$number.'</td></tr>
		<tr><td>Angielski: '.$ang.'</td><td> poziom: '.$ang_level.'</td></tr>
		<tr><td>Matematyka: '.$mat.'</td><td> poziom: '.$mat_level.'</td></tr>
		<tr><td>Informatyka: '.$infor.'</td><td> poziom: '.$infor_level.'</td></tr>
		<tr><td>Fizyka: '.$fiz.'</td><td> poziom: '.$fiz_level.'</td></tr>
		<tr><td>Niemiecki: '.$niem.'</td><td> poziom: '.$niem_level.'</td></tr>
		<tr><td>Polski: '.$pol.'</td><td> poziom: '.$pol_level.'</td></tr>
		<tr><td>Biologia: '.$bio.'</td><td> poziom: '.$bio_level.'</td></tr>
		<tr><td>Chemia: '.$chem.'</td><td> poziom: '.$chem_level.'</td></tr>
		<tr><td>pomoc w lekcjach: '.$opieka.'</td><td> poziom: '.$opieka_level.'</td></tr>
		<tr><td> Inny: '.$inna.'</td> <td> poziom: '.$inny_level.'</td></tr>
		<tr><td> Czy lekcja próbna?: '.$probna.'</td></tr>
		<tr><td> Dodatkowe info: '.$dodatkowe.'</td></tr>
</tbody></table>';

   


$send = mail($to, $subject, $message, $headers);

?>