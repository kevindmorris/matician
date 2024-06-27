/**
 * Volume of a square pyramid.
 *
 * @since 0.7.0
 * @param {number} a The length of a base edge.
 * @param {number} h The height.
 * @returns {number} Returns the volume.
 *
 * @example
 * volume.squarePyramid(2)
 * // => 2.666667
 */
export default function squarePyramid(a: number, h: number): number {
  return (a * a * h) / 3;
}
