<template>
  <div class="app">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
body, html {
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  overflow-x: hidden;
}

.app {
  width: 100vw;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 12px;
  font-family: Poppins, Arial, Helvetica, sans-serif;
  color: $text-main-dark;
}

.dark-mode .app {
  background-color: $background-dark;
}
</style>