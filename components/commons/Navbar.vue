<template>
  <header>
    <nav>
      <ul class="nav-list">
        <li
          v-for="(item, index) in liData"
          :key="`nav-item-${index}`"
          :id="`nav-item-${index}`"
          class="nav-item"
        >
          <nuxt-link
            :to="item.route"
            :exact="item.route === '/'"
            class="navigation-link"
          >
            {{ item.name }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      liData: [
        {
          name: 'Inicio',
          route: '/'
        },
        {
          name: 'Ilustraciones',
          route: '/gallery/illustrations'
        },
        {
          name: 'Tatuajes',
          route: '/gallery/tattoos'
        },
        {
          name: 'Sobre mi',
          route: '/about'
        },
        {
          name: 'Contacto',
          route: '/contact'
        }
      ]
    }
  }
}
</script>

<style>
.nav-list {
  display: flex;
  /* align-items: stretch; */
  /* justify-content: stretch */
  /* flex-direction: row; */
  /* flex-wrap: nowrap; */
}

.nav-item {
  text-align: center;
  /* flex: 0 0 auto; */
  /* flex: 1; */
  flex: 1 1 auto;
  /* border: solid 2px black;
  background-image: url('/img/tattoo-bg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; */
}

/* @media all and (max-width: 600px) {
  .nav-list {
    flex-wrap: wrap;
  }

  .nav-item {
    flex-basis: 50%;
  }
} */
</style>
