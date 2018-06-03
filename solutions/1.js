/* 
 * Given an array of numbers, return whether any two sums to K.
 * For example, given [10, 15, 3, 7] and K of 17,
 * return true since 10 + 7 is 17.
 */

const solution = (numbers, k) => {
  const encountered = new Set();
  for (const number of numbers) {
    const target = k - number;
    if (encountered.has(target)) {
      return true;
    }
    encountered.add(number);
  }
  return false;
}

module.exports = {
  solution
}
