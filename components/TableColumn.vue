<template>
  <div class="column">
    <div class="column-content">
      <TableItem
        v-for="aula in listOfClasses"
        :key="aula"
        :start-time="aula.timeBegin"
        :end-time="aula.timeEnd"
        :codigo="aula.codigo"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    weekday: {
      type: Number,
      required: true,
    },
    disciplinas: {
      type: Array,
      required: true,
    },
  },

  computed: {
    listOfClasses() {
      const auxList = [];

      this.disciplinas.forEach(disciplina => {
        auxList.push(disciplina.aulas.filter(aula => aula.diaDaSemana === this.weekday));
      });

      const classList = [];

      auxList.forEach(aulas => {
        aulas.forEach(aula => {
          classList.push(aula);
        });
      });

      return classList;
    }
  },
}
</script>

<style lang="scss" scoped>
.column {
  width: 100%;
  height: 25rem;

  &-content {
    width: 100%;
    position: relative;
    height: 100%;
  }
}
</style>