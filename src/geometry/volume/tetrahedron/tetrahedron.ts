/**
 * Volume of a tetrahedron.
 *
 * @since 0.7.0
 * @param {number} a The length of an edge.
 * @returns {number} Returns the volume.
 *
 * @example
 * volume.tetrahedron(2)
 * // => 0.94281
 */
export default function tetrahedron(a: number): number {
  return (a * a * a) / (6 * Math.SQRT2);
}
