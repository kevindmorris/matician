/**
 * Returns the absolute value of a number.
 *
 * @param value - A number to compute the absolute value of.
 * @returns The non-negative value of the input.
 *
 * @example
 * ```ts
 * absolute(-5); // returns 5
 * absolute(3);  // returns 3
 * ```
 */
export default function absolute(value: number): number {
  return Math.abs(value);
}
