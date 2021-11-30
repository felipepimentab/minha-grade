<template>
  <div
    class="class"
    :class="itemClass"
    :style="classStyle"
  >
    <span class="class__text">SEL0123</span>
  </div>
</template>

<script>
export default {
  props: {
    startTime: {
      type: Object,
      required: true,
    },
    endTime: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      classStyle: null,
    }
  },

  created() {
    const startPosition = (this.startTime.hours - 6) * (100 / 18) + (this.startTime.minutes) * (100 / (18 * 60));
    const classHeight = ((this.endTime.hours - 6) * (100 / 18) + (this.endTime.minutes) * (100 / (18 * 60))) - startPosition;

    this.classStyle = `top: ${startPosition + '%'};
                       height: ${classHeight + '%'};`
  }
}
</script>

<style lang="scss" scoped>
.class {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
  background-color: rgba(#fff, 0.5);
  border-radius: 3px;

  &__text {
    padding: 0 0.3rem;
    font-weight: bold;
    font-size: 10px;
  }
}
</style>