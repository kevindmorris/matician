import mean from "../mean";

/**
 * Find the sample variance of an array.
 *
 * @since 0.1.0
 * @param {Array} array An array.
 * @param {Function} [iteratee] The iteratee invoked on each element.
 * @returns {number} Returns the variance.
 *
 * @example
 * variance([1, 2, 3])
 * // => 1
 *
 * const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }]
 * variance(objects, ({ n }) => n)
 * // => 6.66666667
 */
export default function variance<T>(
  array: Array<T>,
  iteratee?: (obj: T) => number
): number {
  const m = mean(array, iteratee);

  let sum: number = NaN;

  for (let i = 0; i < array.length; i++) {
    const element = iteratee ? iteratee(array[i]) : array[i];

    if (typeof element === "number") {
      const value = Math.pow(element - m, 2);
      sum = Number.isNaN(sum) ? value : sum + value;
    }
  }

  return Number.isNaN(sum) ? sum : sum / (array.length - 1);
}
