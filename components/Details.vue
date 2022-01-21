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
    <div class="details__subheader">
      <h3 class="details__subheader__code">
        {{ listOfClasses[selectedClass].codigo }}
      </h3>
      <div class="details__subheader__tags">
        <p class="tag-lab">
          #laboratório
        </p>
        <p class="tag-eletiva">
          #eletiva
        </p>
      </div>
    </div>
    <div class="details__prof">
      <p class="details__prof__label">
        Professor(a):
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
        <li class="details__schedules__list__item">
          <span>Segunda-feira</span>
          <span>09:00 - 23:00</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    listOfClasses() {
      // return this.$store.state.classes.classList;
      return this.$store.state.classes.placeholderData; 
    },
    selectedClass() {
      return this.$store.state.classes.selectedClass
    },
  },
}
</script>

<style lang="scss" scoped>
.details {
  margin: 1rem 0;
  padding: 0.5rem;
  background-color: rgba($color: #fff, $alpha: 0.05);
  border-radius: $radius-lg;

  &__header {
    display: grid;
    grid-template-columns: auto 1.5rem;
    column-gap: 1rem;

    &__name {
      font-size: $text-base;
      font-weight: $font-bold;
      padding-bottom: 0.25rem;
    }

    &__options {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0.25rem;
      width: 1.5rem;
      height: 1.5rem;

      &__icon {
        fill: $text-main;
      }
    }
  }

  &__subheader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 0.5rem;
    border-bottom: $border-1 solid rgba($color: #fff, $alpha: 0.05);

    &__code {
      font-size: $text-sm;
    }

    &__tags {
      display: flex;
      align-items: center;

      .tag-lab {
        color: #4360b6;
        background-color: rgba($color: #4360b6, $alpha: 0.2);
        padding: 0.1rem 0.3rem;
        border-radius: $radius-lg;
      }

      .tag-eletiva {
        color: #b8b83e;
        background-color: rgba($color: #b8b83e, $alpha: 0.2);
        padding: 0.1rem 0.3rem;
        margin-left: 0.5rem;
        border-radius: $radius-lg;
      }
    }
  }

  &__prof {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0;
    border-bottom: $border-1 solid rgba($color: #fff, $alpha: 0.05);

    &__label {
      font-size: $text-xs;
      color: $text-darken;
    }

    &__name {
      font-size: $text-sm;
    }
  }

  &__item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    padding: 0.5rem 0;
    border-bottom: $border-1 solid rgba($color: #fff, $alpha: 0.05);

    &__label {
      font-size: $text-xs;
      color: $text-darken;
    }

    &__link {
      font-size: $text-sm;
      text-decoration: underline;
    }
  }

  &__schedules {
    padding-top: 0.5rem;

    &__label {
      font-size: $text-xs;
      color: $text-darken;
    }

    &__list {
      &__item {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 1rem;
        font-size: $text-sm;
      }
    }
  }
}
</style>