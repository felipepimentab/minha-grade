<template>
  <nav class="header">
    <NuxtLink to="/" class="header__title">
      Minha Grade
    </NuxtLink>
    <button
      class="header__button"
      @click="toggleMenu()"  
    >
      <BaseSvg
        class="header__button__icon"
        name="Menu"
        width="20px"
        height="20px"
      />
    </button>
    <ul
      class="header__menu"
      :class="{'header__menu--active': menuIsOpen}"  
    >
      <li class="header__menu__item">
        <NuxtLink
          to="/classes"
          class="header__menu__item__link"
          @click="toggleMenu()"
        >
          Disciplinas
        </NuxtLink>
      </li>
      <li class="header__menu__item">
        <NuxtLink
          to="/classes/add"
          class="header__menu__item__link"
          @click="toggleMenu()"
        >
          Adicionar
        </NuxtLink>
      </li>
      <li class="header__menu__item">
        <NuxtLink
          to="/about"
          class="header__menu__item__link"
          @click="toggleMenu()"
        >
          Sobre
        </NuxtLink>
      </li>
      <li class="header__menu__item">
        <NuxtLink
          to="/login"
          class="header__menu__item__link"
          @click="toggleMenu()"
        >
          Login
        </NuxtLink>
      </li>
      <li class="header__menu__item">
        <button
          class="header__menu__item__link"
          @click="toggleDarkMode()"
        >
          Modo noturno
        </button>
      </li>
    </ul>
  </nav>
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
  },
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  z-index: 9999;
  position: sticky;
  top: 0;
  padding: 1rem;
  margin-bottom: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $background-dark;

  &__title {
    font-size: $text-lg;
    font-weight: bold;
    color: $text-main-dark;
    text-decoration: none;
  }

  &__button{
    &__icon {
      fill: $text-main-dark;
    }
  }

  &__menu {
    top: 3.5rem;
    right: 100vw;
    width: 100%;
    height: calc(100vh - 3.5rem);
    position: absolute;
    background-color: $background-dark;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    &--active {
      right: 0;
    }
  }

  .nuxt-link-exact-active {
    color: white;
  }
}
</style>