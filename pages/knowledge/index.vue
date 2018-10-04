<template>
  <main class="knowledge">
    <section class="section-default">
      <div class="container">
        Conhecimentos
      </div>
    </section>
  </main>
</template>

<script>
  import api from '../../api/index'

  export default {
    data() {
      return {
        pageContent: {}
      }
    },
    methods: {
      getPageContent() {
        api.getPage('knowledge')
          .then((page) => this.pageContent = page)
      }
    },
    created() {
      this.getPageContent()
    }
  }
</script>
