/**
 * Multiplies a multiplicand by a multiplier.
 *
 * @param multiplicand - The number to be multiplied.
 * @param multiplier - The number to multiply by.
 * @returns The product of multiplicand and multiplier.
 *
 * @example
 * ```ts
 * multiply(2, 3); // returns 6
 * multiply(-4, 5); // returns -20
 * ```
 */
export default function multiply(
  multiplicand: number,
  multiplier: number
): number {
  return multiplicand * multiplier;
}
