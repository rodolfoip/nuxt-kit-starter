<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <nuxt-link to="/" class="nav-item nav-link">Home</nuxt-link>
            <nuxt-link to="/knowledge" class="nav-item nav-link">Conhecimentos</nuxt-link>
            <nuxt-link to="/portifolio" class="nav-item nav-link">Portifólio</nuxt-link>
            <nuxt-link to="/blog" class="nav-item nav-link">Blog</nuxt-link>
          </div>
        </div>
      </div>
    </nav>
    <nuxt/>
  </div>
</template>
