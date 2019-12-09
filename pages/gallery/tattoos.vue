<template>
  <div class="container">
    <navbar class="navbar" />
    <div class="main-content">
      <gallery :gallery-data="gallery" :overlay-class="overlayCss" />
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
    Navbar,
    MainFooter,
    Gallery
  },
  head() {
    return {
      titleTemplate: `Tattoo - %s`
    }
  },
  data() {
    return {
      overlayCss: 'secondary-color-bg',
      gallery: [
        {
          url: '/img/tattoo/tattoo-square-300.jpg',
          alt: 'Sample image'
        },
        {
          url: '/img/tattoo/tattoo-square-300.jpg',
          alt: 'Sample image'
        },
        {
          url: '/img/tattoo/tattoo-square-300.jpg',
          alt: 'Sample image'
        },
        {
          url: '/img/tattoo/tattoo-square-300.jpg',
          alt: 'Sample image'
        },
        {
          url: '/img/tattoo/tattoo-square-300.jpg',
          alt: 'Sample image'
        },
        {
          url: '/img/tattoo/tattoo-square-300.jpg',
          alt: 'Sample image'
        },
        {
          url: '/img/tattoo/tattoo-square-300.jpg',
          alt: 'Sample image'
        },
        {
          url: '/img/tattoo/tattoo-square-300.jpg',
          alt: 'Sample image'
        },
        {
          url: '/img/tattoo/tattoo-square-300.jpg',
          alt: 'Sample image'
        },
        {
          url: '/img/tattoo/tattoo-square-300.jpg',
          alt: 'Sample image'
        },
        {
          url: '/img/tattoo/tattoo-square-300.jpg',
          alt: 'Sample image'
        },
        {
          url: '/img/tattoo/tattoo-square-300.jpg',
          alt: 'Sample image'
        }
      ]
    }
  }
}
</script>
