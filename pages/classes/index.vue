<template>
  <div class="container">
    <input
      id="procurar"
      class="search"
      type="search"
      name="procurar"
      placeholder="Buscar"
    >
    <div class="list-header">
      <h1 class="list-header__title">Lista de Disciplinas</h1>
      <BaseSvg
        name="Adicionar"
        class="list-header__icon"
        height="20px"
        width="20px"
      />
    </div>
    <div class="list">
      <ListItem
        v-for="singleClass in listOfClasses"
        :key="singleClass"
        :class-info="singleClass"
      />
    </div>
  </div>
</template>

<script>
import ListItem from '~/components/ListItem.vue';

export default {
  components: { ListItem },

    computed: {
    listOfClasses() {
      // return this.$store.state.classes.classList;
      return this.$store.state.classes.placeholderData; 
    }
  },
}
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  padding: 0.5rem;
  color: $text-main-light;
  border-radius: $radius-lg;
  background-color: rgba($color: #fff, $alpha: 0.3);

  &::placeholder {
    color: #fff;
  }
}

.list-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0 0.5rem;

  &__title {
    font-size: $text-base;
    font-weight: $font-bold;
  }

  &__icon {
    fill: $white;
  }
}

.list {
  border-radius: $radius-lg;
  background-color: rgba($color: #fff, $alpha: 0.1);
  padding: 0.5rem;
}
</style>