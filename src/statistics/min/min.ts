/**
 * Find the minimum in an array.
 *
 * @since 0.5.1
 * @param {Array} array An array.
 * @param {Function} [iteratee] The iteratee invoked on each element.
 * @returns {number} Returns the minimum.
 *
 * @example
 * min([1, 2, 3])
 * // => 1
 *
 * const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }]
 * min(objects, ({ n }) => n)
 * // => 2
 */
export default function min<T>(
  array: Array<T>,
  iteratee?: (obj: T) => number
): number {
  let min: number = NaN;

  for (let i = 0; i < array.length; i++) {
    const element = iteratee ? iteratee(array[i]) : array[i];

    if (typeof element === "number" && (element < min || Number.isNaN(min))) {
      min = element;
    }
  }

  return min;
}
