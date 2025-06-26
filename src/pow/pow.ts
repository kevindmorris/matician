/**
 * Raises a base number to the power of a given exponent.
 *
 * @param base - The base number.
 * @param exponent - The exponent to raise the base to.
 * @returns The result of `base` raised to the power of `exponent`.
 *
 * @example
 * ```ts
 * pow(2, 3); // returns 8
 * pow(5, 0); // returns 1
 * pow(4, 0.5); // returns 2
 * ```
 */
export default function pow(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}
