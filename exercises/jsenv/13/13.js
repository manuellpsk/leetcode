const romanToInt = (s) => {
  // s are the letters of number in roman
  const romanValues = new Map();
  romanValues.set("I", 1);
  romanValues.set("V", 5);
  romanValues.set("X", 10);
  romanValues.set("L", 50);
  romanValues.set("C", 100);
  romanValues.set("D", 500);
  romanValues.set("M", 1000);
  let suma = 0;
  for (let i = 0; i < s.length; i++) {
    let currentVal = romanValues.get(s[i]);
    let nextVal = romanValues.get(s[i + 1]);
    suma += currentVal;
    if (nextVal && currentVal < nextVal) {
      suma += nextVal - 2 * currentVal;
      i++;
    }
  }
  return suma;
};

console.log(romanToInt("VI"));
