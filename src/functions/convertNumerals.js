function convertToRoman(num) {
  let roman = '';
  const romanNumerals = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
  };

  for (let i in romanNumerals) {
      while (num >= romanNumerals[i]) {
          roman += i;
          num -= romanNumerals[i];
      }
  }
  return roman;
}

// romanNumber is a string
function convertToArab(romanNumber) {
  const romanNumerals = {
      O: 0,
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };

    let result = 0;
    let prevValue = 0;

    romanNumber = romanNumber.toUpperCase().split('').reverse().join('');

    for (let i = romanNumber.length - 1; i >= 0; i--) {
      const currentRoman = romanNumber[i];
      const currentValue = romanNumerals[currentRoman];

      if (currentValue < prevValue) {
        result -= currentValue;
      } else {
        result += currentValue;
      }

      prevValue = currentValue;
    }

    return result;
  };

module.exports = {
  convertToRoman,
  convertToArab
};
