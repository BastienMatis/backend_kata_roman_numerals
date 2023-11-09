const { convertToArab } = require('./convertNumerals');

test('Convert roman numbers to arab numbers', () => {
  expect(convertToArab('O')).toBe(0);
  expect(convertToArab('I')).toBe(1);
  expect(convertToArab('IV')).toBe(4);
  expect(convertToArab('IX')).toBe(9);
  expect(convertToArab('X')).toBe(10);
  expect(convertToArab('XL')).toBe(40);
  expect(convertToArab('XC')).toBe(90);
  expect(convertToArab('C')).toBe(100);
  expect(convertToArab('CD')).toBe(400);
  expect(convertToArab('CM')).toBe(900);
  expect(convertToArab('M')).toBe(1000);
});

test('Convert roman numbers to arab numbers - Empty string', () => {
  expect(convertToArab('')).toBe(0);
});

test('Convert roman numbers to arab numbers - Invalid string', () => {
  expect(convertToArab('XYZ')).toBe(NaN);
  expect(convertToArab('123')).toBe(NaN);
  expect(convertToArab('Invalid')).toBe(NaN);
});

test('Convert roman numbers to arab numbers - more than 3 times the same letter', () => {
    expect(convertToArab('IIII')).toBe(NaN);
    expect(convertToArab('XXXX')).toBe(NaN);
    expect(convertToArab('CCCC')).toBe(NaN);
    expect(convertToArab('MMMM')).toBe(NaN);
});
