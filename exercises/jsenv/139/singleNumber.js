/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  //   nums.sort((a, b) => a - b);
  //   let sign = 1;
  //   const res = nums.sort((a, b) => a - b).reduce((a, b, i) => {
  //     sign = -1 * sign;
  //     console.log({ a }, { b }, { i }, { sign });
  //     return a + b * sign;
  //   });
  const res = nums.reduce((a, b) => a ^ b);
  return res;
};

module.exports = singleNumber;
