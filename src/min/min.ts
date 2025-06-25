/**
 * Returns the smallest number in an array.
 *
 * @param values - An array of numbers.
 * @returns The minimum value.
 * @throws Will throw an error if the array is empty.
 *
 * @example
 * ```ts
 * min([1, 2, 3]);     // returns 1
 * min([-5, 0, 5]);    // returns -5
 * ```
 */
export default function min(values: number[]): number {
  if (values.length === 0) {
    throw new Error("Cannot compute min of an empty array");
  }

  return Math.min(...values);
}
