<?php
$to = "kontakt@e-lekcje.com";
$from = urlencode($_REQUEST['email']);
$from1=$_REQUEST['email'];
$name = urlencode($_REQUEST['name']);
$name1=$_REQUEST['name'];
$kwota = $_REQUEST['do_zap'];
$terminy = $_REQUEST['terminy'];
$ilosc = $_REQUEST['ilosc'];
$id="39841";
$opis="usluga";
$odbiorca = "E-Lekcje.com";
$savecode = "tG4FW3deXwowv1Wn";
$crc="e-lekcje";
$md5sum = md5($id . $kwota . $crc . $savecode);
$our=urlencode("kontakt@e-lekcje.com");

$headers = "From: $from1";
$headers = "From: " . $from1 . "\r\n";
$headers .= "Reply-To: ". $from1 . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$subject = "Opłacenie lekcji- $name1";



$wynik="https://secure.tpay.com?id=" . $id . "&kwota=" . $kwota . "&opis=" . $opis . "&opis_sprzed=" .$odbiorca . "&wyn_email=" . $our ."&email=" . $from . "&nazwisko=" . $name . "&crc=" . $crc . "&md5sum=" . $md5sum;
$message ='<table>
        <tbody><tr>
        <td>Imię i nazwisko:  '.$name1.'</td>
		</tr>
		<tr><td>ilość lekcji: '.$ilosc.'</td><</tr>
		<tr><td> terminy: '.$terminy.'</td></tr>
</tbody></table>';

$send = mail($to, $subject, $message, $headers);
echo $wynik;

?>