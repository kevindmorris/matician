/**
 * Compute the sum of numbers in an array by the specified `iteratee` invoked on each element in the array.
 * @since 1.0.0
 * @param {Array} array An array.
 * @param {Function} iteratee The iteratee invoked on each element.
 * @returns {number} Returns the sum.
 */
export default function sumBy(
  array: any[],
  iteratee: (o: any) => number
): number {
  return array.reduce((prev: number, curr: any) => {
    const current = iteratee(curr);
    return prev + current;
  }, 0);
}
