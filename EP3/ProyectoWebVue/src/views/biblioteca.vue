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
</template>

<style scoped lang="scss">
    .container-fluid .navbar-brand{
    color: whitesmoke;
}

.navbar-nav li a{
    color:whitesmoke;
}

.bg-custom-1 {
    background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
}
</style>