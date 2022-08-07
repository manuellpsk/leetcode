//@ts-check

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n < 1) return 0;
  if (n <= 2) return 1;
  let prev2 = 0;
  let prev1 = 1;
  let aux;
  for (let i = 2; i <= n; i++) {
    aux = prev1;
    prev1 = prev1 + prev2;
    prev2 = aux;
  }
  return prev1;
};

// 0,1,1,2,3,5,8,13