<template>
  <div class="add-class container">
    <h1 class="add-class__title">Adicionar nova disciplina à grade</h1>
    <form class="add-class__form">
      <section class="form-section">
        <div class="form-group">
          <input
            id="nome"
            v-model="disciplina.nome"
            class="form-group__input"
            type="text"
            name="nome"
            placeholder="Nome"
            aria-placeholder="Nome"
          >
        </div>
  
        <div class="form-group">
          <input
            id="codigo"
            v-model="disciplina.codigo"
            class="form-group__input"
            type="text"
            name="codigo"
            placeholder="Código"
            aria-placeholder="Código"
          >
        </div>
  
        <div class="form-group">
          <input
            id="professor"
            v-model="disciplina.professor"
            class="form-group__input"
            type="text"
            name="professor"
            placeholder="Professor(a)"
            aria-placeholder="Professor(a)"
          >
        </div>
      </section>
  
      <section class="form-section">
        <div class="form-group">
          <input
            id="sala"
            v-model="disciplina.sala"
            class="form-group__input"
            type="text"
            name="sala"
            placeholder="Sala de aula"
            aria-placeholder="Sala de aula"
          >
        </div>

        <div class="form-group">
          <input
            id="portal"
            v-model="disciplina.site.nome"
            class="form-group__input"
            type="text"
            name="portal"
            placeholder="Nome do portal"
            aria-placeholder="Nome do portal"
          >
        </div>
    
        <div class="form-group">
          <input
            id="portalLink"
            v-model="disciplina.site.link"
            class="form-group__input"
            type="url"
            name="portalLink"
            placeholder="Link do portal"
            aria-placeholder="Link do portal"
          >
        </div>
    
        <div class="form-group">
          <input
            id="aula"
            v-model="disciplina.aula.nome"
            class="form-group__input"
            type="text"
            name="aula"
            placeholder="Aula on-line"
            aria-placeholder="Aula on-line"
          >
        </div>
    
        <div class="form-group">
          <input
            id="linkAula"
            v-model="disciplina.aula.link"
            class="form-group__input"
            type="url"
            name="linkAula"
            placeholder="Link da aula on-line"
            aria-placeholder="Link da aula on-line"
          >
        </div>
      </section>
  
      <section class="form-section">
        <div class="form-group form-group--double">
          <label
            class="form-group__label"
            for="eletiva"
          >
            Eletiva?
          </label>
          <input
            id="eletiva"
            v-model="disciplina.eletiva"
            class="form-group__checkbox"
            type="checkbox"
            name="eletiva"
          >
        </div>
    
        <div class="form-group form-group--double">
          <label
            class="form-group__label"
            for="laboratorio"
          >
            Laboratório?
          </label>
          <input
            id="laboratorio"
            v-model="disciplina.laboratorio"
            class="form-group__checkbox"
            type="checkbox"
            name="laboratorio"
          >
        </div>

        <div class="form-group form-group--double">
          <label
            for="cor"
            class="form-group__label"
          >
            Cor:
          </label>
          <select
            id="cor"
            v-model="disciplina.cor"
            name="cor"
            class="form-group__select"
            :class="{ 'form-group__select--placeholder': disciplina.cor === 'placeholder' }"
            placeholder="Escolher"
            aria-placeholder="Escolher"
          >
            <option
              value="placeholder"
              class="form-group__select__option form-group__select__option--placeholder"
              disabled
            >
              Escolher
            </option>
            <option
              value="azul"
              class="form-group__select__option"
            >
              Azul
            </option>
            <option
              value="vermelho"
              class="form-group__select__option"
            >
              Vermelho
            </option>
            <option
              value="amarelo"
              class="form-group__select__option"
            >
              Amarelo
            </option>
          </select>
        </div>
      </section>

      <section class="form-section">
        <h3 class="form-section__subtitle">
          Adicionar horários
        </h3>

        <div class="form-group form-group--double">
          <label for="dia" class="form-group__label">
            Dia da semana
          </label>
          <select
            id="dia"
            v-model="aula.diaDaSemana"
            name="dia"
            class="form-group__select"
            :class="{ 'form-group__select--placeholder': aula.diaDaSemana === 'placeholder' }"

          >
            <option
              value="placeholder"
              class="form-group__select__option form-group__select__option--placeholder"
              disabled
            >
              Escolher
            </option>
            <option value="2" class="form-group__select__option">Segunda</option>
            <option value="3" class="form-group__select__option">Terça</option>
            <option value="4" class="form-group__select__option">Quarta</option>
            <option value="5" class="form-group__select__option">Quinta</option>
            <option value="6" class="form-group__select__option">Sexta</option>
          </select>
        </div>

        <div class="form-group form-group--double">
          <label class="form-group__label">
            Horário de início
          </label>
          <input
            id="time-begin"
            v-model="timeBegin"
            class="form-group__time"
            :class="{ 'form-group__time--placeholder': timeBegin === '00:00' }"
            type="time"
            name="timeBegin"
            min="06:00"
          >
        </div>

        <div class="form-group form-group--double">
          <label class="form-group__label">
            Horário de término
          </label>
          <input
            id="time-end"
            v-model="timeEnd"
            class="form-group__time"
            :class="{ 'form-group__time--placeholder': timeEnd === '00:00' }"
            type="time"
            name="timeEnd"
            min="06:00"
          >
        </div>

        <button
          class="form-group form-group--add-class"
          @click.prevent="addClass"
        >
          ADICIONAR
        </button>

        <ul
          v-if="disciplina.aulas.length>0"
          class="form-group form-group--class-list"
        >
          <li
            v-for="horario in disciplina.aulas"
            :key="horario.diaDaSemana"
            class="form-group__class"
          >
            <p>{{ weekdayPTBR(horario.diaDaSemana) }}</p>
            <p>{{ addZero(horario.timeBegin.hours) }}:{{ addZero(horario.timeBegin.minutes) }} - {{ addZero(horario.timeEnd.hours) }}:{{ addZero(horario.timeEnd.minutes) }}</p>
          </li>
        </ul>
      </section>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disciplina: {
        nome: null,
        codigo: null,
        professor: null,
        sala: null,
        site: {
          nome: null,
          link: null,
        },
        aula: {
          nome: null,
          link: null,
        },
        eletiva: false,
        laboratorio: false,
        cor: 'placeholder',
        aulas: [],
        entregas: [],
      },
      timeBegin: null,
      timeEnd: null,
      aula: {
        diaDaSemana: 'placeholder',
        codigo: null,
        timeBegin: {
          hours: 0,
          minutes: 0,
        },
        timeEnd: {
          hours: 0,
          minutes: 0,
        }
      }
    }
  },

  methods: {
    addClass() {
      this.aula.codigo = this.disciplina.codigo;

      if(this.timeBegin && this.timeEnd && this.aula.diaDaSemana) {
        this.aula.timeBegin.hours = parseInt(this.timeBegin.split(':')[0]);
        this.aula.timeBegin.minutes = parseInt(this.timeBegin.split(':')[1]);
        this.aula.timeEnd.hours = parseInt(this.timeEnd.split(':')[0]);
        this.aula.timeEnd.minutes = parseInt(this.timeEnd.split(':')[1]);
        this.timeBegin = null;
        this.timeEnd = null;

        this.disciplina.aulas.push(this.aula);
        this.aula = {
          diaDaSemana: 'placeholder',
          codigo: null,
          timeBegin: {
            hours: 0,
            minutes: 0,
          },
          timeEnd: {
            hours: 0,
            minutes: 0,
          }
        };
      }
    },

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
.add-class {
  &__title {
    font-size: $text-xl;
    margin-bottom: 1rem;
  }

  &__form {
    display: flex;
    flex-direction: column;
  }
}

.form-section {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
  grid-template-columns: 100%;
  padding: 0 0.5rem;
  border-radius: $radius-lg;
  background-color: rgba($color: #fff, $alpha: 0.1);

  &__subtitle {
    font-size: $text-sm;
    padding: 0.2rem 0;
    color: rgba($color: #fff, $alpha: 0.5);
  }
}

.form-group {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-top: 1px solid rgba($color: #fff, $alpha: 0.1);
  font-size: 1rem;

  &:first-child {
    border-top: none;
  }

  &__label {
    margin-bottom: 0.1rem;
  }

  &__input {
    width: 100%;
    border-radius: $radius-lg;
    background-color: rgba($color: #fff, $alpha: 0.0);
    padding: 0.75rem 0;
    color: #fff;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: rgba($color: #fff, $alpha: 0.3);
      font-size: 1rem;
    }
  }

  &__time {
    color: $white;
    border-radius: $radius-md;
    padding: 0.1rem;
    width: auto;
    background-color: rgba($color: #fff, $alpha: 0.3);

    &::-webkit-calendar-picker-indicator {
      color: $white;
    }

    &::-webkit-datetime-edit-hour-field, &::-webkit-datetime-edit-minute-field {
      padding: 0.1rem;
    }

    &--placeholder {
      color: rgba($color: #fff, $alpha: 0.3);
    }

    &:focus {
      outline: none;
    }
  }

  &--add-class {
    padding: 0.2rem;
    font-weight: $font-bold;
    text-align: center;
    cursor: pointer;
  }

  &--class-list {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  &__class {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0.2rem 0;
    color: rgba($color: #fff, $alpha: 0.5);
  }

  &--double {
    padding: 0.5rem 0;
  }

  &__checkbox {
    background-color: rgba($color: #fff, $alpha: 0.1);
    height: 1rem;
    width: 1rem;

    &:focus {
      outline: none;
    }
  }

  &__select {
    text-align: end;
    background-color: rgba($color: #fff, $alpha: 0);
    border-radius: $radius-lg;
    padding: 0.25rem;

    &:focus {
      outline: none;
    }

    &--placeholder {
      color: rgba($color: #fff, $alpha: 0.3);
    }

    &__option {
      color: #000;

      &--placeholder {
        display: none;
      }
    }
  }
}
</style>