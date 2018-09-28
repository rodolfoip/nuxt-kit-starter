<template>
  <div>
    <ul class="list-unstyled">
      <li :key="index" v-for="(item, index) in posts" class="mb-5">
        <nuxt-link :to="`/blog/${item.slug}`" class="post-item">
          <div class="row">
            <div class="col-md-4">
              <img src="https://placekitten.com/254/138" alt="place kitten" class="img-fluid">
            </div>
            <div class="col">
              <h4 v-html="item.title"></h4>
              <div class="text" v-html="item.excerpt"></div>
            </div>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['posts']
  }
</script>
