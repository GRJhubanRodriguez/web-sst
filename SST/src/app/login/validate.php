<?php
    $usuario-$_POST['user'];
    $contraseña-$_POST['password'];
    session_start();
    $_SESSION['user']=$usuario;

    $conexion=mysqli_connect("localhost","root","password","database_sst");

    $consulta="SELECT*FROM users where user='$usuario' and password='$contraseña'";

    $resultado=mysqli_querry($conexion,$consulta);

    $filas=mysqli_num_rows($resultado);

    if($filas){
        header("location:./Input/accidentalidad/accidentalidad.component")
    } else{
        ?>
        <?php
            include("login.component.html");
        ?>
        <h1>Error en la autentificación</h1>
        <?php
    }
mysqli_free_result($resultado);
mysqli_close($conexion);