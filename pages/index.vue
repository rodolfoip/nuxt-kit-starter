<template>
  <main class="home">
    <section class="container">
      <div>
        <h1 class="title">
          {{title}}
        </h1>
        <h2 class="subtitle">
          {{subtitle}}
        </h2>
        <!--<ul class="list-unstyled">
          <li :key="index" v-for="(post, index) in posts">
            <h4>
              {{post.title}}
            </h4>
            <nuxt-link class="btn btn-primary" :to="`/${post.slug}`">Acesse</nuxt-link>
          </li>
        </ul>-->
        <nuxt-link class="btn btn-danger" to="/about">About</nuxt-link>
      </div>
    </section>
    <section class="section-default services">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div
              class="section--title section--title--lg  section--title--lined section--title--primary section--title--center section--title--left-sm mt-lg-5">
              <h2>Nossos Serviços</h2>
            </div>
            <div class="section--subtitle">
              Confira o que a Primesoft pode fazer para gerar resultados consistentes para sua Empresa na Internet!
            </div>
          </div>
          <div class="col-lg-8">
            <div class="card-deck">
              <div class="card">
                <img class="card-img-top" src="https://www.placecage.com/c/280/200" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" src="https://www.placecage.com/c/280/200" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This card has supporting text below as a natural lead-in to additional
                    content.</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" src="https://www.placecage.com/c/280/200" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to show that equal height
                    action.</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  import api from '../api/index'

  export default {
    async asyncData({params}) {
      // We can use async/await ES6 feature
      let {data} = await api.getPage('pagina-inicial')

      return {
        page: data
      }
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
