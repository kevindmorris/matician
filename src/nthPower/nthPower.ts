/**
 * Raises a base to a specified exponent.
 *
 * @param base - The base number.
 * @param exponent - The exponent to raise the base to.
 * @returns The result of base raised to the power of exponent.
 *
 * @example
 * ```ts
 * nthPower(2, 3);   // returns 8
 * nthPower(5, 0);   // returns 1
 * nthPower(4, -1);  // returns 0.25
 * ```
 */
export default function nthPower(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}
