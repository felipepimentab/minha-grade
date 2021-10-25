<template>
  <div
    class="class"
    :class="itemClass"
  >
    <span class="class__text">SEL0123</span>
  </div>
</template>

<script>
export default {
  props: {
    startTime: {
      type: String,
      default: '00:00',
    },
    endTime: {
      type: String,
      default: '00:00',
    },
  },

  data() {
    return {
      itemClass: 'h08-00',
    }
  }
}
</script>

<style lang="scss" scoped>
.class {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(#fff, 0.5);
  width: calc(100%);
  border-radius: 3px;
  font-size: 10px;
  height: 20px;

  &__text {
    padding: 0 0.3rem;
  }
}

</style>