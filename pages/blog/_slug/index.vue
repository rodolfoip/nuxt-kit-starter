<template>
  <div class="container">
    <h2 v-html="post.title.rendered"></h2>
    <div class="content" v-html="post.excerpt.rendered"></div>
    <nuxt-link to="/" class="btn btn-info">Home</nuxt-link>
    <div class="big">
      <pre>
      {{post}}
      </pre>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import config from '../../../api/config/index'

  export default {
    async asyncData({params}) {
      // We can use async/await ES6 feature
      let {data} = await axios.get(config.baseUrl + `posts?slug=${params.slug}`)
      return {
        post: data[0]
      }
    },
  }
</script>
