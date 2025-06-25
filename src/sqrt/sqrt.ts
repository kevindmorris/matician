/**
 * Returns the square root of a non-negative number.
 *
 * @param value - The number to find the square root of.
 * @returns The square root of the given number.
 * @throws Will throw an error if the input is negative.
 *
 * @example
 * ```ts
 * sqrt(9);     // returns 3
 * sqrt(0);     // returns 0
 * ```
 */
export default function sqrt(value: number): number {
  if (value < 0)
    throw new Error("Square root of negative number is not defined");
  return Math.sqrt(value);
}
