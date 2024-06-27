/**
 * Volume of a cylinder.
 *
 * @since 0.7.0
 * @param {number} r The radius.
 * @param {number} h The height.
 * @returns {number} Returns the volume.
 *
 * @example
 * volume.cylinder(1, 2)
 * // => 6.28319
 */
export default function cylinder(r: number, h: number): number {
  return Math.PI * r * r * h;
}
