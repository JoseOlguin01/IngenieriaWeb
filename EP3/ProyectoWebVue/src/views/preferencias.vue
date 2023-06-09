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
    body{
    background-image: url("../assets/images/running-night.jpg");
    background-repeat: no-repeat;
    background-size: cover;
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

.columnas{
    text-align: center;
    margin-top: 1em;
}

.col ul{
    margin: 3em;
    list-style-type: none;
}

.btn{
    margin: 1.5em;
    outline: auto;
    outline-color: black;
    width: 30em;
    text-align: center;
    height: 3em;
}

span{
    outline: auto;
    outline-color: black;
    width: 10em;
    padding-left: 5em;
    padding-right: 5em;
    padding-top: 1em;
    padding-bottom: 1em;
    font-size: larger;
    text-align: center;
    margin-left: 1em;
    background-color: #13547a;
    color: whitesmoke;
}

.formulario{
    text-align: center;
}
</style>