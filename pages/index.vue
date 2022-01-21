<template>
  <div class="container">
    <Table v-if="listOfClasses.length > 0" />
    <Landing v-else />
    <Details v-if="selectedClass"/>
  </div>
</template>

<script>
export default {
  computed: {
    listOfClasses() {
      // return this.$store.state.classes.classList;
      return this.$store.state.classes.placeholderData;
      // return [];
    },
    selectedClass() {
      return this.$store.state.classes.selectedClass
    },
  },
}
</script>

<style lang="scss">
.container {
  width: 100%;
  padding: 0 1rem;
}
</style>
