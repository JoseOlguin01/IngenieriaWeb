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

<script>
import $ from 'jquery';
import 'jquery-validation';

export default {
  mounted() {
    const form = $('#formulario');

    form.validate({
      rules: {
        nombre: {
          required: true,
          rangelength: [3, 30]
        },
        contrasena: {
          required: true,
          rangelength: [4, 30]
        },
        conf_contrasena: {
          required: true,
          rangelength: [4, 30],
          equalTo: "#contrasena"
        }
      },
      messages: {
        nombre: {
          required: "Este campo es requerido",
          rangelength: "La contraseña debe tener entre 4 y 30 caracteres"
        },
        contrasena: {
          required: "Este campo es requerido",
          rangelength: "La contraseña debe tener entre 4 y 30 caracteres"
        },
        conf_contrasena: {
          required: "Este campo es requerido",
          rangelength: "La contraseña debe tener entre 4 y 30 caracteres",
          equalTo: "La contraseña debe ser igual a la anterior"
        }
      },
      submitHandler: (form) => {
        form.submit();
        alert("Te has registrado con éxito!");
      }
    });
  }
};
</script>