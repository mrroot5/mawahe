<template>
  <v-container fluid tag="main">
    <v-row>
      <v-col>
        <h2 class="text-center">En construcción / On development</h2>
      </v-col>
    </v-row>
    <v-row dense align-content="center" justify="center">
      <v-col
        v-for="(item, index) in cards"
        :key="index"
        cols="auto"
        align-self="center"
      >
        <v-hover v-slot="{ hover }">
          <v-card :class="[{ 'on-hover': hover }]" class="card-img">
            <v-img
              :src="item.img_thumb"
              :lazy-src="item.img_thumb"
              :alt="item.title"
              :title="item.title"
            >
            </v-img>

            <v-card-actions>
              <v-card-title v-text="item.title"></v-card-title>

              <!-- <template v-slot:activator="{ on, attrs }"> -->
              <!-- <v-btn v-bind="attrs" v-on="on" icon> -->.
              <v-btn @click="cards[index].activate = true" icon>
                <v-icon>mdi-fullscreen</v-icon>
              </v-btn>
              <!-- </template> -->
              <v-btn :href="item.share" icon target="_blank">
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>

        <v-dialog
          v-model="cards[index].activate"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <v-card>
            <v-toolbar dark>
              <v-btn @click="cards[index].activate = false" icon dark>
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>{{ item.title }}</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <picture>
              <source
                :srcset="item.img_full_size_desktop"
                media="(min-width: 960px)"
              />
              <img
                :src="item.img_full_size_mobile"
                :lazy-src="item.img_full_size_mobile"
                :alt="item.title + 'big'"
                :title="item.title + 'big'"
              />
            </picture>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      cards: [
        {
          img_thumb: '/img/painting/ame/ame-no-uzume-300.jpg',
          img_full_size_mobile: '/img/painting/ame/ame-no-uzume-1000.jpg',
          img_full_size_desktop: '/img/painting/ame/ame-no-uzume-2000.jpg',
          share: 'https://www.instagram.com/mawahe/',
          title: 'Ame no Uzume',
          activate: false
        },
        {
          img_thumb: '/img/painting/demon/demon-300.jpg',
          img_full_size_mobile: '/img/painting/demon/demon-1000.jpg',
          img_full_size_desktop: '/img/painting/demon/demon-2000.jpg',
          share: 'https://www.instagram.com/p/CGc8q9Eh8yc/',
          title: 'Demon',
          activate: false
        },
        {
          img_thumb: '/img/painting/golden/golden-roses-ib-300.jpg',
          img_full_size_mobile: '/img/painting/golden/golden-roses-ib-1000.jpg',
          img_full_size_desktop:
            '/img/painting/golden/golden-roses-ib-2000.jpg',
          share: 'https://www.instagram.com/p/CGnKYTOhi1u/',
          title: 'Golden Roses IB',
          activate: false
        },
        {
          img_thumb: '/img/painting/halloween/halloween-300.jpg',
          img_full_size_mobile: '/img/painting/halloween/halloween-1000.jpg',
          img_full_size_desktop: '/img/painting/halloween/halloween-2000.jpg',
          share: 'https://www.instagram.com/mawahe/',
          title: 'Halloween',
          activate: false
        },
        {
          img_thumb: '/img/painting/mirrored/mirrored-300.jpg',
          img_full_size_mobile: '/img/painting/mirrored/mirrored-1000.jpg',
          img_full_size_desktop: '/img/painting/mirrored/mirrored-2000.jpg',
          share: 'https://www.instagram.com/p/CGh___nBtQF/',
          title: 'Mirrored',
          activate: false
        },
        {
          img_thumb: '/img/painting/overdose/overdose-300.jpg',
          img_full_size_mobile: '/img/painting/overdose/overdose-500.jpg',
          img_full_size_desktop: '/img/painting/overdose/overdose-2000.jpg',
          share: 'https://www.instagram.com/mawahe/',
          title: 'Overdose',
          activate: false
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
@media (min-width: 1264px) {
  .v-card.card-img {
    transition: opacity 0.4s ease-in-out;
  }
  .v-card.card-img:not(.on-hover) {
    opacity: 0.6;
  }
}
</style>
