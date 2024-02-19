<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Herramientas de desarrollo web
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.my-3
        .bg7.brad.p-4.mb-4
          p.mb-0 Antes de iniciar el diseño y construcción de la interfaz gráfica (#[i front-end]) de una aplicación, es importante tener las herramientas necesarias para su construcción.  
        p(data-aos="fade-down") A continuación, se encuentra el instructivo de instalación de aquellas que se utilizarán en este componente formativo para construir el #[mark.fst-italic.ty front-end] de una aplicación web y, posteriormente, realizar su configuración y despliegue en un servidor de almacenamiento web.                       
      .col-lg-4.my-3
        img.img-t.img-a(src='@/assets/curso/temas/11.png')

    .row.justify-content-start.mb-3   
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bg8.p-0.px-4
            h4.mb-0 Instalación de Visual Studio Code

    p(data-aos="fade-down").mb-5 Es un editor de texto plano, desarrollado por Microsoft, gratuito y de código abierto para que los usuarios lo usen como herramienta de programación. La siguiente imagen muestra un pantallazo de ejemplo de la interfaz de esta herramienta.        

    .titulo-sexto.color-acento-contenido
      h5 Figura 1.
      span Interfaz Visual Studio Code     
    img.img-t.img-a(src='@/assets/curso/temas/12.png', alt="La figura representa la interfaz visual de Visual Studio Code. En ella, se puede visualizar la barra de herramientas, la barra de opciones y el área donde se trabaja con el código.")
    figcaption.bgf.mt-1.mb-5 Nota. Capturada de 
      a(href="https://code.visualstudio.com/" target="_blank") https://code.visualstudio.com/  

    p(data-aos="fade-down").mb-5 En los siguientes videos se muestra el paso a paso para los procesos iniciales de #[mark.ty #[b Visual Studio Code.]] Es así, como en este primer video se hace el proceso de descarga.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/McSFqeYuS2I?si=PjYmVIwVElMYv7Or" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Descarga Visual Studio Code 

    p(data-aos="fade-down").mb-4 Y en este segundo video, ya se explica el proceso de instalación.
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/iDar46B42s8?si=kS0tWieO4kEjDczG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)                
          figcaption Video. Instalación Visual Studio Code 

    .row.justify-content-start.mb-3   
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bg8.p-0.px-4
            h4.mb-0 Instalación de Node.JS 

    .row.justify-content-center.align-items-center.bg9.pb-0
      .col-lg-10(data-aos="fade-down")
        p Se utiliza principalmente para desarrollar aplicaciones junto con servidores no bloqueantes, es rápido y efectivo para la visualización de la construcción de código en tiempo real.

        p Es una #[mark.text-bold herramienta importante que proporciona un buen acompañamiento para el desarrollo ágil de las aplicaciones web (API).]         
      .col-lg-2.p-0
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/14.png')  

    h4.tp.mt-5(data-aos="fade-down") A través del siguiente video se visualiza el paso para su descarga e instalación.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/WYOu5Rhmw-E?si=N7wqam5ji4Cuv8Gx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)  
          figcaption Video. Instalación Node.JS 

    .row.justify-content-start.mb-3   
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bg8.p-0.px-4
            h4.mb-0 Instalación de React.JS

    .row.justify-content-center.align-items-center.bg10.pb-0
      .col-lg-10(data-aos="fade-down")
        p Es una herramienta para crear interfaces de usuario (#[i front-end]) interactivas de manera sencilla. Sirve para realizar diseños de interfaces web, actualizando y renderizando de manera eficiente todos los componentes que la integran como HTML, CSS y JavaScript.        
      .col-lg-2.py-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/15.png')  
        
    h4.tp.my-4 A continuación, se podrá consultar el video que muestra el paso para verificar la versión instalada de Node.JS e instalar los paquetes (componentes) requeridos para crear aplicaciones React.JS.  

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vbh5iJHF-Tk?si=kgBlv1q7m3ZfYFUv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 
          figcaption Video. Instalación paquetes (componentes) React JS 

    h5 #[mark.text-bold Una vez instalados los paquetes (componentes) requeridos para crear aplicaciones React.JS se puede crear una aplicación React.JS,] como se muestra en el siguiente video.
    .row.justify-content-center.align-items-center       
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/W2e3znEC-CY?si=ftCc8F-VyKRNDxUY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 
          figcaption Video. Creación aplicación React.JS

</template>

<script>
export default {
  name: 'Tema2',
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
