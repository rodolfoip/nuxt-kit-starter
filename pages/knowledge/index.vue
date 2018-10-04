<template>
  <main class="knowledge">
    <section class="section-default">
      <div class="container">
        <div class="row">
          <div class="card-columns">
            <div class="card" v-for="(n, index) in 8" :key="index">
              <img class="card-img-top" src="https://via.placeholder.com/180X100" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Card title {{n}}</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>
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
