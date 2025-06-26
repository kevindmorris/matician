/**
 * Calculates the sum of all numbers in an array.
 *
 * @param values - An array of numbers to sum.
 * @returns The total sum of the values. Returns 0 for an empty array.
 *
 * @example
 * ```ts
 * sum([1, 2, 3]);    // returns 6
 * sum([-1, 0, 1]);   // returns 0
 * sum([]);           // returns 0
 * ```
 */
export default function sum(values: number[]): number {
  return values.reduce((acc, val) => acc + val, 0);
}
