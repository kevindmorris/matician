/**
 * Returns the median value from a list of numbers.
 *
 * @param values - An array of numbers.
 * @returns The median number.
 * @throws Will throw an error if the array is empty.
 *
 * @example
 * ```ts
 * median([1, 3, 2]);       // returns 2
 * median([5, 2, 1, 3]);    // returns 2.5
 * ```
 */
export default function median(values: number[]): number {
  if (values.length === 0) {
    throw new Error("Cannot compute median of an empty array");
  }

  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }

  return sorted[mid];
}
