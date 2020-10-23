<template>
  <v-container fluid tag="main">
    <v-row dense align-content="center" justify="center">
      <v-col
        v-for="(item, index) in cards"
        :key="index"
        cols="auto"
        align-self="center"
      >
        <v-card>
          <v-img :src="item.url" :alt="item.title" srcset=""> </v-img>

          <v-card-actions>
            <v-card-title v-text="item.title"></v-card-title>

            <v-btn :href="item.share" icon target="_blank">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
        <!-- <gallery :gallery-data="gallery" :overlay-class="overlayCss" /> -->
      </v-col>
    </v-row>
    <!-- <div class="main-content">
      <logo />
      <h1 class="title">Mawahe</h1>
      <h2 class="subtitle">Illustrator and Tattoo artist</h2>
      <h4 class="subtitle">Under construction / En construcción</h4>
      <div class="links">
        <a
          href="https://www.instagram.com/mawahe/"
          target="_blank"
          class="button--green"
        >
          Instagram
        </a>
      </div>
      <main-footer class="footer" />
    </div> -->
  </v-container>
</template>

<script>
// import Gallery from '~/components/views/Gallery'
// import Logo from '~/components/Logo.vue'
// import MainFooter from '~/components/commons/MainFooter'

export default {
  components: {
    // Gallery
    //   Logo,
    //   MainFooter
  },
  data() {
    return {
      cards: [
        {
          url: '/img/painting/ame/ame-no-uzume-300.jpg',
          share: 'https://www.instagram.com/mawahe/',
          title: 'Ame no uzume'
        },
        {
          url: '/img/painting/demon/demon-300.jpg',
          share: 'https://www.instagram.com/p/CGc8q9Eh8yc/',
          title: 'Demon'
        },
        {
          url: '/img/painting/golden/golden-roses-ib-300.jpg',
          share: 'https://www.instagram.com/p/CGnKYTOhi1u/',
          title: 'Golden Roses IB'
        },
        {
          url: '/img/painting/halloween/halloween-300.jpg',
          share: 'https://www.instagram.com/mawahe/',
          title: 'Halloween'
        },
        {
          url: '/img/painting/mirrored/mirrored-300.jpg',
          share: 'https://www.instagram.com/p/CGh___nBtQF/',
          title: 'Mirrored'
        },
        {
          url: '/img/painting/overdose/overdose-300.jpg',
          share: 'https://www.instagram.com/mawahe/',
          title: 'Sample image'
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
.overlay {
  display: none;
  bottom: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
}
</style>
