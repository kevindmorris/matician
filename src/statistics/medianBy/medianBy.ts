/**
 * Compute the median of numbers in an array by the specified `iteratee` invoked on each element in the array.
 * @since 1.0.0
 * @param {Array} array An array.
 * @param {Function} iteratee The iteratee invoked on each element.
 * @returns {number} Returns the median.
 */
export default function medianBy(
  array: any[],
  iteratee: (o: any) => number
): number {
  if (array === null || array.length === 0) return 0;

  array = [...array].sort((a, b) => iteratee(a) - iteratee(b));

  const half = Math.floor(array.length / 2);

  return array.length % 2
    ? iteratee(array[half])
    : (iteratee(array[half - 1]) + iteratee(array[half])) / 2;
}
