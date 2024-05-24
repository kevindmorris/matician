/**
 * Compute the mean of numbers in an array by the specified `iteratee` invoked on each element in the array.
 * @since 1.0.0
 * @param {Array} array An array.
 * @param {Function} iteratee The iteratee invoked on each element.
 * @returns {number} Returns the mean.
 */
export default function meanBy(
  array: any[],
  iteratee: (o: any) => number
): number {
  if (array === null || array.length === 0) return 0;

  return (
    array.reduce((prev: number, curr: any) => {
      const current = iteratee(curr);
      return prev + current;
    }, 0) / array.length
  );
}
