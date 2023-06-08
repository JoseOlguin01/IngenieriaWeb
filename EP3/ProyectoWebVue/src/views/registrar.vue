 <template>
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
            </div>
        </header>

        <div class="login-caja">
            <h1>Registro</h1>
            <form action="" id="formulario" name="formulario">
                <label for="nombre">Nombre de usuario:</label>
                <input class="controls" type="text" id="nombre" name="nombre" required>
                <br>
                <label for="contrasena">Contraseña:</label>
                <input class="controls" type="password" id="contrasena" name="contrasena" required>
                <br>
                <label for="conf_contrasena">Confirmar Contraseña:</label>
                <input class="controls" type="password" id="conf_contrasena" name="conf_contrasena" required>
                <br>
                <input class="botons" type="submit" value="Registrarse">
       
              </form>
        </div>

        <footer>
            <span><a href="contacto.html">¿Qué es HiFitness?</a></span>
        </footer>
        
    </template>