<template>
  <div class="container">
    <!-- <navbar class="navbar" /> -->
    <div class="main-content">
      <logo />
      <!-- Cover page -->
      <amp-story
        standalone
        title="Joy of Pets"
        publisher="AMP tutorials"
        publisher-logo-src="assets/AMP-Brand-White-Icon.svg"
        poster-portrait-src="~/assets/images/cover.jpg"
      >
        <amp-story-page id="cover">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="~/assets/images/cover.jpg"
              width="720"
              height="1280"
              layout="responsive"
            >
            </amp-img>
          </amp-story-grid-layer>
          <amp-story-grid-layer template="vertical">
            <h1>The Joy of Pets</h1>
            <p>By AMP Tutorials</p>
          </amp-story-grid-layer>
        </amp-story-page>

        <!-- Page 1 (Cat): 1 layer (vertical) -->
        <amp-story-page id="page1">
          <amp-story-grid-layer template="vertical">
            <h1>Cats</h1>
            <amp-img
              src="~/assets/images/cat.jpg"
              width="720"
              height="1280"
              layout="responsive"
            >
            </amp-img>
            <q
              >Dogs come when they're called. Cats take a message and get back
              to you. --Mary Bly</q
            >
          </amp-story-grid-layer>
        </amp-story-page>

        <!-- Page 2 (Dog): 2 layers (fill + thirds) -->
        <amp-story-page id="page2">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="~/assets/images/dog.jpg"
              width="720"
              height="1280"
              layout="responsive"
            >
            </amp-img>
          </amp-story-grid-layer>
          <amp-story-grid-layer template="thirds">
            <h1 grid-area="upper-third">Dogs</h1>
            <p grid-area="lower-third">
              Dogs were probably the first tame animals. They have accompanied
              humans for some 10,000 years. Some scientists assert that all
              dogs, domestic and wild, share a common ancestor in the small
              South Asian wolf.
            </p>
          </amp-story-grid-layer>
        </amp-story-page>

        <!-- Page 3 (Bird): 3 layers (fill + vertical + vertical) + Audio-->
        <amp-story-page
          id="page3"
          background-audio="~/assets/sounds/bird-singing.mp3"
        >
          <amp-story-grid-layer template="fill">
            <amp-img
              src="~/assets/images/bird.jpg"
              width="720"
              height="1280"
              layout="responsive"
            >
            </amp-img>
          </amp-story-grid-layer>
          <amp-story-grid-layer template="vertical">
            <h1>Birds</h1>
          </amp-story-grid-layer>
          <amp-story-grid-layer template="vertical" class="bottom">
            <q
              >A bird is three things: Feathers, flight and song, And feathers
              are the least of these. -Marjorie Allen Seiffert</q
            >
          </amp-story-grid-layer>
        </amp-story-page>

        <!-- Page 4 (Rabbit): 3 layers (fill (video) + vertical + vertical) -->
        <amp-story-page id="page4">
          <amp-story-grid-layer template="fill">
            <amp-video
              autoplay
              loop
              width="720"
              height="1280"
              poster="~/assets/images/rabbit.jpg"
              layout="responsive"
            >
              <source src="~/assets/videos/rabbit.mp4" type="video/mp4" />
            </amp-video>
          </amp-story-grid-layer>
          <amp-story-grid-layer template="vertical">
            <h1>Rabbits</h1>
          </amp-story-grid-layer>
          <amp-story-grid-layer template="vertical" class="bottom">
            <p>
              Rabbits can learn to follow simple voice commands and come when
              called by name, and are curious and playful.
            </p>
          </amp-story-grid-layer>
        </amp-story-page>

        <!-- Page 5 (Collage): 2 layers + animations -->
        <amp-story-page id="page5">
          <amp-story-grid-layer template="vertical" class="noedge">
            <div class="wrapper">
              <amp-img
                src="~/assets/images/cat.jpg"
                width="720"
                height="1280"
                layout="responsive"
                animate-in="fade-in"
                animate-in-delay="0.4s"
              >
              </amp-img>
              <amp-img
                src="~/assets/images/dog.jpg"
                width="720"
                height="1280"
                layout="responsive"
                animate-in="fade-in"
                animate-in-delay="0.6s"
              >
              </amp-img>
              <amp-img
                src="~/assets/images/bird.jpg"
                width="720"
                height="1280"
                layout="responsive"
                animate-in="fade-in"
                animate-in-delay=".8s"
              >
              </amp-img>
              <amp-img
                src="~/assets/images/rabbit.jpg"
                width="720"
                height="1280"
                layout="responsive"
                animate-in="fade-in"
                animate-in-delay="1s"
              >
              </amp-img>
            </div>
          </amp-story-grid-layer>
          <amp-story-grid-layer template="vertical" class="center-text">
            <p class="banner-text" animate-in="whoosh-in-right">
              Pets can lower your stress levels!
            </p>
          </amp-story-grid-layer>
        </amp-story-page>

        <!-- Bookend -->
        <amp-story-bookend
          src="~/data/bookend.json"
          layout="nodisplay"
        ></amp-story-bookend>
      </amp-story>
      <!-- <main-footer class="footer" /> -->
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
// import Navbar from '~/components/commons/Navbar'
// import MainFooter from '~/components/commons/MainFooter'

export default {
  components: {
    Logo
    // Navbar,
    // MainFooter
  }

  // data: () => require('~/data/bookend.js')
}
</script>

<style lang="css" scoped>
amp-story {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI ', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji ', 'Segoe UI Emoji ',
    'Segoe UI Symbol ';
}

amp-story-page * {
  color: white;
  text-align: center;
}

[template='thirds'] {
  padding: 0;
}

.main-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

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
