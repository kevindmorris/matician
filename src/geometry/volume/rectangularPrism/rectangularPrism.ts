/**
 * Volume of a rectagular prism.
 *
 * @since 0.7.0
 * @param {number} l The length.
 * @param {number} w The width.
 * @param {number} h The height.
 * @returns {number} Returns the volume.
 *
 * @example
 * volume.rectangularPrism(2, 3, 4)
 * // => 24
 */
export default function rectangularPrism(
  l: number,
  w: number,
  h: number
): number {
  return l * w * h;
}
