<template>
  <div
    class="class"
    :style="classStyle"
  >
    <span class="begin">{{ startTime.hours }}:{{ startTime.minutes === 0 ? '00' : startTime.minutes }}</span>
    <span class="end">{{ endTime.hours }}:{{ endTime.minutes === 0 ? '00' : endTime.minutes }}</span>
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
  position: absolute;
  width: 100%;
  justify-content: center;
  background-color: rgba(#fff, 0.5);
  border-radius: 3px;

  &__text {
    padding: 0 0.3rem;
    font-weight: bold;
    font-size: 10px;
  }

  .begin {
    position: absolute;
    font-size: 0.5rem;
    top: 0;
    left: 0.2rem;
  }

  .end {
    position: absolute;
    font-size: 0.5rem;
    bottom: 0;
    right: 0.2rem;
  }
}
</style>