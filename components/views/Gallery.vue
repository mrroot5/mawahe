<template>
  <div class="gallery-container">
    <div v-for="(item, index) in galleryData" :key="index" class="gallery-item">
      <img :src="item.url" :alt="item.alt" srcset="" />
      <div :class="[overlayClass]" class="overlay">
        <img
          src="/icons/share_android-50.png"
          alt="share-icon"
          srcset=""
          class="gallery-icon"
        />
        <img
          src="/icons/heart-50.png"
          alt="heart-icon"
          srcset=""
          class="gallery-icon"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    galleryData: {
      type: Array,
      default: () => []
    },
    overlayClass: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="css" scoped>
.gallery-container {
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5px;
}

.gallery-item {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  margin: 5px;
  position: relative;
}

.gallery-item > img {
  flex: 1 1 auto;
  border-radius: 10px;
}

.overlay {
  display: none;
  bottom: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
}

.gallery-item:hover .overlay {
  display: flex;
  bottom: 0;
  align-items: center;
  justify-content: space-around;
}

.gallery-icon {
  width: 40px;
  height: 40px;
}
</style>
