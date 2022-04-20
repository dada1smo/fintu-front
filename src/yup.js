import * as Yup from 'yup';

/* eslint-disable no-template-curly-in-string */
const ptBR = {
  mixed: {
    required: 'Campo obrigatório',
    notType: function notType(_ref) {
      switch (_ref.type) {
        case 'number':
          return 'Insira um valor válido';
        case 'string':
          return 'Campo inválido';
        case 'date':
          return 'Insira uma data válida';
        default:
          return 'Tipo inválido';
      }
    },
  },
  string: {
    max: '${path} precisa ter no máximo ${max} caracteres',
    length: 'O ${path} deve ter exatos ${length} caracteres',
    email: 'O campo deve ser um e-mail válido',
    url: '${path} precisa ser uma url válida',
    min: '${path} precisa ter no mínimo ${min} caracteres',
  },
  number: {
    integer: '${path} deve ser um número',
    min: '${path} precisa ser no mínimo ${min}',
    max: '${path} precisa ser no máximo ${max}',
    lessThan: '${path} precisa ser menor que ${less}',
    positive: 'Insira um número positivo',
  },
  date: {
    min: '${path} deve ser posterior a ${min}',
    max: '${path} deve ser anterior a  ${max}',
  },
};

Yup.setLocale(ptBR);

export * from 'yup';
