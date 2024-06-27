/**
 * Area of a circle.
 *
 * @since 0.7.0
 * @param {number} r The radius.
 * @returns {number} Returns the area.
 *
 * @example
 * area.circle(1)
 * // => 3.14159
 */
export default function circle(r: number): number {
  return Math.PI * r * r;
}
