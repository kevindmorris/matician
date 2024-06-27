/**
 * Area of a trapezoid.
 *
 * @since 0.7.0
 * @param {number} a
 * @param {number} b
 * @param {number} h
 * @returns {number} Returns the area.
 *
 * @example
 * area.trapezoid(3, 2, 2)
 * // => 5
 */
export default function trapezoid(a: number, b: number, h: number): number {
  return 0.5 * (a + b) * h;
}
