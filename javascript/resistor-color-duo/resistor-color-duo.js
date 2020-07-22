export const COLORS = [
  'black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet',
  'grey', 'white'
];

export const decodedValue = ([c0, c1]) =>
  Number(COLORS.indexOf(c0).toString() + COLORS.indexOf(c1).toString()) 