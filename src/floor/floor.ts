/**
 * Rounds a number down to the nearest integer.
 *
 * @param value - The number to round down.
 * @returns The greatest integer less than or equal to the given number.
 *
 * @example
 * ```ts
 * floor(3.9);   // returns 3
 * floor(-2.1);  // returns -3
 * ```
 */
export default function floor(value: number): number {
  return Math.floor(value);
}
