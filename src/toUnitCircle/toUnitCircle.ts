/**
 * Converts an angle in degrees to coordinates on the unit circle.
 *
 * This function returns a tuple `[x, y]`, where:
 * - `x = cos(θ)`
 * - `y = sin(θ)`
 *
 * The result represents a point on the unit circle corresponding to
 * the given angle (in degrees), useful in trigonometry, graphics, and rotation logic.
 *
 * @param degrees - The angle in degrees.
 * @returns A tuple of [x, y] coordinates on the unit circle.
 *
 * @example
 * ```ts
 * toUnitCircle(0);    // [1, 0]
 * toUnitCircle(90);   // [0, 1]
 * toUnitCircle(180);  // [-1, 0]
 * toUnitCircle(270);  // [0, -1]
 * ```
 */
export default function toUnitCircle(degrees: number): [number, number] {
  const radians = (degrees * Math.PI) / 180;
  return [Math.cos(radians), Math.sin(radians)];
}
