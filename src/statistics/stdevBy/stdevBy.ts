import varianceBy from "../varianceBy/varianceBy";

/**
 * Compute the standard deviation of numbers in an array by the specified `iteratee` invoked on each element in the array.
 * @since 1.0.0
 * @param {Array} array An array.
 * @param {Function} iteratee The iteratee invoked on each element.
 * @returns {number} Returns the standard deviation.
 */
export default function stdevBy(
  array: any[],
  iteratee: (o: any) => number
): number {
  if (array === null || array.length === 0) return 0;

  return Math.sqrt(varianceBy(array, iteratee));
}
