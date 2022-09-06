<template>
  <div
    class="class"
    :class="`class--${color}`"
    :style="classStyle"
  >
    <span class="begin">{{ startTime.hours }}:{{ startTime.minutes === 0 ? '00' : startTime.minutes }}</span>
    <span class="end">{{ endTime.hours }}:{{ endTime.minutes === 0 ? '00' : endTime.minutes }}</span>
    <span class="class__text">{{ codigo }}</span>
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
    codigo: {
      type: String,
      required: true,
    }
  },

  data() {
    return {
      classStyle: null,
    }
  },

  computed: {
    listOfClasses() {
      // return this.$store.state.classes.classList;
      return this.$store.state.classes.placeholderData; 
    },

    color() {
      return this.listOfClasses.find(element => element.codigo === this.codigo).cor
    }
  },

  created() {
    const startPosition = (this.startTime.hours - 6) * (100 / 18) + (this.startTime.minutes) * (100 / (18 * 60));
    const classHeight = ((this.endTime.hours - 6) * (100 / 18) + (this.endTime.minutes) * (100 / (18 * 60))) - startPosition;

    this.classStyle = `top: ${startPosition + '%'}; height: ${classHeight + '%'};`
  },
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

  &--vermelho {
    background-color: rgba($color: rgb(167, 50, 50), $alpha: 0.6);
  }

  &--azul {
    background-color: rgba($color: rgb(54, 54, 167), $alpha: 0.6);
  }

  &--amarelo {
    background-color: rgba($color: rgb(156, 156, 65), $alpha: 0.6);
  }
}
</style>