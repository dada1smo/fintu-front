const currentYear = new Date().getFullYear();

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

export const monthsMock = months.map((month) => {
  return { month: `${currentYear}-${month}`, balance: 'No data' };
});
