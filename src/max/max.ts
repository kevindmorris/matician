/**
 * Returns the largest number in an array.
 *
 * @param values - An array of numbers.
 * @returns The maximum value.
 * @throws Will throw an error if the array is empty.
 *
 * @example
 * ```ts
 * max([1, 2, 3]);     // returns 3
 * max([-10, 0, 10]);  // returns 10
 * ```
 */
export default function max(values: number[]): number {
  if (values.length === 0) {
    throw new Error("Cannot compute max of an empty array");
  }

  return Math.max(...values);
}
