<template>
  <main class="knowledge">
    <section class="section-default">
      <div class="container">
        Portifólio
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
        api.getPage()
          .then((page) => this.pageContent = page)
      }
    },
    created() {
    }
  }
</script>
