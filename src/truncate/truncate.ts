/**
 * Truncates the decimal part of a number (towards zero).
 *
 * @param value - The number to truncate.
 * @returns The integer part of the number, discarding any fractional digits.
 *
 * @example
 * ```ts
 * truncate(3.9);   // returns 3
 * truncate(-2.8);  // returns -2
 * ```
 */
export default function truncate(value: number): number {
  const result = value < 0 ? Math.ceil(value) : Math.floor(value);
  return Object.is(result, -0) ? 0 : result;
}
