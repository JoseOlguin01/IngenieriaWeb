<!DOCTYPE html>

<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Login</title>
        <link rel="icon" href="images/logo.png">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="sass/login.css">

        <!-- Bootstrap -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js" integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N" crossorigin="anonymous"></script>

        <!-- Fuentes -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">

        <!-- jquery -->
        <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.5/dist/jquery.validate.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.5/dist/additional-methods.js"></script>
        
    </head>
    <body>
        <header>
            <div class="container-fluid">
                    <nav class="navbar navbar-expand-lg">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="index.html"><img id="logo" src="images/logo.png" alt=""><span>HiFitness</span></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">

                                    <li class="nav-item">
                                        <a class="nav-link" aria-current="page" href="index.html">Inicio</a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="login.html">Login</a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="registrar.html">Registrarse</a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="preferencias.html">Preferencias</a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="contacto.html">Contactanos</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
        </header>
        
        <div class="login-caja">
            <h1>Iniciar sesión</h1>
            <form action="" id="formulario" name="formulario">
                <label for="nombre">Nombre de usuario:</label>
                <input class="controls" type="text" id="nombre" name="nombre" required>
                <br>
                <label for="contrasena">Contraseña:</label>
                <input class="controls" type="password" id="contrasena" name="contrasena" required>
                <br>
                <a href="cambiarcontrasena.html">¿Has olvidado tu contraseña?</a>
                <input class="botons" type="submit" value="Ingresar">
            </form>

            <p>¿No tienes una cuenta? <a href="registrar.html">Crea una aquí</a>.</p>

        </div>

        <footer>
            <span><a href="contacto.html">¿Qué es HiFitness?</a></span>
        </footer>

        <script src="js/login.js"></script>
    </body>
</html>