<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 #[i Front-end]
      
    .row.bg3.align-items-center.py-4.pb-5
      .col-lg-12.col-12.px-lg-5.px-4      
        .row.justify-content-center.align-items-center       
          .col-lg-12
            .row.justify-content-center.align-items-center.bg2.pb-0
              .col-lg-7.j(data-aos="fade-down")
                p.mb-0.px-4.ps-5 Es la parte del desarrollo web donde se muestra la parte frontal de una aplicación. Es el diseño, en cuanto a colores, letras, tamaños, fuentes, cajas de texto, tamaños, navegación, paginación y otros elementos más que reflejan la estructura gráfica o visual del sitio, haciéndolo más llamativo y agradable con el uso de imágenes, animaciones y efectos para su interacción.          
              .col-lg-5.p-0
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/3.svg')     
     
        h4.tp.mb-5 A continuación, se muestran ejemplos de interfaces (#[i front-end]) de sitios web.  

        .tarjeta.tarjeta--azul.p-4
          SlyderA(tipo="b")
            .row.justify-content-center
              .col-lg-4  
                img.img-t.img-a(src='@/assets/curso/temas/6.png')     
     
              .col-lg-7
                h4.tp Diseño
                p El #[i front-end] es la parte principal donde el usuario interactúa con la web. Un desarrollador #[i front-end], se encarga de llevar a la práctica la estructura y diseño de la página web. 

            .row.justify-content-center
              .col-lg-4  
                img.img-t.img-a(src='@/assets/curso/temas/7.png')     
     
              .col-lg-7
                h4.tp Desarrollo
                p Cuando el cliente aprueba la propuesta de diseño, en cuanto a colores institucionales, nombre de la empresa y demás características propias de la organización, el desarrollador del diseño web, las lleva a la realidad a través del lenguaje de programación.

                p Para el desarrollo de la interfaz es necesario tener en cuenta las tareas básicas del desarrollo, como son la arquitectura, apariencia e interacción.

            .row.justify-content-center
              .col-lg-4  
                img.img-t.img-a(src='@/assets/curso/temas/8.png') 
              .col-lg-7
                h4.tp Arquitectura
                p Es la columna vertebral del desarrollo web,  muestra el resultado de cómo se verá finalmente el sitio web.
                p Su apariencia, se relaciona con el lenguaje CSS, que permite establecer la presentación del sitio, como colores y fuentes del contenido de textos o estructura en la web.

                p La interacción está basada en el lenguaje de programación con JS, JavaScript. Se basa en los eventos que se utilizan para transformar una página estática en una interfaz dinámica para la interacción con el usuario, navegador y servidor.

    p(data-aos="fade-down").mt-5 El #[i front-end] es la parte del #[i software] que interactúa con el usuario. Es desarrollado principalmente a través de los lenguajes HTML (#[i HyperText Markup Language]), CSS (#[i Cascading Style Sheets]) y JS (JavaScript), los cuales se explican a continuación:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-4
        img.img-t.img-a(src='@/assets/curso/temas/9.svg')
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg6")
          div(titulo="HTML") La maquetación web utiliza estructuras como HTML para organizar la página y desplegar su contenido. Este proceso permite situar elementos como ventanas, párrafos, listas con viñetas, imágenes y tablas en campos específicos. Además, se pueden definir características visuales como tipos de fuente, tamaños, colores y resaltados para hacer la web más atractiva para los usuarios. Todo esto se complementa con el lenguaje CSS, que enriquece la estructura de HTML añadiendo estilos y colorido. Juntos, HTML y CSS crean sitios web visualmente atractivos y funcionalmente organizados.
          div(titulo="CSS")
            p Es el acrónimo de #[i Cascading Style Sheets] (hojas de estilo en cascada). Es un lenguaje que se basa en reglas donde el usuario define las características de los grupos de estilos de colores, fuentes, tamaños y demás particularidades que se quieren mostrar en la web.

            p El archivo .css, se utiliza llamando en las etiquetas html dentro del head. Por ejemplo: 
            ul.lista-ul.fa-ul
              li 
                i.fa.fa-solid.fa-file-code.tp
                span.fst-italic &#60;html>
              li 
                i.fa.fa-solid.fa-file-code.tp
                span.fst-italic &#60;head>
              li 
                i.fa.fa-solid.fa-file-code.tp
                span.fst-italic &#60;link href="styles/style.css" rel="stylesheet" type="text/css">
              li 
                i.fa.fa-solid.fa-file-code.tp
                span.fst-italic &#60;/head>
              li 
                i.fa.fa-solid.fa-file-code.tp
                span.fst-italic &#60;body>
              li 
                i.fa.fa-solid.fa-file-code.tp
                span.fst-italic &#60;/body>
              li 
                i.fa.fa-solid.fa-file-code.tp
                span.fst-italic &#60;/html> 
          div(titulo="JavaScript")
            ul.lista-ul.fa-ul
              li 
                i.fa.fa-solid.fa-file-code.tp
                | Es el lenguaje de programación que se utiliza para añadir características interactivas al sitio web.
              li 
                i.fa.fa-solid.fa-file-code.tp
                | Es un lenguaje de scripts dinámicos que admite construcción de objetos.
              li 
                i.fa.fa-solid.fa-file-code.tp
                | Es el único lenguaje de programación que funciona de una manera ágil y eficiente en todos los navegadores.   

    .row.justify-content-center.align-items-center.bg7.brad.p-4          
      .col-auto
        img.img-t.img-a(src='@/assets/curso/temas/10.svg')

      .col
        p.mb-0 Es importante indicar que las empresas dueñas de cada sitio web, con el fin de mantenerlo actualizado con las últimas tendencias, frecuentemente cambian el diseño de la interfaz gráfica (#[i front-end]) de su sitio, por lo que hoy se puede visualizar una información y si se visita el sitio después, tanto la información como su distribución puede haber cambiado.
        
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
