/**
 * Converts an angle from degrees to radians.
 *
 * @param degrees - The angle in degrees.
 * @returns The angle in radians.
 *
 * @example
 * ```ts
 * degreesToRadians(180);   // returns Math.PI
 * degreesToRadians(90);    // returns Math.PI / 2
 * degreesToRadians(0);     // returns 0
 * ```
 */
export default function degreesToRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}
