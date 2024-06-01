/**
 * Compute the sum of numbers in an array by the specified `iteratee` invoked on each element in the array.
 *
 * @since 1.0.0
 * @param {Array} array An array.
 * @param {Function} [iteratee] The iteratee invoked on each element.
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
  if (array === null || array.length === 0) return 0;

  let result;

  for (const curr of array) {
    const current = iteratee ? iteratee(curr) : curr;
    if (current !== undefined && typeof current === "number") {
      result = result === undefined ? current : result + current;
    }
  }
  return result || NaN;
}
