/**
 * Returns the cube root of a number.
 *
 * @param value - The number to find the cube root of.
 * @returns The cube root of the given number.
 *
 * @example
 * ```ts
 * cbrt(8);     // returns 2
 * cbrt(-27);   // returns -3
 * cbrt(0);     // returns 0
 * ```
 */
export default function cbrt(value: number): number {
  return Math.cbrt(value);
}
