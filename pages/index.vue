<template>
  <div class="home">
    <section class="container">
      <div>
        <h1 class="title">
          {{title}}
        </h1>
        <h2 class="subtitle">
          {{subtitle}}
        </h2>
        <ul class="list-unstyled">
          <li :key="index" v-for="(post, index) in posts">
            <h4>
              {{post.title}}
            </h4>
            <nuxt-link class="btn btn-primary" :to="slugToUrl(post.slug)">Acesse</nuxt-link>
          </li>
        </ul>
        <nuxt-link class="btn btn-danger" to="/about">About</nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
  import api from '../api/index'
  import AppLogo from '~/components/AppLogo.vue'

  export default {
    components: {
      AppLogo
    },
    async asyncData({params}) {
      // We can use async/await ES6 feature
      let {data} = await api.getPosts()

      return {
        posts: data
      }
    },
    computed: {},
    data() {
      return {
        title: 'Título',
        subtitle: 'Subtítulo',
      }
    },
    methods: {
      slugToUrl(slug) {
        return `/${slug}`
      }
    }
  }
</script>
