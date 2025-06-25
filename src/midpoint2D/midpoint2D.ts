/**
 * Calculates the midpoint between two 2D points.
 *
 * Given coordinates (x1, y1) and (x2, y2), this function returns the
 * midpoint as a tuple: [(x1 + x2) / 2, (y1 + y2) / 2].
 *
 * @param x1 - The x-coordinate of the first point.
 * @param y1 - The y-coordinate of the first point.
 * @param x2 - The x-coordinate of the second point.
 * @param y2 - The y-coordinate of the second point.
 * @returns A tuple containing the midpoint [x, y].
 *
 * @example
 * ```ts
 * midpoint2D(0, 0, 2, 2); // [1, 1]
 * midpoint2D(1, 3, 5, 7); // [3, 5]
 * ```
 */
export default function midpoint2D(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): [number, number] {
  return [(x1 + x2) / 2, (y1 + y2) / 2];
}
