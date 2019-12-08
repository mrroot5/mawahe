<template>
  <div class="container">
    <navbar class="navbar" />
    <div class="main-content">
      <gallery :gallery-data="gallery" />
    </div>
    <main-footer class="footer" />
  </div>
</template>

<script>
import Navbar from '~/components/commons/Navbar'
import MainFooter from '~/components/commons/MainFooter'
import Gallery from '~/components/views/Gallery'

export default {
  components: {
    // Logo,
    Navbar,
    MainFooter,
    Gallery
  },
  head() {
    return {
      titleTemplate: `illustrations - %s`
    }
  },
  data() {
    return {
      gallery: [
        {
          url: 'http://placekitten.com/200/200',
          alt: 'Sample image'
        },
        {
          url: 'http://placekitten.com/200/200',
          alt: 'Sample image'
        },
        {
          url: 'http://placekitten.com/200/200',
          alt: 'Sample image'
        },
        {
          url: 'http://placekitten.com/200/200',
          alt: 'Sample image'
        },
        {
          url: 'http://placekitten.com/200/200',
          alt: 'Sample image'
        },
        {
          url: 'http://placekitten.com/200/200',
          alt: 'Sample image'
        },
        {
          url: 'http://placekitten.com/200/200',
          alt: 'Sample image'
        },
        {
          url: 'http://placekitten.com/200/200',
          alt: 'Sample image'
        },
        {
          url: 'http://placekitten.com/200/200',
          alt: 'Sample image'
        },
        {
          url: 'http://placekitten.com/200/200',
          alt: 'Sample image'
        },
        {
          url: 'http://placekitten.com/200/200',
          alt: 'Sample image'
        },
        {
          url: 'http://placekitten.com/200/200',
          alt: 'Sample image'
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
/* Grid */
/* .main-content {
  display: grid;
  place-items: stretch stretch;
  place-content: stretch stretch;
} */
/* /Grid */
</style>
