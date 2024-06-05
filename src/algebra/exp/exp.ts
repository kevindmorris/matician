/**
 * Compute the value of a `e` raised to a specified power.
 *
 * @since 0.1.0
 * @param {number} x A numeric expression representing the power of `e`.
 * @returns {number} Returns `e` (the base of natural logarithms) raised to a power.
 *
 * @example
 * exp(2)
 * // => 7.38905609893
 */
export default function exp(x: number): number {
  return Math.exp(x);
}
