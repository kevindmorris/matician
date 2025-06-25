/**
 * Returns the natural logarithm (base e) of a number.
 *
 * @param value - The number to compute the natural logarithm of.
 * @returns The natural logarithm of the given number.
 * @throws Will throw an error if the input is not positive.
 *
 * @example
 * ```ts
 * log(Math.E);     // returns 1
 * log(1);          // returns 0
 * ```
 */
export default function log(value: number): number {
  if (value <= 0)
    throw new Error("Logarithm is undefined for zero or negative values");
  return Math.log(value);
}
