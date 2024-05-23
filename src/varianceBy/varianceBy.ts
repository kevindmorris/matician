import meanBy from "../meanBy";

/**
 * Compute the variance of numbers in an array by the specified `iteratee` invoked on each element in the array.
 * @since 1.0.0
 * @param {Array} array An array.
 * @param {Function} iteratee The iteratee invoked on each element.
 * @returns {number} Returns the variance.
 */
export default function varianceBy(
  array: any[],
  iteratee: (o: any) => number
): number {
  if (array === null || array.length === 0) return 0;

  const m = meanBy(array, iteratee);

  return (
    array.reduce((prev, curr) => {
      return prev + Math.pow(iteratee(curr) - m, 2);
    }, 0) /
    (array.length - 1)
  );
}
