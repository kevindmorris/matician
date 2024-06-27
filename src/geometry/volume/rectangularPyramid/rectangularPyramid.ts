/**
 * Volume of a rectangular pyramid.
 *
 * @since 0.7.0
 * @param {number} l The length.
 * @param {number} w The width.
 * @param {number} h The height.
 * @returns {number} Returns the volume.
 *
 * @example
 * volume.rectangularPyramid(2, 3, 4)
 * // => 8
 */
export default function rectangularPyramid(
  l: number,
  w: number,
  h: number
): number {
  return (l * w * h) / 3;
}
