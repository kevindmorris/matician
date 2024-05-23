import variance from "../variance";

/**
 * Compute the standard deviation of numbers in an array.
 * @since 1.0.0
 * @param {Array} array An array of numbers.
 * @returns {number} Returns the standard deviation.
 */
export default function stdev(array: number[]): number {
  if (array === null || array.length === 0) return 0;

  return Math.sqrt(variance(array));
}
