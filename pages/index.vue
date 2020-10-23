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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
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

<style lang="css" scoped></style>
