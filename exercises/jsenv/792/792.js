/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
export var numMatchingSubseq = function (s, words) {
  let founded = [];
  let ifounded = 0;
  words.map((laword) => {
    if (!founded.includes(laword)) {
      let index = 0;
      for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        if (char === laword.charAt(index)) {
          index++;
        }
        if (index === laword.length) {
          if (!founded.includes(laword)) {
            founded.push(laword);
          }
          ifounded++;
          break;
        }
      }
    } else {
      ifounded++;
    }
  });
  return ifounded;
};
