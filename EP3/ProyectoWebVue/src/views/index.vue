<template>
    <div>
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
  
      <main>
        <section class="presentacion">
          <h2>Que es Hifitness?</h2>
          <nav>
            <img src="images/descrip.jpg">
            <ul id="descripcion">
              <br>
              <li>
                <p>
                  HiFitness es una aplicación que te permitirá organizar tus canciones y playlists favoritas, de acuerdo a la rutina de ejercicio que vayas a realizar.
                </p>
              </li>
            </ul>
          </nav>
        </section>
  
        <div class="columna">
          <div class="card col-6">
            <img src="images/80.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Ejemplo Rutinas</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="rutinas.html" class="btn btn-primary">Ir</a>
            </div>
          </div>
  
          <div class="card col-6" aria-hidden="true">
            <img src="images/ejemplo.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title placeholder-glow">
                <span class="placeholder col-6"></span>
              </h5>
              <p class="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
              </p>
              <a class="btn btn-primary disabled placeholder col-6"></a>
            </div>
          </div>
        </div>
      </main>
    </div>
</template>