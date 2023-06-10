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
@import '../assets/contacto.scss';
</style>
