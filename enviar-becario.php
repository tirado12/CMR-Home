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
$Edad = $_POST['edad'];
$Telefono = $_POST['telefono'];
$Universidad = $_POST['universidad'];
$Carrera = $_POST['carrera'];
$Semestre = $_POST['semestre'];
$Area = $_POST['area'];
$archivo = $_FILES['carta'];

if ($Nombre=='' || $Apellidos=='' || $Edad=='' || $Telefono == ''){

echo "<script>alert('Los campos marcados con * son obligatorios');location.href ='javascript:history.back()';</script>";

}else{


    require("archivosformulario/class.phpmailer.php");
    $mail = new PHPMailer();

    $mail->From     = "enviocorreoscmr@gmail.com";
    $mail->FromName = $Nombre; 
    $mail->AddAddress("contacto@mrcorporativo.com"); // Dirección a la que llegaran los mensajes.
    $mail->AddAddress("cecilio.mtz@mrcorporativo.com"); // Dirección a la que llegaran los mensajes.
   
// Aquí van los datos que apareceran en el correo que reciba
    //adjuntamos un archivo 
        //adjuntamos un archivo
            
    $mail->WordWrap = 50; 
    $mail->IsHTML(true);     
    $mail->Subject  =  "Registro de nuevo becario";
    $mail->Body     =  "<b>Datos de registro para becario en el área $Area</b><br><br>".
    "Nombre: <b>$Nombre $Apellidos </b>\n<br>". 
    "Edad: <b>$Edad años </b> \n<br>".
    "Teléfono: <b>$Telefono </b> \n<br>".
    "Universidad: <b>$Universidad </b> \n<br>".
    "Carrera: <b>$Carrera </b> \n<br>".
    "Semestres cursados: <b>$Semestre </b> \n<br>".
    "Área de interés: <b>$Area </b> \n\n\n<br><br>".
    "Adjunto a este correo se encuentra la carta de exposición de motivos por la persona que se postuló para becario";
    $mail->AddAttachment($archivo['tmp_name'], $archivo['name']);
    
    
    

// Datos del servidor SMTP

    $mail->IsSMTP(); 
    /*$mail->Host = "ssl://mail.mrcorporativo.com:465";  // Servidor de Salida.
    $mail->SMTPAuth = true; 
    $mail->Username = "ruben.tirado@mrcorporativo.com";  // Correo Electrónico
    $mail->Password = "ruben_2020_cmr"; // Contraseña*/

    $mail->Host = "ssl://smtp.gmail.com:465"; // GMail
    $mail->SMTPAuth = true; 
    $mail->Username = "enviocorreoscmr@gmail.com";  // Correo Electrónico
    $mail->Password = "cmr_envio_2020"; // Contraseña
    // Activo condificacción utf-8
    $mail->CharSet = 'UTF-8';
    
    if ($mail->Send())
    echo "<script>location.href ='career.html?becario=si';</script>";
    else
    echo "<script>alert('Error al enviar el formulario');location.href ='javascript:history.back()';</script>";

}

?>
</body>
</html>