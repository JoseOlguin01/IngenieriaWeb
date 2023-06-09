<template>
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <a class="imagen" href="#"><img :src="imageSrc" class="img-fluid rounded-start" alt="..."></a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script>
  export default {
    props: {
      imageSrc: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para el componente Card */
  </style>
  