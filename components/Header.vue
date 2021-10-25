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
  width: calc(100% - 2rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

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
      top: 10vh;
      right: -80vw;
      width: 80vw;
      height: 90vh;

      &--active {
        right: 0;
      }
    }
  }
}
</style>