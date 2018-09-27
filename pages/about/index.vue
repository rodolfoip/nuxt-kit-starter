<template>
  <main class="about-page">
    <section class="section-default">
      <div class="container">
        <div class="alert alert-success" role="alert">
          Página de sobre eu {{nome}}
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        nome: 'teu avo'
      }
    }
  }
</script>
