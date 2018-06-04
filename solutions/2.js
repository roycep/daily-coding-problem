/*
 * Given an array of integers, return a new array such that each element at index i of the new array
 * is the product of all the numbers in the original array except the one at i.
 * For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
 * If our input was [3, 2, 1], the expected output would be [2, 3, 6].
 *
 * Follow-up: what if you can't use division?
 */

const solution = (numbers) => {

  const N = numbers.length;

  const leftAcc = new Array(N).fill(0);

  for (let i = 0; i < numbers.length; ++i) {
    const product = (leftAcc[i-1] || 1) * numbers[i];
    leftAcc[i] = product;
  }
  
  const rightAcc = new Array(N).fill(0);

  for (let i = numbers.length - 1; i >= 0; --i) {
    const product = (rightAcc[i+1] || 1) * numbers[i];
    rightAcc[i] = product;
  }

  const result = new Array(N).fill(0);

  for (let i = 0; i < numbers.length; ++i) {
    const leftProduct = leftAcc[i-1] === undefined ? 1 : leftAcc[i-1];
    const rightProduct = rightAcc[i+1] === undefined ? 1 : rightAcc[i+1];
    const productWithoutCurr = leftProduct * rightProduct;
    result[i] = productWithoutCurr;
  }

  return result;
}

module.exports = {
  solution
}
