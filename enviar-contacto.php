<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

<title>Enviar CV</title> <!-- Aquí va el título de la página -->

</head>

<body>
<?php

$Nombre = $_POST['nombre'];
$Apellidos = $_POST['apellido'];
$Ciudad = $_POST['ciudad'];
$Email = $_POST['email'];
$Telefono = $_POST['telefono'];
$Empresa = $_POST['empresa'];
$Area = $_POST['area'];
$Policy = $_POST['policy'];
$Mensaje = $_POST['message'];

if ($Nombre=='' || $Apellidos=='' || $Email== '' || $Telefono == '' || $Mensaje == '' || $Policy == ''){

echo "<script>alert('Los campos marcados con * son obligatorios');location.href ='javascript:history.back()';</script>";

}else{

    require("archivosformulario/class.phpmailer.php"); // Requiere PHPMAILER para poder enviar el formulario desde el SMTP de google
    $mail = new PHPMailer();

    $mail->From     = $Email;
    $mail->FromName = $Nombre; 
    $mail->AddAddress("ruben.tirado@mrcorporativo.com"); // Dirección a la que llegaran los mensajes.
   
// Aquí van los datos que apareceran en el correo que reciba
    //adjuntamos un archivo 
        //adjuntamos un archivo
            
    $mail->WordWrap = 50; 
    $mail->IsHTML(true);     
    $mail->Subject  =  "Contacto";
    $mail->Body     =  "<b>Una persona contacto por medio de la Página Web de CMR Consultores al área $Area</b><br><br>".
    "Nombre: <b>$Nombre $Apellidos </b>\n<br>". 
    "Ciudad: <b>$Ciudad</b> \n<br>".
    "Email: <b>$Email</b> \n<br>".
    "Telefono: <b>$Telefono</b> \n\n\n<br>".
    "Empresa: <b>$Empresa</b> \n\n\n<br>".
    "Servicio Solicitado: <b>$Area</b> \n\n\n<br><br>".
    "Deja el siguiente mensaje: <b>$Mensaje</b> \n\n\n<br><br><br>";

// Datos del servidor SMTP

    $mail->IsSMTP(); 
    $mail->Host = "ssl://mail.mrcorporativo.com:465";  // Servidor de Salida.
    $mail->SMTPAuth = true; 
    $mail->Username = "ruben.tirado@mrcorporativo.com";  // Correo Electrónico
    $mail->Password = "tirado1294"; // Contraseña

    // Activo condificacción utf-8
    $mail->CharSet = 'UTF-8';
    
    if ($mail->Send())
    echo "<script>location.href ='contacto.html?contacto=si';</script>";
    else
    echo "<script>alert('Error al enviar el formulario');location.href ='javascript:history.back()';</script>";

}

?>
</body>
</html>