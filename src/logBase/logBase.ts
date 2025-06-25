/**
 * Returns the logarithm of a number at a specified base.
 *
 * @param value - The number to compute the logarithm of.
 * @param base - The base of the logarithm.
 * @returns The logarithm of the number to the specified base.
 * @throws Will throw an error if the value or base is not positive or if base is 1.
 *
 * @example
 * ```ts
 * logBase(8, 2);    // returns 3
 * logBase(100, 10); // returns 2
 * logBase(Math.E, Math.E); // returns 1
 * ```
 */
export default function logBase(value: number, base: number): number {
  if (value <= 0)
    throw new Error("Logarithm is undefined for zero or negative values");
  if (base <= 0 || base === 1)
    throw new Error("Base must be greater than 0 and not equal to 1");
  return Math.log(value) / Math.log(base);
}
