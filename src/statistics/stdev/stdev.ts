import variance from "../variance";

/**
 * Find the sample standard deviation of an array.
 *
 * @since 0.1.0
 * @param {Array} array An array.
 * @param {Function} [iteratee] The iteratee invoked on each element.
 * @returns {number} Returns the standard deviation.
 *
 * @example
 * stdev([1, 2, 3])
 * // => 1
 *
 * const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }]
 * stdev(objects, ({ n }) => n)
 * // => 2.5819889
 */
export default function stdev<T>(
  array: Array<T>,
  iteratee?: (obj: T) => number
): number {
  return Math.sqrt(variance(array, iteratee));
}
