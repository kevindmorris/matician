import mean from "../mean";
import stdev from "../stdev";

/**
 * Find the skewness of an array. **Skewness** describes how far to the left or right a data set distribution is distorted from a symmetrical bell curve. A distribution with a long left tail is left-skewed, or negatively-skewed. A distribution with a long right tail is right-skewed, or positively-skewed.
 *
 * @since 0.5.1
 * @param {Array} array An array of length `n` where `n>2`.
 * @param {Function} [iteratee] The iteratee invoked on each element.
 * @returns {number} Returns the skewness.
 *
 * @example
 * skewness([1, 2, 3])
 * // => 0
 *
 * const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }]
 * skewness(objects, ({ n }) => n)
 * // => 0
 */
export default function skewness(
  array: any[],
  iteratee?: (o: any) => number
): number {
  if (array.length <= 2) return NaN;

  let sum = NaN;

  const m = mean(array, iteratee);
  const s = stdev(array, iteratee);

  for (let index = 0; index < array.length; index++) {
    const element = iteratee ? iteratee(array[index]) : array[index];

    if (typeof element === "number") {
      const value = Math.pow((element - m) / s, 3);
      sum = Number.isNaN(sum) ? value : sum + value;
    }
  }

  return Number.isNaN(sum)
    ? sum
    : (sum * array.length) / ((array.length - 1) * (array.length - 2));
}
