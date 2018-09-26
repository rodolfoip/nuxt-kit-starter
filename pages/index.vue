<template>
  <main class="home">
    <section class="section-default about">
      <div class="container">
        <h1 class="title">
          {{title}}
        </h1>
        <h2 class="subtitle">
          {{subtitle}}
        </h2>
        <nuxt-link class="btn btn-danger" to="/about">About</nuxt-link>
      </div>
    </section>
    <section class="section-default services">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div
              class="section--title section--title--lg  section--title--lined section--title--primary section--title--center section--title--left-sm mt-lg-5">
              <h2>Seção alguma coza</h2>
            </div>
            <div class="section--subtitle">
              Bacon ipsum dolor amet ham hock ribeye tongue, jowl buffalo andouille turducken. Fatback ham hock pork
              loin tail drumstick andouille pork beef bacon strip steak.
            </div>
          </div>
          <div class="col-lg-8" v-if="posts">
            <app-post-cards :posts="posts"></app-post-cards>
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
    async asyncData({params}) {
      // We can use async/await ES6 feature
      let {data} = await api.getPosts()

      return {
        posts: data
      }
    },
    components: {
      appPostCards: postCards
    },
    computed: {},
    data() {
      return {
        title: 'Título',
        subtitle: 'Subtítulo',
      }
    },
  }
</script>
