<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

<title>Enviar CV</title> <!-- Aquí va el título de la página -->

</head>

<body>
<?php

$Carrera = $_POST['carrera'];
$Nombre = $_POST['nombre'];
$Apellidos = $_POST['apellido'];
$Edad = $_POST['edad'];
$Telefono = $_POST['telefono'];
$Salario = $_POST['salario'];
$archivo = $_FILES['cv'];

if ($Nombre=='' || $Apellidos=='' || $Edad=='' || $Telefono == ''){

echo "<script>alert('Los campos marcados con * son obligatorios');location.href ='javascript:history.back()';</script>";

}else{


    require("archivosformulario/class.phpmailer.php");
    $mail = new PHPMailer();

    $mail->From     = "tirado1294@gmail.com";
    $mail->FromName = $Nombre; 
    $mail->AddAddress("ruben.tirado@mrcorporativo.com"); // Dirección a la que llegaran los mensajes.
   
// Aquí van los datos que apareceran en el correo que reciba
    //adjuntamos un archivo 
        //adjuntamos un archivo
            
    $mail->WordWrap = 50; 
    $mail->IsHTML(true);     
    $mail->Subject  =  "Vacante Auxiliar Contable";
    $mail->Body     =  "<b>Curriculum Vitae para vacante de axiliar contable</b><br><br>".
    "Nombre: <b>$Nombre $Apellidos </b>\n<br>". 
    "Edad: <b>$Edad años</b> \n<br>".
    "Teléfono: <b>$Telefono</b> \n<br>".
    "Prestación salarial: <b>$Salario</b> \n<br>".
    "Carrera de procedencia: <b>$Carrera</b>\n\n\n<br><br>".
    "Adjunto a este correo se escuentra el documento del curriculum vitae";
    $mail->AddAttachment($archivo['tmp_name'], $archivo['name']);
    
    
    

// Datos del servidor SMTP

    $mail->IsSMTP(); 
    $mail->Host = "ssl://mail.mrcorporativo.com:465";  // Servidor de Salida.
    $mail->SMTPAuth = true; 
    $mail->Username = "ruben.tirado@mrcorporativo.com";  // Correo Electrónico
    $mail->Password = "tirado1294"; // Contraseña

    // Activo condificacción utf-8
    $mail->CharSet = 'UTF-8';
    
    if ($mail->Send())
    echo "<script>location.href ='career.html?vacante=si';</script>";
    else
    echo "<script>alert('Error al enviar el formulario');location.href ='javascript:history.back()';</script>";

}

?>
</body>
</html>