/**
 * Area of a triangle.
 *
 * @since 0.7.0
 * @param {number} b
 * @param {number} h
 * @returns {number} Returns the area.
 *
 * @example
 * area.triangle(1, 2)
 * // => 1
 */
export default function triangle(b: number, h: number): number {
  return 0.5 * b * h;
}
