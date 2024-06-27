/**
 * Volume of a sphere.
 *
 * @since 0.7.0
 * @param {number} r The radius.
 * @returns {number} Returns the volume.
 *
 * @example
 * volume.sphere(1)
 * // => 4.18879
 */
export default function sphere(r: number): number {
  return (4 * Math.PI * r * r * r) / 3;
}
