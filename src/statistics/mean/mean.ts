/**
 * Find the mean of an array.
 *
 * @since 0.1.0
 * @param {Array} array An array.
 * @param {Function} [iteratee] The iteratee invoked on each element.
 * @returns {number} Returns the mean.
 *
 * @example
 * mean([1, 2, 3])
 * // => 2
 *
 * const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }]
 * mean(objects, ({ n }) => n)
 * // => 5
 */
export default function mean<T>(
  array: Array<T>,
  iteratee?: (obj: T) => number
): number {
  let sum: number = NaN;

  for (let i = 0; i < array.length; i++) {
    const element = iteratee ? iteratee(array[i]) : array[i];

    if (typeof element === "number") {
      sum = Number.isNaN(sum) ? element : sum + element;
    }
  }

  return Number.isNaN(sum) ? sum : sum / array.length;
}
