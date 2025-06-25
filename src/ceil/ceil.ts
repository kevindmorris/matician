/**
 * Rounds a number up to the nearest integer.
 *
 * @param value - The number to round up.
 * @returns The smallest integer greater than or equal to the given number.
 *
 * @example
 * ```ts
 * ceil(3.1);   // returns 4
 * ceil(-2.8);  // returns -2
 * ```
 */
export default function ceil(value: number): number {
  const result = Math.ceil(value);
  return Object.is(result, -0) ? 0 : result;
}
