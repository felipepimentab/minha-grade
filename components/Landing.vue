<template>
  <div class="landing">
    <div class="group-1">
      <div class="group-text">
        <h2 class="landing__title">Organize todas as suas disciplinas em um único aplicativo.</h2>
        <h3 class="landing__subtitle">Agrupe todas as informações essenciais para sua organização ao longo do semestre.</h3>
      </div>
      <img class="landing__image" src="../assets/img/iphone-mockup-cutout-cutout.png" alt="iPhone Mockup">
    </div>
    <div class="group-2">
      <h2 class="landing__title"></h2>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.landing {
  width: 100%;
  padding: 2rem;
  color: white;

  .group-1 {
    display: grid;
    grid-template-columns: 5fr 5fr;
    width: 100%;
  }

  .group-text {
    text-align: end !important;
    padding-right: 1rem;
  }

  &__title {
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 0.5rem;
    margin-top: 2rem;
    text-align: right;
  }

  &__subtitle {
    width: 100%;
    font-size: 12px;
    line-height: 18px;
    margin-bottom: 0.5rem;
    color: whitesmoke;
    text-align: right;
  }

  &__image {
    width: 100%;
    height: auto;
  }
}
</style>