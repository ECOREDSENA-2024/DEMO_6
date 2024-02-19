<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Sitio web, #[i hosting] y dominio

    p(data-aos="fade-down").mb-4 Para cargar un proyecto React.js en un servidor web, se deben tener en cuenta varios aspectos, a saber:

    .row.justify-content-center.text-center.mb-4         
      .col-lg-2.col-md-4.my-3
        .bg14.p-3.brad.h-100
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/23.svg')     
          p(data-aos="fade-down").mb-0 Su tamaño en código

      .col-lg-2.col-md-4.my-3
        .bg14.p-3.brad.h-100
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/24.svg')     
          p(data-aos="fade-down").mb-0 Lenguaje programado

      .col-lg-2.col-md-4.my-3
        .bg14.p-3.brad.h-100
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/25.svg')     
          p(data-aos="fade-down").mb-0 Pago anual por el permiso del uso del servidor a nivel mundial

      .col-lg-2.col-md-4.my-3
        .bg14.p-3.brad.h-100
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/26.svg')     
          p(data-aos="fade-down").mb-0 Lugar donde se pagarán los derechos para ejecutar la aplicación web

      .col-lg-2.col-md-4.my-3
        .bg14.p-3.brad.h-100
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/27.svg')     
          p(data-aos="fade-down").mb-0 Nombre o dominio de la web

      .col-lg-2.col-md-4.my-3
        .bg14.p-3.brad.h-100
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/28.svg')     
          p(data-aos="fade-down").mb-0 Si utiliza base de datos

    p(data-aos="fade-down").mb-5 A continuación, se explica el uso de los anteriores conceptos.

    .row.justify-content-center.align-items-center.mb-4          
      .col-lg-4.my-3
        img.img-t.img-a(src='@/assets/curso/temas/29.svg')
      .col-lg-8.my-3
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg6")
          div(titulo="Sitio web") 
            p Es un conjunto de páginas web que son accesibles a través de un dispositivo con conexión a internet, convenientemente enlazadas que cumplen una finalidad específica. Está identificado por una dirección URL única que, usualmente, es la página de inicio u #[i homepage] del sitio web. 
          div(titulo="<i>Hosting</i>") 
            p Es provisto por un gran número de empresas a nivel mundial, se debe contratar de acuerdo con las necesidades específicas de la aplicación a implementar (espacio, base de datos, seguridad, entre otros). 

            p Algunas compañías de gran tamaño, en ocasiones optan por implementar el servicio de #[i hosting] directamente en sus servidores, por lo que no requieren contratar un proveedor externo.          
          div(titulo="Dominio")
            p Corresponde a un nombre único en internet, identifica el nombre del sitio web como tal, por ejemplo: sena.edu.co es el dominio del SENA en Colombia. 
            p Se adquiere a través de múltiples compañías a nivel mundial, tiene un valor que generalmente se paga y renueva anualmente, no obstante, puede hacerse cada 2 o 3 años.          
            p El dominio termina en algunas letras que identifican su tipo, país, entre otros:
            ul.lista-ul.fa-ul
              li 
                i.fa.fa-solid.fa-file-code.tp
                | .com: compañías.
              li 
                i.fa.fa-solid.fa-file-code.tp
                | .edu: instituciones de educación.
              li 
                i.fa.fa-solid.fa-file-code.tp
                | .co: para sitios de Colombia.
              li 
                i.fa.fa-solid.fa-file-code.tp
                | .gov o .gob: entidades de gobierno, entre otros.  

    p(data-aos="fade-down").mb-4 Para finalizar, en el siguiente video se explica con mayor detalle esos aspectos.

    .row.justify-content-center.align-items-center     
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/SwqfHBXz-F8?si=aoggfH8JjtqfYOOR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 
          figcaption Video. #[i Hosting] web                       
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
