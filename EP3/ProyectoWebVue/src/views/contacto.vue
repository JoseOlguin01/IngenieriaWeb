<template>
    <section class="contacto">
                <form action="" id="formulario" name="formulario">
                    <ul class="formulario">
                        <li>
                            <label for="nombre_completo">Nombre</label>
                            <input type="text" class="form-control" id="nombre_completo" name="nombre_completo" placeholder="Nombre de usuario" >
                        </li>

                        <li>
                            <label for="e_mail" >Email</label>
                            <input type="email" class="form-control" id="e_mail" name="e_mail" placeholder="correo electrónico"  >
                        </li>

                        <li>
                            <label for="asunto" >Asunto</label>
                            <input type="text" class="form-control" id="asunto" name="asunto" placeholder="Asunto" >
                        </li>

                        <li> 
                            <label for="comentarios" >Comentarios</label>
                            <textarea id="comentarios" name="comentarios" placeholder="Escriba aqui"> </textarea>
                        </li>

                        <li>
                            <input type="submit" value="Enviar">
                        </li>
                    </ul>

                  </form>
         </section>
</template>

<style scoped lang="scss">
body{
    background-image: url("../assets/images/running-02.jpg");
    background-size: cover;
    background-repeat: no-repeat;
}

.container-fluid .navbar-brand{
    color: whitesmoke;
}

.navbar-nav li a{
    color:whitesmoke;
}

.bg-custom-1 {
    background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
}

.contacto{
    width: 40%;
    background-color: rgba(0, 0, 0, 0.75);
    padding: 30px;
    margin-top: 4em;
    margin-left: 3em;
    font-family: 'calibri';
    color: white;
    box-shadow: 7px 13px 37px #000; 
}

.formulario{
    list-style-type: none;
}

.formulario li{
    margin: 1em;
}

.form-control{
    width: 100% !important;
}

label.error{
    color: red;
}
</style>
