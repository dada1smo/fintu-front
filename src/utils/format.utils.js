export function formatCurrency(value) {
  if (value === 'No data') {
    return 'Sem valores';
  }

  const float = value / 100;
  const currencyBR = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(float);

  return currencyBR;
}

export function formatMonth(date) {
  const newDate = date.split('-');

  return newDate[1] + '\\' + newDate[0];
}

export function getMonthName(date) {
  const month = date.split('-')[1];

  switch (month) {
    case '01':
      return 'Janeiro';
    case '02':
      return 'Fevereiro';
    case '03':
      return 'Março';
    case '04':
      return 'Abril';
    case '05':
      return 'Maio';
    case '06':
      return 'Junho';
    case '07':
      return 'Julho';
    case '08':
      return 'Agosto';
    case '09':
      return 'Setembro';
    case '10':
      return 'Outubro';
    case '11':
      return 'Novembro';
    case '12':
      return 'Dezembro';
    default:
      return 'Mês inválido';
  }
}

export function getMonthNumber(month) {
  const months = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];

  return months[month];
}
