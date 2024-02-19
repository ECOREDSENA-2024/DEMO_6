<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Construcción web con React
    .row.justify-content-center.align-items-center.bg7.brad.p-4.py-3.mb-4
      .col-lg-7.my-3        
        p.mb-0.j React ayuda a crear interfaces de usuario de manera sencilla, diseñando vistas simples en cada estado de la aplicación, actualiza y renderiza de inmediato una vez se estén cambiando los datos del código fuente.                       
      .col-lg-5.my-3
        img.img-t.img-a(src='@/assets/curso/temas/17.png')

    p(data-aos="fade-down").mb-5 Es ideal para crear el #[i front-end], pues permite múltiples opciones a nivel de diseño gracias a que es una herramienta integral, rápida y eficiente. Para ello, hay que tener en cuenta lo siguiente. 

    .row.bg11.align-items-center.py-4.pb-5
      .col-lg-12.col-12.px-lg-5.px-4      
        .row.justify-content-center.align-items-center       
          .col-lg-8.my-3
            .row.justify-content-start.mb-3   
              .col-auto(data-aos="flip-down")
                .list
                  .list__item
                    .list__item__icon
                      img(src='@/assets/curso/temas/icon.svg', alt='')
                  .list__txt.bg8.p-0.px-4
                    h4.mb-0 Maquetación HTML, CSS y JavaScript

            ul.lista-ul.fa-ul
              li 
                i.fa.fa-solid.fa-file-code.tp
                | Para crear la maquetación con React se necesitan saberes previos, sobre HTML en sus estructuras, CSS sobre los diferentes estilos relacionados con Bootstrap y JavaScript en sus funcionalidades normales, desde las básicas hasta las más avanzadas.
              li 
                i.fa.fa-solid.fa-file-code.tp
                | El archivo padre (principal) donde se escribe el código va directamente con funciones de JavaScript al mostrarlo en el navegador.
              li 
                i.fa.fa-solid.fa-file-code.tp
                | Tiene herramientas importantes e integradas que hacen de React una herramienta muy eficiente; antes se necesitaba trabajar cada una de estas herramientas de manera independiente.                                 
          .col-lg-4.my-3
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/18.png')     

    .row.justify-content-start.mb-3.mt-5   
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bg8.p-0.px-4
            h4.mb-0 Pruebas y visualización en el servidor

    .row.bg12.align-items-center.py-4.pb-5
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.justify-content-center.mb-4.text-center          
          .col-lg-6.my-3
            .bg13.brad.h-100
              img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/21.png')     
              .p-4
                p(data-aos="fade-down") Para lograr iniciar un proyecto React, este debe ir acompañado con la consola, ya sea del sistema operativo del equipo o la consola del editor de texto.

          .col-lg-6.my-3
            .bg13.brad.h-100
              img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/22.png')     
              .p-4
                p(data-aos="fade-down") Después de crearse el proyecto y haberlo codificado integralmente con todas las herramientas necesarias, se debe ejecutar el servidor desde la consola, pero se debe tener en cuenta que previamente debe haberse instalado Node JS para que exista el servidor local, así se podrá visualizar la web en paralelo una vez se guarden los cambios en el código.

        p(data-aos="fade-down") A continuación, se podrá consultar el video que muestra el paso a paso para cargar y ejecutar un proyecto web con React.

        .row.justify-content-center.align-items-center.mb-5           
          .col-lg-12(data-aos="fade-left")     
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/BLF42Z-63LU?si=XvDH7HCs0gTLiO31" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)    
              figcaption Video. Cargue y ejecución de proyecto React 

    p(data-aos="fade-down") Después de cargar y ejecutar el proyecto, se puede iniciar la edición del código fuente de la aplicación. El siguiente video muestra un ejemplo de edición de código para cambiar el texto inicial de la aplicación y su color de fondo.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/Jl57jB28z78?si=AUYRoH0QOi_tT0du" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)        
          figcaption Video. Edición de código fuente 
                      
    p(data-aos="fade-down") Un aspecto importante dentro del desarrollo de aplicaciones web corresponde al diseño de la interfaz gráfica, en la cual se estructura, distribuyen y organizan sus elementos gráficos (textos, imágenes, botones, formularios, enlaces, títulos, entre otros), lo cual corresponde a la maquetación de la aplicación. El siguiente video muestra algunos de los aspectos involucrados en este proceso.

    .row.justify-content-center.align-items-center.mb-5        
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/SHK3__2d56M?si=sp7C2WIvs6Mo8CvK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Maquetación parte 1   

    .row.justify-content-center.align-items-center        
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/Dvp3vOepWA4?si=6UPBX1T6tpTwEC8A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Maquetación parte 2                        
</template>

<script>
export default {
  name: 'Tema3',
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
