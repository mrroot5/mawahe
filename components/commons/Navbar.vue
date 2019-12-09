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
          // name: 'I',
          route: '/gallery/illustrations'
        },
        {
          name: 'Tatuajes',
          // name: 'T',
          route: '/gallery/tattoos'
        },
        {
          name: 'Sobre mi',
          // name: 'S',
          route: '/about'
        },
        {
          name: 'Contacto',
          // name: 'C',
          route: '/contact'
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
header {
  display: grid;
}

nav {
  display: grid;
}

.nav-list {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 100vh;
  margin-top: 3rem;
}

.nav-item {
  text-align: center;
  flex: 1 1 auto;
}

.nav-item > a {
  color: #000;
  text-decoration: none;
}

@media (min-width: 720px) {
  .nav-list {
    flex-direction: row;
    margin-top: initial;
    height: initial;
  }
}
</style>
