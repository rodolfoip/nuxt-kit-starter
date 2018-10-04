<template>
  <main class="blog-page">
    <section class="section-default bg-info">
      <div class="container">
        <h1 class="section--title section--title--light section--title--lined">
          {{page.title}}
        </h1>
      </div>
    </section>
    <section class="section-default">
      <div class="container">
        <div class="row">
          <div class="col">
            <app-posts-list :posts="posts"></app-posts-list>
          </div>
          <aside class="d-none d-lg-block col-3">
            <div class="blog-sidebar sticky-top">
              <div id="carouselExampleIndicators" class="carousel slide mb-4" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src="https://via.placeholder.com/300x200" alt="First slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="https://via.placeholder.com/300x200" alt="Second slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="https://via.placeholder.com/300x200" alt="Third slide">
                  </div>
                </div>
              </div>
              <div class="popular-posts">
                <h4>Posts Populares</h4>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  import api from '../../api/index'
  import postsList from '../../components/postsList'

  export default {
    async asyncData({params}) {
      // We can use async/await ES6 feature
      let {data} = await api.getPosts()

      return {
        posts: data
      }
    },
    components: {
      appPostsList: postsList
    },
    data() {
      return {
        page: {}
      }
    },
    created() {
      this.getPageContent()
    },
    methods: {
      getPageContent() {
        api.getPage('blog')
          .then(pageContent => this.page = pageContent)
      }
    }
  }
</script>
