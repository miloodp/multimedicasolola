<?php 

$correo = $_POST['correo'];
$nombre = $_POST['nombre'];
$mensaje = $_POST['mensaje'];
$numero = $_POST['numero'];

//echo $correo . " " . $nombre . " " . $mensaje;

$destinatario = "hola@multimedicasolola.com";
$asunto = "Formulario de Contacto Multimedica Sololá"; 
$cuerpo = '
    <html> 
        <head> 
            <title>Formulario de Contacto</title> 
        </head>
        <body> 
            <h1>Solicitud de contacto Multimedica Sololá</h1>
            <p> 
                Nombre:  '.$nombre . ' <br>
                Correo: '.$correo.' <br>
                Teléfono: '.$numero.' <br>
                Mensaje: '.$mensaje.' 
            </p> 
        </body>
    </html>
';
//para el envío en formato HTML 
$headers = "MIME-Version: 1.0\r\n"; 
$headers .= "Content-type: text/html; charset=UTF8\r\n"; 

//dirección del remitente

$headers .= "FROM: $nombre <$correo>\r\n";
mail($destinatario,$asunto,$cuerpo,$headers); 

sleep(5);
header("Location: contacto.html");
?> 