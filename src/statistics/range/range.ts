/**
 * Find the range of an array.
 *
 * @since 0.5.1
 * @param {Array} array An array.
 * @param {Function} [iteratee] The iteratee invoked on each element.
 * @returns {number} Returns the range.
 *
 * @example
 * range([1, 2, 3])
 * // => 2
 *
 * const range = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }]
 * range(objects, ({ n }) => n)
 * // => 6
 */
export default function range<T>(
  array: Array<T>,
  iteratee?: (obj: T) => number
): number {
  let min: number = NaN,
    max = NaN;

  for (let i = 0; i < array.length; i++) {
    const element = iteratee ? iteratee(array[i]) : array[i];

    if (typeof element === "number" && (element < min || Number.isNaN(min))) {
      min = element;
    }
    if (typeof element === "number" && (element > max || Number.isNaN(max))) {
      max = element;
    }
  }

  return max - min;
}
