<template>
  <div class="table">
    <div class="table__head">
      <div class="ghost"/>
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
      <div class="table__body__timestamps">
        <span class="timestamp">6:00</span>
        <span class="timestamp">9:00</span>
        <span class="timestamp">12:00</span>
        <span class="timestamp">15:00</span>
        <span class="timestamp">18:00</span>
        <span class="timestamp">21:00</span>
        <span class="timestamp">00:00</span>
      </div>
      <div class="table__body__content">
        <TableColumn :weekday="2" :disciplinas="listOfClasses" />
        <TableColumn :weekday="3" :disciplinas="listOfClasses" />
        <TableColumn :weekday="4" :disciplinas="listOfClasses" />
        <TableColumn :weekday="5" :disciplinas="listOfClasses" />
        <TableColumn :weekday="6" :disciplinas="listOfClasses" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    listOfClasses() {
      // return this.$store.state.classes.classList;
      return this.$store.state.classes.placeholderData; 
    }
  },
}
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  max-width: 50rem;
  margin: auto;
  background-color: rgba($color: #fff, $alpha: 0.05);
  border-radius: $radius-lg;

  &__head {
    padding: 0.5rem 0;
    margin: 0 0.5rem;
    border-bottom: $border-1 solid rgba($color: #fff, $alpha: 0.05);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

    @media screen and (min-width: 1024px) {
      grid-template-columns: 2rem 1fr 1fr 1fr 1fr 1fr;
    }

    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__body {
    display: flex;
    align-items: center;
    justify-content: center;

    &__timestamps {
      height: 25rem;
      margin-right: 0.25rem;
      display: none;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;

      .timestamp {
        font-size: 10px;
      }

      @media screen and (min-width: 1024px) {
        display: flex;
      }
    }

    &__content {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  }

  .ghost {
    display: none;
    @media screen and (min-width: 1024px) {
      display: block;
    }
  }
}
</style>