<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación se presenta un mapa conceptual que sintetiza el componente formativo:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En el desarrollo de front-end web, React.js se ha establecido como una herramienta esencial que permite crear interfaces de usuario interactivas. Se ejecuta principalmente a través de una consola específica para crear y gestionar proyectos. En este ecosistema de desarrollo, Visual Studio Code se utiliza comúnmente como editor de código debido a su integración fluida con React.js. Para ejecutar y probar el proyecto en tiempo real, Node.js habilita un servidor local, permitiendo a los desarrolladores visualizar los cambios instantáneamente en un entorno de servidor local o web. El desarrollo de una página web con React.js implica la combinación de múltiples tecnologías como HTML, CSS y JavaScript para lograr una experiencia de usuario optimizada. Una vez completado, el proyecto se carga generalmente en un servidor pagado que proporciona servicios de web hosting y dominio, asegurando así su accesibilidad en Internet.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
