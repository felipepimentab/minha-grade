<template>
  <div class="add-class container">
    <h1 class="add-class__title">Adicionar nova disciplina à grade</h1>
    <form class="add-class__form">
      <label class="add-class__form__label" for="name">Nome:</label>
      <input id="name" class="add-class__form__input" type="text" name="name">
  
      <label class="add-class__form__label" for="code">Código:</label>
      <input id="code" class="add-class__form__input" type="text" name="code">
  
      <label class="add-class__form__label" for="professor">Professor(a):</label>
      <input id="professor" class="add-class__form__input" type="text" name="professor">
  
      <label class="add-class__form__label" for="code">Portal:</label>
      <input id="code" class="add-class__form__input" type="text" name="code">
  
      <label class="add-class__form__label" for="code">Link do portal:</label>
      <input id="code" class="add-class__form__input" type="text" name="code">
  
      <label class="add-class__form__label" for="code">Aula on-line:</label>
      <input id="code" class="add-class__form__input" type="text" name="code">
  
      <label class="add-class__form__label" for="code">Link da aula on-line:</label>
      <input id="code" class="add-class__form__input" type="text" name="code">
  
      <label class="add-class__form__label" for="code">Eletiva?</label>
      <input id="code" class="add-class__form__input" type="text" name="code">
  
      <label class="add-class__form__label" for="code">Laboratório?</label>
      <input id="code" class="add-class__form__input" type="text" name="code">
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.add-class {
  &__title {
    font-size: $text-3xl;
  }

  &__form {
    padding: 0.5rem;
    border-radius: $radius-lg;
    background-color: rgba($color: #fff, $alpha: 0.1);;
    display: flex;
    flex-direction: column;

    &__label {
      margin-bottom: 0.3rem;
    }

    &__input {
      margin-bottom: 1rem;
      border-radius: $radius-lg;
      background-color: rgba($color: #fff, $alpha: 0.7);
      padding: 0.5rem;
      color: #000;
    }
  }
}
</style>