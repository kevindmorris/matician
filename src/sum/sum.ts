/**
 * Compute the sum of numbers in an array.
 * @param {Array} array An array of numbers.
 * @returns {number} Returns the sum.
 */
export default function sum(array: number[]): number {
  return array.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
}
