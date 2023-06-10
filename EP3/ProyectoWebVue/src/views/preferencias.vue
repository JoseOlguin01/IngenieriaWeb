<template>
    <div class="container-fluid">
            <div class="columnas">
                <h2>Para personalizar tu experiencia, selecciona de acuerdo a tus preferencias.</h2>
                <div class="row row-cols-2">
                    <div class="col">
                        <br>
                        <span>Qué música escuchas?</span>
                        <ul>
                            <li>
                                <button type="button" class="btn btn-primary" data-bs-toggle="button" autocomplete="off">Pop</button>
                            </li>
                            <li>
                                <button type="button" class="btn btn-primary" data-bs-toggle="button" autocomplete="off">Rock</button>
                            </li>
                            <li>
                                <button type="button" class="btn btn-primary" data-bs-toggle="button" autocomplete="off">Dance</button>
                            </li>
                            <li>
                                <button type="button" class="btn btn-primary" data-bs-toggle="button" autocomplete="off">Hip-Hop</button>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="col">
                        <br>
                        <span>Qué ejercicios realizas?</span>
                        <ul>
                            <li>
                                <button type="button" class="btn btn-secondary" data-bs-toggle="button" autocomplete="off">Cardio</button>
                            </li>
                            <li>
                                <button type="button" class="btn btn-secondary" data-bs-toggle="button" autocomplete="off">Yoga</button>
                            </li>
                            <li>
                                <button type="button" class="btn btn-secondary" data-bs-toggle="button" autocomplete="off">Escalada</button>
                            </li>
                            <li>
                                <button type="button" class="btn btn-secondary" data-bs-toggle="button" autocomplete="off">Basketball</button>
                            </li>
                        </ul>
                    </div>
                </div>
    
                <section class="formulario">
                    <form method="post">
                        <input class="botons" type="submit" value="Ingresar Selecciones">
                    </form>
                </section>
            </div>
        </div>

</template>

<style scoped lang="scss">
@import '../assets/preferencias.scss';
</style>