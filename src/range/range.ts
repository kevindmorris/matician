/**
 * Returns the range of a list of numbers (max - min).
 *
 * @param values - An array of numbers.
 * @returns The range (max - min).
 * @throws Will throw an error if the array is empty.
 *
 * @example
 * ```ts
 * range([1, 2, 3]);     // returns 2
 * range([10, 5, 7]);    // returns 5
 * ```
 */
export default function range(values: number[]): number {
  if (values.length === 0) {
    throw new Error("Cannot compute range of an empty array");
  }

  const min = Math.min(...values);
  const max = Math.max(...values);

  return max - min;
}
