<template>
  <div class="gallery-container">
    <div v-for="(item, index) in galleryData" :key="index" class="gallery-item">
      <img :src="item.url" :alt="item.alt" srcset="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    galleryData: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="css" scoped>
/* .gallery-container {
  display: grid;
  grid-auto-columns: minmax(100px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr);
  grid-auto-rows: minmax(100px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr)
    minmax(100px, 1fr);
  grid-gap: 1rem 1rem;
  grid-auto-flow: column;
  place-items: center stretch;
  place-content: stretch stretch;
} */
.gallery-container {
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  flex-direction: row;
}

.gallery-item {
  border: 2px solid black;
  flex: 0 0 25%;
  display: flex;
}

.gallery-item > img {
  flex: 1 1 auto;
}
</style>
