/**
 * Calculates the Euclidean distance between two points in 3D space.
 *
 * Given two points (x1, y1, z1) and (x2, y2, z2), this function returns
 * the straight-line distance between them using the Pythagorean theorem.
 *
 * @param x1 - The x-coordinate of the first point.
 * @param y1 - The y-coordinate of the first point.
 * @param z1 - The z-coordinate of the first point.
 * @param x2 - The x-coordinate of the second point.
 * @param y2 - The y-coordinate of the second point.
 * @param z2 - The z-coordinate of the second point.
 * @returns The Euclidean distance as a number.
 *
 * @example
 * ```ts
 * distance3D(0, 0, 0, 1, 1, 1); // ≈ 1.732
 * distance3D(2, 3, 4, 5, 6, 7); // ≈ 5.196
 * ```
 */
export default function distance3D(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number
): number {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2);
}
