 <template>
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

    <footer class="foot">
      <span><router-link to="/contacto">¿Qué es HiFitness?</router-link></span>
    </footer>
        
</template>

<style scoped lang="scss">
@import '../assets/registrar.scss';
</style>