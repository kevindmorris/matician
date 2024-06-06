/**
 * Compute the sum of an array.
 *
 * @since 0.1.0
 * @param {Array} array An array.
 * @param {Function} [iteratee] The iteratee invoked on each element.
 * @returns {number} Returns the sum.
 *
 * @example
 * sum([1, 2, 3])
 * // => 6
 *
 * const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }]
 * sumBy(objects, ({ n }) => n)
 * // => 20
 */
export default function sum(
  array: any[],
  iteratee?: (o: any) => number
): number {
  let sum: number = NaN;

  for (let i = 0; i < array.length; i++) {
    const element = iteratee ? iteratee(array[i]) : array[i];

    if (typeof element === "number") {
      sum = Number.isNaN(sum) ? element : sum + element;
    }
  }

  return sum;
}
