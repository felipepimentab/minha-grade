<template>
  <div class="details">
    <div class="details__header">
      <h2 class="details__header__name">
        {{ `${listOfClasses[selectedClass].nome}${listOfClasses[selectedClass].eletiva ? ' (E)' : ''}` }}
      </h2>
      <button class="details__header__options">
        <BaseSvg
          class="details__header__options__icon"
          name="Share"
        />
      </button>
    </div>
    <h3 class="details__code">
      {{ listOfClasses[selectedClass].codigo }}
    </h3>
    <div class="details__tags">
      <p
        v-if="listOfClasses[selectedClass].laboratorio"
        class="tag-lab"
      >
        laboratório
      </p>
      <p
        v-if="listOfClasses[selectedClass].eletiva"
        class="tag-eletiva"
      >
        eletiva
      </p>
      <p
        v-else
        class="tag-obrigatoria"
      >
        obrigatória
      </p>
    </div>
    <div class="details__prof">
      <p class="details__prof__label">
        Docente:
      </p>
      <h3 class="details__prof__name">
        {{ listOfClasses[selectedClass].professor }}
      </h3>
    </div>
    <div class="details__item">
      <div class="details__item__group">
        <p class="details__item__label">
          Site:
        </p>
        <a
          class="details__item__link"
          :href="listOfClasses[selectedClass].site.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ listOfClasses[selectedClass].site.nome }}
        </a>
      </div>
      <div class="details__item__group">
        <p class="details__item__label">
          Aula:
        </p>
        <a
          class="details__item__link"
          :href="listOfClasses[selectedClass].aula.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ listOfClasses[selectedClass].aula.nome }}
        </a>
      </div>
    </div>
    <div class="details__schedules">
      <p class="details__schedules__label">Horários:</p>
      <ul class="details__schedules__list">
        <li
          v-for="aula in listOfClasses[selectedClass].aulas"
          :key="aula"
          class="details__schedules__list__item"
        >
          <span>{{ weekdayPTBR(aula.diaDaSemana) }}</span>
          <span>
            {{ `${addZero(aula.timeBegin.hours)}:${addZero(aula.timeBegin.minutes)}` }}
            -
            {{ `${addZero(aula.timeEnd.hours)}:${addZero(aula.timeEnd.minutes)}` }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState([
      'classes/placeholderData',
      'classes/selectedClass'
    ]),

    listOfClasses() {
      // return this.$store.state.classes.classList;
      return this.$store.state.classes.placeholderData; 
    },
    selectedClass() {
      return this.$store.state.classes.selectedClass
    },
  },

  methods: {
    addZero(n) {
      return n < 10 ? `0${n}` : n;
    },

    weekdayPTBR(day) {
      const diasDaSemana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];

      return diasDaSemana[day - 1];
    }
  }
}
</script>

<style lang="scss" scoped>
.details {
  margin: 1rem 0;
  padding: 1rem;
  background-color: rgba($color: #fff, $alpha: 0.1);
  border-radius: $radius-lg;

  &__header {
    display: grid;
    grid-template-columns: auto 2rem;
    column-gap: 1rem;

    &__name {
      font-size: $text-lg;
      font-weight: $font-bold;
      padding-bottom: 0.25rem;
    }

    &__options {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      width: 2rem;
      height: 2rem;
      background-color: rgba($color: #fff, $alpha: 0.1);
      border-radius: $radius-lg;

      &__icon {
        fill: $text-main-dark;
      }
    }
  }

  &__code {
    font-size: $text-base;
    color: $text-secondary-dark;
  }

  &__tags {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    border-bottom: $border-1 solid rgba($color: #fff, $alpha: 0.1);

    .tag-lab {
      color: $blue-tag;
      background-color: rgba($color: $blue-tag, $alpha: 0.2);
      padding: 0.1rem 0.3rem;
      border-radius: $radius-lg;
      margin-right: 0.5rem;
    }

    .tag-eletiva {
      color: $yellow-tag;
      background-color: rgba($color: $yellow-tag, $alpha: 0.2);
      padding: 0.1rem 0.3rem;
      margin-right: 0.5rem;
      border-radius: $radius-lg;
    }

    .tag-obrigatoria {
      color: #7eb828;
      background-color: rgba($color: #7eb828, $alpha: 0.2);
      padding: 0.1rem 0.3rem;
      border-radius: $radius-lg;
    }
  }


  &__prof {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0;
    border-bottom: $border-1 solid rgba($color: #fff, $alpha: 0.1);

    &__label {
      font-size: $text-sm;
      color: $text-secondary-dark;
    }

    &__name {
      font-size: $text-base;
    }
  }

  &__item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    padding: 0.5rem 0;
    border-bottom: $border-1 solid rgba($color: #fff, $alpha: 0.1);

    &__label {
      font-size: $text-sm;
      color: $text-secondary-dark;
    }

    &__link {
      font-size: $text-base;
      text-decoration: underline;
      color: $blue-tag;
    }
  }

  &__schedules {
    padding-top: 0.5rem;

    &__label {
      font-size: $text-sm;
      color: $text-secondary-dark;
    }

    &__list {
      &__item {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 1rem;
        font-size: $text-base;
      }
    }
  }
}
</style>