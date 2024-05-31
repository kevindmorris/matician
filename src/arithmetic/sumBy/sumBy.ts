/**
 * Compute the sum of numbers in an array by the specified `iteratee` invoked on each element in the array.
 *
 * @since 1.0.0
 * @param {Array} array An array.
 * @param {Function} iteratee The iteratee invoked on each element.
 * @returns {number} Returns the sum.
 *
 * @example
 * const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }]
 * sumBy(objects, ({ n }) => n)
 * // => 20
 */
export default function sumBy(
  array: any[],
  iteratee?: (o: any) => number
): number {
  return array.reduce((prev: number, curr: any) => {
    const current = iteratee ? iteratee(curr) : curr;
    return prev + current;
  }, 0);
}
