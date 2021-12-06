<template>
  <div class="column">
    <div class="column-content">
      <TableItem
        v-for="aula in listOfClasses"
        :key="aula"
        :start-time="aula.timeBegin"
        :end-time="aula.timeEnd"
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

  data() {
    return {
      comeco: {
        hours: 23,
        minutes: 10,
      },
      fim: {
        hours: 24,
        minutes: 0
      }
    }
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
  width: calc(100% - 5px);
  padding: 5px 2.5px;
  height: 25rem;
  background-color: rgba($color: #000, $alpha: 0.6);

  &-content {
    width: 100%;
    position: relative;
    height: 100%;
  }
  
  &:first-child {
    border-radius: 3px 0 0 3px;
    padding-left: 5px;
    width: calc(100% - 7.5px);
  }

  &:last-child {
    border-radius: 0 3px 3px 0;
    padding-right: 5px;
    width: calc(100% - 7.5px);
  }
}
</style>