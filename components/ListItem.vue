<template>
  <div class="list-item">
    <div class="list-item__info">
      <p>{{ classInfo.codigo }}</p>
      <p>{{ classInfo.nome }}</p>
    </div>
    <BaseSvg
        name="Menu"
        class="list-item__icon"
      />
  </div>
</template>

<script>
export default {
  name: 'ListItem',

  props: {
    classInfo: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.list-item {
  margin-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: $border-1 solid rgba($color: $white, $alpha: 0.2);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  &:last-child {
    border-bottom: 0;
  }

  &__icon {
    fill: $white;
  }
}
</style>