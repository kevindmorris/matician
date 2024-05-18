import factorial from "../factorial";

/**
 * The number of ways to choose a sample of r elements from a set of n distinct objects where order does not matter.
 * @param {number} n The number of objects.
 * @param {number} r The size of the sample.
 * @param {Object} options The options object.
 * @param {boolean} options.replacement Allow for replacement or not.
 * @returns {number} The number of permutations.
 */
export default function combination(
  n: number,
  r: number,
  options: { replacement?: boolean } = { replacement: false }
): number {
  if (n < 0 || r < 0 || n < r) return NaN;
  
  if (options.replacement) {
    return combination(n + r - 1, r);
  }

  return factorial(n) / (factorial(r) * factorial(n - r));
}
