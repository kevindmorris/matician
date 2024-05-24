import factorial from "../factorial";

/**
 * The number of ways to choose a sample of `r` elements from a set of `n` distinct objects where order does matter.
 * @since 1.0.0
 * @param {number} n The number of objects.
 * @param {number} r The size of the sample.
 * @param {Object} options The options object.
 * @param {boolean} options.replacement Allow for replacement or not.
 * @returns {number} The number of permutations.
 */
export default function permutation(
  n: number,
  r: number,
  options: { replacement?: boolean } = { replacement: false }
): number {
  if (!Number.isInteger(n) || n < 0 || !Number.isInteger(r) || r < 0 || n < r)
    return NaN;

  if (options.replacement) {
    return Math.pow(n, r);
  }

  return factorial(n) / factorial(n - r);
}
