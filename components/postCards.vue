<template>
  <div>
    <div class="card-deck">
      <div class="card" :key="index" v-for="(post, index) in posts">
        <img class="card-img-top" src="https://www.placecage.com/c/280/200" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title" v-html="post.title"></h5>
          <div class="card-text" v-html="post.excerpt"></div>
          <nuxt-link class="btn btn-warning" :to="`/blog/${post.slug}`">Ver post</nuxt-link>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['posts']
  }
</script>
