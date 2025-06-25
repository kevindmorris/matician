/**
 * Calculates the product of all numbers in an array.
 *
 * @param values - An array of numbers.
 * @returns The product of all elements in the array. Returns 1 for an empty array.
 *
 * @example
 * ```ts
 * product([2, 3, 4]); // returns 24
 * product([]);        // returns 1
 * product([5]);       // returns 5
 * ```
 */
export default function product(values: number[]): number {
  return values.reduce((acc, val) => acc * val, 1);
}
