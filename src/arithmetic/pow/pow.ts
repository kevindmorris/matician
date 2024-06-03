/**
 * Compute the value of a base expression raised to a specified power.
 *
 * @since 0.1.0
 * @param {number} x The base value of the expression.
 * @param {number} y The exponent value of the expression.
 * @returns {number} Returns the base expression raised to a power.
 *
 * @example
 * pow(2,3)
 * // => 8
 */
export default function pow(x: number, y: number): number {
  return Math.pow(x, y);
}
