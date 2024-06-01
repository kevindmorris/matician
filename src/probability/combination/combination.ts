import factorial from "../factorial";

/**
 * The number of ways to choose a sample of `r` elements from a set of `n` distinct objects where order does not matter.
 *
 * @since 1.0.0
 * @param {number} n The number of objects. (`n` is an integer and `n≥0`)
 * @param {number} r The size of the sample. (`r` is an integer and `0≤r≤n`)
 * @param {Object} [options] The options object.
 * @param {boolean} [options.replacement=false] Allow for replacement or not.
 * @returns {number} The number of combinations.
 *
 * @example
 * combination(5, 2)
 * // => 10
 *
 * combination(5, 2, { replacement: true })
 * // => 15
 */
export default function combination(
  n: number,
  r: number,
  options?: { replacement?: boolean }
): number {
  if (!Number.isInteger(n) || n < 0 || !Number.isInteger(r) || r < 0 || n < r)
    return NaN;

  if (options?.replacement) {
    return combination(n + r - 1, r);
  }

  return factorial(n) / (factorial(r) * factorial(n - r));
}
