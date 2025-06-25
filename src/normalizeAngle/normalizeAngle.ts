/**
 * Normalizes an angle in degrees to the range [0, 360).
 *
 * This ensures the angle wraps around properly, handling negative and large values.
 * For example, -90 becomes 270, and 450 becomes 90.
 *
 * @param degrees - The input angle in degrees.
 * @returns The normalized angle in the range [0, 360).
 *
 * @example
 * ```ts
 * normalizeAngle(370);   // 10
 * normalizeAngle(-90);   // 270
 * normalizeAngle(720);   // 0
 * normalizeAngle(0);     // 0
 * ```
 */
export default function normalizeAngle(degrees: number): number {
  return ((degrees % 360) + 360) % 360;
}
