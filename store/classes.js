export const state = () => ({
  classList: [],
  selectedClass: null,
  placeholderData: [ // used fot testing
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
})

export const actions = {
  addClass({ commit }, classInfo ) {
    commit('ADD_CLASS', classInfo)
  },

  setSelectedClass({ commit }, singleClass ) {
    commit('SET_SELECTED_CLASS', singleClass)
  },
}

export const mutations = {
  ADD_CLASS(state, payload) {
    state.classList.push(payload);
  },

  SET_SELECTED_CLASS(state, payload) {
    state.selectedClass = payload;
  }
}