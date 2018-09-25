<template>
  <section class="container">
    <div>
      <div class="text-center">
        <app-logo/>
        <h1 class="title">
          {{title}}
        </h1>
        <h2 class="subtitle">
          {{subtitle}}
        </h2>
        {{posts}}
      </div>
    </div>
  </section>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'

  export default {
    components: {
      AppLogo
    },
    data() {
      return {
        title: 'Título',
        subtitle: 'Subtítulo',
        posts: []
      }
    },
    created() {
    },
    methods: {}
  }
</script>
