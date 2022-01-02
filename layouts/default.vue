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
  overflow-x: hidden;
  top: 0;
  left: 0;
  font-size: 12px;
  font-family: Poppins, Arial, Helvetica, sans-serif;
  background: linear-gradient(150deg, #1f182e 0%, #1e172c 50%, #2f2546 100%);
  color: #c3c3c7;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>