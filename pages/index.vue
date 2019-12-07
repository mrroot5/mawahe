<template>
  <div class="container">
    <navbar class="navbar" />
    <div class="main-content">
      <logo />
      <h1 class="title">Mawahe</h1>
      <h2 class="subtitle">Illustrator and Tattoo artist</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Instagram
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          DeviantArt
        </a>
      </div>
    </div>
    <main-footer class="footer" />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Navbar from '~/components/commons/Navbar'
import MainFooter from '~/components/commons/MainFooter'

export default {
  components: {
    Logo,
    Navbar,
    MainFooter
  }
}
</script>

<style lang="css" scoped>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
