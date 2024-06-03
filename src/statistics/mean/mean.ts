/**
 * Compute the mean of numbers in an array.
 *
 * @since 0.1.0
 * @param {Array} array An array of numbers.
 * @returns {number} Returns the mean.
 */
export default function mean(array: number[]): number {
  if (array === null || array.length === 0) return 0;

  return (
    array.reduce((prev, curr) => {
      return prev + curr;
    }, 0) / array.length
  );
}
