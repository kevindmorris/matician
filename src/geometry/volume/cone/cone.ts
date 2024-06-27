/**
 * Volume of a cone.
 *
 * @since 0.7.0
 * @param {number} r The radius.
 * @param {number} h The height.
 * @returns {number} Returns the volume.
 *
 * @example
 * volume.cone(1, 2)
 * // => 2.0944
 */
export default function cone(r: number, h: number): number {
  return (Math.PI * r * r * h) / 3;
}
