/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
export default function removeElement(nums, val) {
  let res = 0;
  let j = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      // * Buscar el ultimo elemento que no es igual a val para cambiar.
      while (j > i) {
        if (nums[j] !== val) break;
        j -= 1;
      }
      if (j == i) break;
      // * Swap value
      let aux = nums[i];
      nums[i] = nums[j];
      nums[j] = aux;
    }
    res += 1;
  }
  return res;
}
