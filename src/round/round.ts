/**
 * Rounds a number to the nearest integer.
 *
 * @param value - The number to round.
 * @returns The nearest integer to the given number.
 *
 * @example
 * ```ts
 * round(3.5);   // returns 4
 * round(2.49);  // returns 2
 * round(-2.5);  // returns -2
 * ```
 */
export default function round(value: number): number {
  return Math.round(value);
}
