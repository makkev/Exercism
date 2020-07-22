const GIGASEC = 10 ** 9;
export const gigasecond = date => new Date(date.getTime() + GIGASEC * 1000);
