<template>
  <main class="home">
    <section class="section-default me">
      <div class="container">
        <div class="me--content">
          <div>
            <h1><span>D</span>onec</h1>, aliquam sagittis
          </div>
          <h3>Aliquam dapibus ullamcorper est</h3>
        </div>
      </div>
    </section>
    <section class="section-default about">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div
              class="section--title section--title--lg  section--title--lined section--title--primary section--title--center section--title--left-sm">
              <h2>Sobre</h2>
            </div>
            <div class="about--description">
              Bacon ipsum dolor amet ham hock ribeye tongue, jowl buffalo andouille turducken. Fatback ham hock pork
              loin tail drumstick andouille pork beef bacon strip steak.Fatback ham hock pork
              loin tail drumstick andouille pork beef bacon strip steak.
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  import api from '../api/index'
  import postCards from '../components/postCards'

  export default {
    components: {
      appPostCards: postCards
    },
    computed: {},
    data() {
      return {
        pageContent: {}
      }
    },
    methods: {
      getPageContent() {
        api.getPage('homepage')
          .then((page) => this.pageContent = page)
      }
    },
    created() {
      this.getPageContent()
    },

  }
</script>
