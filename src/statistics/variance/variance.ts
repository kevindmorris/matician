import mean from "../mean";

/**
 * Compute the sample variance of numbers in an array.
 *
 * @since 0.1.0
 * @param {Array} array An array of numbers.
 * @returns {number} Returns the variance.
 */
export default function variance(array: number[]): number {
  if (array === null || array.length === 0) return 0;

  const m = mean(array);

  return (
    array.reduce((prev, curr) => {
      return prev + Math.pow(curr - m, 2);
    }, 0) /
    (array.length - 1)
  );
}
