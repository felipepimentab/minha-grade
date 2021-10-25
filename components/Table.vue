<template>
  <div class="table">
    <div class="table__head">
      <div class="table__head__item">
        <span class="table__head__item__text">Segunda</span>
      </div>
      <div class="table__head__item">
        <span class="table__head__item__text">Terça</span>
      </div>
      <div class="table__head__item">
        <span class="table__head__item__text">Quarta</span>
      </div>
      <div class="table__head__item">
        <span class="table__head__item__text">Quinta</span>
      </div>
      <div class="table__head__item">
        <span class="table__head__item__text">Sexta</span>
      </div>

    </div>
    <div class="table__body">
      <TableColumn />
      <TableColumn />
      <TableColumn />
      <TableColumn />
      <TableColumn />
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.table {
  width: 100%;

  &__head {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__body {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
}
</style>