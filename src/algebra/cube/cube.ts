/**
 * Compute the value of a base expression cubed.
 *
 * @since 0.5.0
 * @param {number} x The base value of the expression.
 * @returns {number} Returns the base expression cubed.
 *
 * @example
 * cube(3)
 * // => 27
 */
export default function cube(x: number): number {
  return x * x * x;
}
