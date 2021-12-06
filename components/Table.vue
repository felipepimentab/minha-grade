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
        <TableColumn :weekday="2" :disciplinas="placeholderData" />
        <TableColumn :weekday="3" :disciplinas="placeholderData" />
        <TableColumn :weekday="4" :disciplinas="placeholderData" />
        <TableColumn :weekday="5" :disciplinas="placeholderData" />
        <TableColumn :weekday="6" :disciplinas="placeholderData" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      placeholderData: [
        {
          nome: 'Introdução à Visão Computacional',
          codigo: 'SEL0339',
          professor: 'Marcelo Andrade Costa Vieira',
          site: {
            nome: 'Moodle',
            link: 'https://edisciplinas.usp.br/enrol/index.php?id=91229',
          },
          aula: {
            nome: 'Google Meets',
            link: 'https://meet.google.com/wbu-ioje-ybd?pli=1&authuser=1',
          },
          eletiva: true,
          aulas: [
            {
              diaDaSemana: 2,
              timeBegin: {
                hours: 10,
                minutes: 10,
              },
              timeEnd: {
                hours: 11,
                minutes: 50,
              }
            },
            {
              diaDaSemana: 5,
              timeBegin: {
                hours: 22,
                minutes: 30,
              },
              timeEnd: {
                hours: 24,
                minutes: 0,
              }
            },
          ]
        },

        {
          nome: 'Conversão Eletromecânica de Energia',
          codigo: 'SEL0329',
          professor: 'José Carlos de Melo Vieira Júnior',
          site: {
            nome: 'Moodle',
            link: 'https://edisciplinas.usp.br/enrol/index.php?id=91030',
          },
          aula: {
            nome: 'Google Meets',
            link: 'https://meet.google.com/twq-pcwm-sqf?pli=1&authuser=1',
          },
          eletiva: false,
          aulas: [
            {
              diaDaSemana: 3,
              timeBegin: {
                hours: 10,
                minutes: 10,
              },
              timeEnd: {
                hours: 11,
                minutes: 50,
              }
            },
            {
              diaDaSemana: 4,
              timeBegin: {
                hours: 14,
                minutes: 20,
              },
              timeEnd: {
                hours: 16,
                minutes: 0,
              }
            }
          ]
        },

        {
          nome: 'Estatística 1',
          codigo: 'SME0320',
          professor: 'Eduardo Fontoura Costa',
          site: {
            nome: 'Moodle',
            link: 'https://edisciplinas.usp.br/enrol/index.php?id=92645',
          },
          aula: {
            nome: 'Google Meets',
            link: 'https://meet.google.com/eue-khdu-hpk?pli=1&authuser=1',
          },
          eletiva: false,
          aulas: [
            {
              diaDaSemana: 2,
              timeBegin: {
                hours: 16,
                minutes: 20,
              },
              timeEnd: {
                hours: 18,
                minutes: 0,
              }
            },
            {
              diaDaSemana: 4,
              timeBegin: {
                hours: 8,
                minutes: 10,
              },
              timeEnd: {
                hours: 9,
                minutes: 50,
              }
            }
          ]
        },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  max-width: 50rem;
  margin: auto;

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
    display: flex;
    align-items: center;
    justify-content: center;

    &__timestamps {
      height: 25rem;
      margin-right: 0.25rem;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;

      .timestamp {
        font-size: 10px;
      }
    }

    &__content {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  }
}
</style>