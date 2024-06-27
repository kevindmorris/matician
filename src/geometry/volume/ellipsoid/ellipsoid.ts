/**
 * Volume of an ellipsoid.
 *
 * @since 0.7.0
 * @param {number} a An axis.
 * @param {number} b An axis.
 * @param {number} c An axis.
 * @returns {number} Returns the volume.
 *
 * @example
 * volume.ellipsoid(1, 2, 3)
 * // => 25.13274
 */
export default function ellipsoid(a: number, b: number, c: number): number {
  return (4 * Math.PI * a * b * c) / 3;
}
