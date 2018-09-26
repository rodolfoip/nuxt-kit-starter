<template>
  <div>
    {{post.title}}
  </div>
</template>

<script>
  import axios from 'axios'
  import config from '../../api/config'

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
