/**
 * Area of an ellipse.
 *
 * @since 0.7.0
 * @param {number} a The major radius.
 * @param {number} b The minor radius.
 * @returns {number} Returns the area.
 *
 * @example
 * area.ellipse(1, 2)
 * // => 6.28319
 */
export default function ellipse(a: number, b: number): number {
  return Math.PI * a * b;
}
