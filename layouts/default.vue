<template>
  <nuxt />
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: `Inicio - %s`
    }
  }
}
</script>

<style lang="css">
@import '~/assets/css/reset.css';

/* Colors */
.black {
  color: #000;
}

.primary-color {
  color: #00e8ff;
}

.secondary-color {
  color: #f300ff;
}
/* /Colors */

/* HTML Style */
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
/* /HTML Style */

/* Grid */
.container {
  min-height: 100wv;
  min-height: 100vh;
  display: grid;
  grid-auto-columns: repeat(1, 1fr);
  grid-auto-rows: repeat(3, 1fr);
  /* grid-auto-flow: column dense; */
  grid-template-areas:
    'navbar'
    'main'
    'footer';
  grid-gap: 1rem 0; /* row column */
  place-items: center stretch;
  place-content: stretch stretch;
}

.navbar {
  grid-area: 'navbar';
}

.main-content {
  grid-area: 'main-content';
  place-self: stretch center;
  padding: 3em;
}

.footer {
  grid-area: 'footer';
  padding: 3em;
}
/* /Grid */

/* Buttons */
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
/* /Buttons */
</style>
