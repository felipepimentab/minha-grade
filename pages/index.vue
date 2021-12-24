<template>
  <div class="container">
    <Table v-if="listOfClasses.length > 0" />
    <Details v-if="listOfClasses.length > 0"/>
    <Landing v-else />
  </div>
</template>

<script>
export default {
  computed: {
    listOfClasses() {
      // return this.$store.state.classes.classList;
      return this.$store.state.classes.placeholderData;
      // return [];
    }
  },
}
</script>

<style lang="scss">
.container {
  width: 100%;
}
</style>
