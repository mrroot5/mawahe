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
      titleTemplate: `Illustrations - %s`
    }
  },
  data() {
    return {
      overlayCss: 'primary-color-bg',
      gallery: [
        {
          url: '/img/painting/painting-square-300.jpg',
          alt: 'Sample image'
        },
        {
          url: '/img/painting/painting-square-300.jpg',
          alt: 'Sample image'
        },
        {
          url: '/img/painting/painting-square-300.jpg',
          alt: 'Sample image'
        },
        {
          url: '/img/painting/painting-square-300.jpg',
          alt: 'Sample image'
        },
        {
          url: '/img/painting/painting-square-300.jpg',
          alt: 'Sample image'
        },
        {
          url: '/img/painting/painting-square-300.jpg',
          alt: 'Sample image'
        },
        {
          url: '/img/painting/painting-square-300.jpg',
          alt: 'Sample image'
        },
        {
          url: '/img/painting/painting-square-300.jpg',
          alt: 'Sample image'
        },
        {
          url: '/img/painting/painting-square-300.jpg',
          alt: 'Sample image'
        },
        {
          url: '/img/painting/painting-square-300.jpg',
          alt: 'Sample image'
        },
        {
          url: '/img/painting/painting-square-300.jpg',
          alt: 'Sample image'
        },
        {
          url: '/img/painting/painting-square-300.jpg',
          alt: 'Sample image'
        }
      ]
    }
  }
}
</script>
