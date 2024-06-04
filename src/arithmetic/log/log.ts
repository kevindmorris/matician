/**
 * Compute the logarithm of a number to a specified base.
 *
 * @since 0.5.0
 * @param {number} n The number. (`n>0`)
 * @param {number} b The base. (`b>0` and `b≠1`)
 * @returns {number|undefined} Returns the logarithm of `n` to base `b`.
 *
 * @example
 * log(8, 2)
 * // => 3
 * log(8, 0)
 * // => undefined
 */
export default function log(n: number, b: number): number | undefined {
  if (n <= 0 || b <= 0 || b === 1) return undefined;

  if (n === 1) return 0;

  return Math.log(n) / Math.log(b);
}
