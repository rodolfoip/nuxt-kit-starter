<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <nuxt-link to="/" class="nav-item nav-link">Página Inicial</nuxt-link>
            <nuxt-link class="nav-item nav-link" to="/about">Sobre</nuxt-link>
          </div>
        </div>
      </div>
    </nav>
    <nuxt/>
  </div>
</template>
