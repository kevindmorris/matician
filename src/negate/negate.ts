/**
 * Returns the negation of a number.
 *
 * @param value - The number to negate.
 * @returns The negated value of the input.
 *
 * @example
 * ```ts
 * negate(5);   // returns -5
 * negate(-3);  // returns 3
 * negate(0);   // returns -0
 * ```
 */
export default function negate(value: number): number {
  return -value;
}
