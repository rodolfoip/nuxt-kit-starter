<template>
  <section class="container">
    <div>
      <div class="text-center">
        <app-logo/>
        <h1 class="title">
          haha
        </h1>
        <h2 class="subtitle">
          asgagds
        </h2>
      </div>
      <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab"
                                                  data-toggle="tab">Home</a></li>
        <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>
        <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Messages</a>
        </li>
        <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a>
        </li>
      </ul>
      <div class="tab-content">
        <div role="tabpanel" class="tab-pane active" id="home">Home text...</div>
        <div role="tabpanel" class="tab-pane" id="profile">Profile text...</div>
        <div role="tabpanel" class="tab-pane" id="messages">Messages text...</div>
        <div role="tabpanel" class="tab-pane" id="settings">Settings text...</div>
      </div>
    </div>
  </section>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'

  export default {
    components: {
      AppLogo
    }
  }
</script>
