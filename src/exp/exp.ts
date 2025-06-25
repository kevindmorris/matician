/**
 * Returns e raised to the power of a given number.
 *
 * @param exponent - The exponent to raise e to.
 * @returns The value of e^exponent.
 *
 * @example
 * ```ts
 * exp(1);    // returns approximately 2.718
 * exp(0);    // returns 1
 * ```
 */
export default function exp(exponent: number): number {
  return Math.exp(exponent);
}
