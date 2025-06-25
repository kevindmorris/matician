/**
 * Returns the sign of a number: -1, 0, or 1.
 *
 * @param value - The number whose sign is to be determined.
 * @returns -1 if the number is negative, 1 if positive, and 0 if zero.
 *
 * @example
 * ```ts
 * sign(42);    // returns 1
 * sign(-42);   // returns -1
 * sign(0);     // returns 0
 * ```
 */
export default function sign(value: number): number {
  const result = Math.sign(value);
  return Object.is(result, -0) ? 0 : result;
}
