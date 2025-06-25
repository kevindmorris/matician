/**
 * Returns the base-10 logarithm of a number.
 *
 * @param value - The number to compute the base-10 logarithm of.
 * @returns The base-10 logarithm of the given number.
 * @throws Will throw an error if the input is not positive.
 *
 * @example
 * ```ts
 * log10(10);    // returns 1
 * log10(100);   // returns 2
 * ```
 */
export default function log10(value: number): number {
  if (value <= 0)
    throw new Error("Logarithm is undefined for zero or negative values");
  return Math.log10(value);
}
