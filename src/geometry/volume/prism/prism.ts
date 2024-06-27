/**
 * Volume of a prism.
 *
 * @since 0.7.0
 * @param {number} A The area of the base.
 * @param {number} h The height.
 * @returns {number} Returns the volume.
 *
 * @example
 * volume.prism(5, 2)
 * // => 10
 */
export default function prism(A: number, h: number): number {
  return A * h;
}
