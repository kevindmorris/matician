/**
 * Volume of a pyramid.
 *
 * @since 0.7.0
 * @param {number} A The area of the base.
 * @param {number} h The height.
 * @returns {number} Returns the volume.
 *
 * @example
 * volume.pyramid(2, 3, 4)
 * // => 24
 */
export default function pyramid(A: number, h: number): number {
  return (A * h) / 3;
}
