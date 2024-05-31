/**
 * Compute the sum of numbers in an array.
 *
 * @since 1.0.0
 * @param {Array} array An array of numbers.
 * @returns {number} Returns the sum.
 *
 * @example
 * sum([1,2,3])
 * // => 6
 */
export default function sum(array: number[]): number {
  if (array === null || array.length === 0) return 0;

  return array.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
}
