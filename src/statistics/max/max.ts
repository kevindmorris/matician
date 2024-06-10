/**
 * Find the maximum in an array.
 *
 * @since 0.5.1
 * @param {Array} array An array.
 * @param {Function} [iteratee] The iteratee invoked on each element.
 * @returns {number} Returns the maximum.
 *
 * @example
 * max([1, 2, 3])
 * // => 3
 *
 * const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }]
 * max(objects, ({ n }) => n)
 * // => 8
 */
export default function max<T>(
  array: Array<T>,
  iteratee?: (obj: T) => number
): number {
  let max: number = NaN;

  for (let i = 0; i < array.length; i++) {
    const element = iteratee ? iteratee(array[i]) : array[i];

    if (typeof element === "number" && (element > max || Number.isNaN(max))) {
      max = element;
    }
  }

  return max;
}
