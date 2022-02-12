<template>
  <header class="header">
    <NuxtLink to="/" class="title">Minha Grade</NuxtLink>
    <div class="sandwich-menu" @click="toggleMenu()">
      <div class="sandwich-menu__icon">
        <BaseSvg
          name="Menu"
          width="20px"
          height="20px"
        />
      </div>
      <div class="side-menu" :class="{'side-menu--active' : menuIsOpen}">
        <div class="side-menu__links">
          <NuxtLink to="/about" class="side-menu__item">Sobre</NuxtLink>
          <NuxtLink to="/classes" class="side-menu__item">Disciplinas</NuxtLink>
          <NuxtLink to="/login" class="side-menu__item">Login</NuxtLink>
        </div>
      <p>Opções</p>
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

  created() {
    console.log('----------------------')
    console.log('color mode value:', this.$colorMode.value);
    console.log('----------------------')
  },

  methods: {
    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    }
  },
}
</script>

<style lang="scss" scoped>
.dark-mode {
  .side-menu {
    background: rgba($color: $background-dark, $alpha: 0.7);
  }
}

.header {
  width: 100%;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  justify-content: space-between;
  padding: 1rem;
  background-color: rgba($color: #fff, $alpha: 0);

  .title {
    font-size: $text-lg;
    font-weight: bold;
    color: $text-main-dark;
    text-decoration: none;
  }

  .sandwich-menu {
    &__icon{
      fill: $text-main-dark;
    }

    .side-menu {
      position: fixed;
      backdrop-filter: blur(0.1rem);
      top: 3.5rem;
      right: -100vw;
      width: 100vw;
      height: calc(100vh - 1.5rem);
      padding: 1rem;
      transition: all 0.5s ease-in-out;

      &--active {
        right: 1rem;
      }

      &__item {
        font-size: 1rem;
        padding: 0.5rem;
      }

      &__links {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
  
  
      }
    }

    
  }

  .nuxt-link-exact-active {
    color: white;
  }
}
</style>