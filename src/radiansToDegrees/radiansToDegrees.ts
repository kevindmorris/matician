/**
 * Converts an angle from radians to degrees.
 *
 * @param radians - The angle in radians.
 * @returns The angle in degrees.
 *
 * @example
 * ```ts
 * radiansToDegrees(Math.PI);      // returns 180
 * radiansToDegrees(Math.PI / 2);  // returns 90
 * radiansToDegrees(0);            // returns 0
 * ```
 */
export default function radiansToDegrees(radians: number): number {
  return (radians * 180) / Math.PI;
}
