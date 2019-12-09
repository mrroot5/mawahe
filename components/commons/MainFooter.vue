<template>
  <footer>
    <h3>&copy; Copyright All rights reserved</h3>
    <div class="social-media">
      <img src="/icons/instagram-logo-50.png" alt="" />
      <img src="/icons/deviantart-logo-50.png" alt="" />
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
footer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.social-media {
  margin-top: 2rem;
  flex-direction: row;
}

img {
  width: 50px;
  height: 50px;
}
</style>
