<template>
  <div>
    <main>
      <section class="presentacion">
        <h2>¿Qué es HiFitness?</h2>
        <nav>
          <img src="../assets/images/descrip.jpg">
          <div id="descripcion">
            <br>

            <p>
              HiFitness es una aplicación que te permitirá organizar tus canciones y playlists favoritas, de acuerdo a la
              rutina de ejercicio que vayas a realizar.
            </p>

          </div>
        </nav>
      </section>

      <div class="columna">
        <div class="card col-6">
          <img src="../assets/images/80.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Ejemplo Rutinas</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <router-link to="/rutinas" class="btn btn-primary">Ir</router-link>
          </div>
        </div>

        <div class="card col-6" aria-hidden="true">
          <img src="../assets/images/ejemplo.png" class="card-img-top" alt="...">
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
