/**
 * Find the discriminant of a quadratic function. If `b^2 – 4ac > 0` then the quadratic function has two distinct real roots. If `b^2 – 4ac > 0` then the quadratic function has one repeated real root.
 *
 * @since 0.5.1
 * @param {number} a The quadratic coefficient.
 * @param {number} b The linear coefficient.
 * @param {number} c The constant coefficient.
 * @returns {number} Returns the discriminant.
 *
 * @example
 * discriminant(1, 2, -1)
 * // => 8
 * discriminant(1, -2, 1)
 * // => 0
 */
export default function discriminant(a: number, b: number, c: number): number {
  return b * b - 4 * a * c;
}
