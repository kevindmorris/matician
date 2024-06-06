import meanBy from "../meanBy";
import stdevBy from "../stdevBy";

/**
 * Find the skewness of a sample.
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
 * meanBy(objects, ({ n }) => n)
 * // => 0
 */
export default function skewness(
  array: any[],
  iteratee?: (o: any) => number
): number {
  let result = NaN;

  const mean = meanBy(array, iteratee);
  const stdev = stdevBy(array, iteratee);

  for (let index = 0; index < array.length; index++) {
    const element = iteratee ? iteratee(array[index]) : array[index];

    if (element !== undefined && typeof element === "number") {
      result = Number.isNaN(result)
        ? Math.pow((element - mean) / stdev, 3)
        : result + Math.pow((element - mean) / stdev, 3);
    }
  }

  if (!Number.isNaN(result))
    result =
      (result * array.length) / ((array.length - 1) * (array.length - 2));

  return result;
}
