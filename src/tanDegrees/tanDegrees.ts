/**
 * Returns the tangent of an angle given in degrees.
 *
 * This function converts the angle from degrees to radians
 * and then returns the tangent using `Math.tan()`.
 *
 * Note: Tangent is undefined for angles like 90°, 270°, etc.
 * This function will return large values near these discontinuities
 * due to floating-point behavior.
 *
 * @param degrees - The angle in degrees.
 * @returns The tangent of the angle.
 *
 * @example
 * ```ts
 * tanDegrees(0);      // 0
 * tanDegrees(45);     // ≈ 1
 * tanDegrees(90);     // Very large number (near infinity)
 * ```
 */
export default function tanDegrees(degrees: number): number {
  return Math.tan((degrees * Math.PI) / 180);
}
