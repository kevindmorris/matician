/**
 * Compute the natural logarithm of a number.
 *
 * @since 0.5.0
 * @param {number} n The number. (`n>0`)
 * @returns {number|undefined} Returns the logarithm of `n` to base `e`.
 *
 * @example
 * ln(2)
 * // => 0.6931471805599453
 * log(-1)
 * // => undefined
 */
export default function log(n: number): number | undefined {
  if (n <= 0) return undefined;

  if (n === 1) return 0;

  return Math.log(n) / Math.log(Math.E);
}
