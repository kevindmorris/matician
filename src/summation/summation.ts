/**
 * Calculates the sum of all numbers in an array.
 *
 * @param values - An array of numbers to sum.
 * @returns The total sum of the values. Returns 0 for an empty array.
 *
 * @example
 * ```ts
 * summation([1, 2, 3]);    // returns 6
 * summation([-1, 0, 1]);   // returns 0
 * summation([]);           // returns 0
 * ```
 */
export default function summation(values: number[]): number {
  return values.reduce((acc, val) => acc + val, 0);
}
