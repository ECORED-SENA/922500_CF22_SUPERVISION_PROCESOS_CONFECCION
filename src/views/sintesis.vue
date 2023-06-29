<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación se presenta un mapa conceptual que sintetiza el componente formativo:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis describe dos aspectos principales: la capacitación del personal y el perfil técnico. En cuanto a la capacitación, se mencionan diferentes procesos, como la estructura del modelo de capacitación, que incluye diagnóstico, planes y programas de capacitación, desarrollo y evaluación. También se hace referencia a la inducción y reinducción, así como a una inducción específica para el cargo. Por otro lado, para el proceso de capacitación de los administrativos, se utiliza una planeación estratégica que aborda el proceso organizacional y las estructuras organizacionales. Además, se mencionan las competencias laborales, como las corporativas, funcionales y de gestión. También se mencionan las competencias funcionales organizacionales, como el man")
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
