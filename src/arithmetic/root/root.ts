/**
 * Compute the specified root of a number.
 *
 * @since 1.0.0
 * @param {number} x A number.
 * @param {number} y The specifed root.
 * @returns {number} Returns the `y`th root of a number.
 *
 * @example
 * root(8,3)
 * // => 2
 */
export default function root(x: number, y: number): number {
  return Math.pow(x, 1 / y);
}
