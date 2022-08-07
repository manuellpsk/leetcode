//@tscheck
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(s, t) {
  const hashCharS = new Map();
  const hashCharT = new Map();
  let res = true;
  Array.from(s).every((c, i) => {
    if (hashCharS.get(c) !== hashCharT.get(t[i])) {
      res = false;
    } else {
      hashCharS.set(c, i);
      hashCharT.set(t[i], i);
    }
    return res;
  });
  return res;
}

module.exports = isIsomorphic;
