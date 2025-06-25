/**
 * Calculates the Euclidean distance between two points in 2D space.
 *
 * Given two points (x1, y1) and (x2, y2), this function returns
 * the straight-line distance between them using the Pythagorean theorem.
 *
 * @param x1 - The x-coordinate of the first point.
 * @param y1 - The y-coordinate of the first point.
 * @param x2 - The x-coordinate of the second point.
 * @param y2 - The y-coordinate of the second point.
 * @returns The Euclidean distance as a number.
 *
 * @example
 * ```ts
 * distance2D(0, 0, 3, 4); // 5
 * distance2D(1, 1, 4, 5); // ≈ 5
 * ```
 */
export default function distance2D(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}
