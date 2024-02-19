<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.bg1.align-items-center.py-4.pb-5
      .col-lg-12.col-12.px-lg-5.px-4
        p(data-aos="fade-down") Para realizar la interfaz de usuario de una aplicación web con React.JS es importante conocer su importancia, en cuanto a la definición y posicionamiento de los elementos de la interfaz del sitio web, así como la implementación de las interacciones entre todos estos elementos. A continuación se presenta un video que introduce a este componente formativo.
        .row.justify-content-center.align-items-center.mt-5           
          .col-lg-12(data-aos="fade-left")     
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/7mg0N0LwRtc?si=r6NRDNZi2piTTbVH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 
              figcaption Video. Construcción interfaz front-end y despliegue con React.JS
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
