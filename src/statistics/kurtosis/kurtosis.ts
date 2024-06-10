import mean from "../mean";
import stdev from "../stdev";

/**
 * Find the kurtosis of an array. **Kurtosis** describes the extremeness of the tails of a population distribution and is an indicator of data outliers. High kurtosis means that a data set has tail data that is more extreme than a normal distribution. Low kurtosis means the tail data is less extreme than a normal distribution.
 *
 * @since 0.5.1
 * @param {Array} array An array of length `n` where `n>3`.
 * @param {Function} [iteratee] The iteratee invoked on each element.
 * @returns {number} Returns the kurtosis.
 *
 * @example
 * kurtosis([1, 2, 3])
 * // => 0
 *
 * const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }]
 * kurtosis(objects, ({ n }) => n)
 * // => 0
 */
export default function kurtosis(
  array: any[],
  iteratee?: (o: any) => number
): number {
  if (array.length <= 3) return NaN;

  let sum = NaN;

  const m = mean(array, iteratee);
  const s = stdev(array, iteratee);

  for (let index = 0; index < array.length; index++) {
    const element = iteratee ? iteratee(array[index]) : array[index];

    if (typeof element === "number") {
      const value = Math.pow((element - m) / s, 4);
      sum = Number.isNaN(sum) ? value : sum + value;
    }
  }

  return Number.isNaN(sum)
    ? sum
    : (sum * array.length * (array.length + 1)) /
        ((array.length - 1) * (array.length - 2) * (array.length - 3));
}
