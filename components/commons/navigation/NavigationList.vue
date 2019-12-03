<template>
  <ul>
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
ul {
  border: 1px solid black;
}
</style>
