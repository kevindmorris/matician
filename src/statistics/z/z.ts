/**
 * Find the z score of a data point in a normal distribution.
 *
 * @param {number} x A value.
 * @param {number} mean The mean of the distribution
 * @param {number} stdev The standard deviation of the distribution.
 * @returns {number} Returns the z score.
 */
export default function z(x: number, mean: number, stdev: number): number {
  return (x - mean) / stdev;
}
