/**
 * Returns the sine of an angle given in degrees.
 *
 * This function converts the angle from degrees to radians
 * and then returns its sine using `Math.sin()`.
 *
 * @param degrees - The angle in degrees.
 * @returns The sine of the angle (a number between -1 and 1).
 *
 * @example
 * ```ts
 * sinDegrees(0);    // 0
 * sinDegrees(90);   // 1
 * sinDegrees(180);  // 0
 * sinDegrees(270);  // -1
 * ```
 */
export default function sinDegrees(degrees: number): number {
  return Math.sin((degrees * Math.PI) / 180);
}
