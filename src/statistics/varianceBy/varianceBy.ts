import meanBy from "../meanBy";

/**
 * Compute the sample variance of numbers in an array by the specified `iteratee` invoked on each element in the array.
 *
 * @since 0.1.0
 * @param {Array} array An array.
 * @param {Function} [iteratee] The iteratee invoked on each element.
 * @returns {number} Returns the variance.
 */
export default function varianceBy(
  array: any[],
  iteratee?: (o: any) => number
): number {
  if (array === null || array.length === 0) return 0;

  const m = meanBy(array, iteratee);

  let result;

  for (const curr of array) {
    const current = iteratee ? iteratee(curr) : curr;
    if (current !== undefined && typeof current === "number") {
      result =
        result === undefined
          ? Math.pow(current - m, 2)
          : result + Math.pow(current - m, 2);
    }
  }
  return result ? result / (array.length - 1) : NaN;
}
