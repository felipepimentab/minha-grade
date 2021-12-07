<template>
  <header class="header">
    <NuxtLink to="/" class="title">Minha Grade</NuxtLink>
    <div class="sandwich-menu" @click="toggleMenu()">
      <div class="sandwich-menu__icon">
        <BaseSvg
          name="Menu"
          width="24px"
          height="24px"
        />
      </div>
      <div class="side-menu" :class="{'side-menu--active' : menuIsOpen}">
        <NuxtLink to="/about" class="side-menu__item">Sobre</NuxtLink>
        <NuxtLink to="/classes" class="side-menu__item">Disciplinas</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {
      menuIsOpen: false,
    }
  },

  methods: {
    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: rgba($color: #000, $alpha: 0.6);

  .title {
    font-size: 1.5rem;
    color: #c3c3c7;
    text-decoration: none;
    font-weight: bold;
  }

  .sandwich-menu {
    &__icon{
      fill: #c3c3c7;
    }

    .side-menu {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      position: fixed;
      background-color: rgba($color: #000, $alpha: 0.6);
      backdrop-filter: blur(0.1rem);
      top: 4.25rem;
      right: -100vw;
      width: 100vw;
      height: calc(100vh - 4.25rem);
      padding: 1rem;
      transition: all 0.5s ease-in-out;
      z-index: 10;

      &--active {
        right: 0;
      }

      &__item {
        font-size: 1rem;
        font-weight: 700;
        padding: 0.5rem;
      }
    }
  }

  .nuxt-link-exact-active {
    color: white;
  }
}
</style>