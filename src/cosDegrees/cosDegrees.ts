/**
 * Returns the cosine of an angle given in degrees.
 *
 * This function converts the input angle from degrees to radians,
 * then returns its cosine using `Math.cos()`.
 *
 * JavaScript's native `Math.cos()` expects the input in radians,
 * so this helper simplifies working in degrees (commonly used in UI,
 * geometry, and user-facing angles).
 *
 * @param degrees - The angle in degrees.
 * @returns The cosine of the angle (a number between -1 and 1).
 *
 * @example
 * ```ts
 * cosDegrees(0);       // 1
 * cosDegrees(60);      // 0.5
 * cosDegrees(90);      // 0
 * cosDegrees(180);     // -1
 * cosDegrees(360);     // 1
 * ```
 */
export default function cosDegrees(degrees: number): number {
  return Math.cos((degrees * Math.PI) / 180);
}
