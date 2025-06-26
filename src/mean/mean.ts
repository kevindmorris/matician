import sum from "../sum";

/**
 * Calculates the mean (arithmetic mean) of an array of numbers.
 *
 * @param values - An array of numbers.
 * @returns The mean value, or 0 if the array is empty.
 *
 * @example
 * ```ts
 * mean([1, 2, 3]); // returns 2
 * mean([10, 20]); // returns 15
 * mean([]); // returns 0
 * ```
 */
export default function mean(values: number[]): number {
  if (values.length === 0) return 0;
  return sum(values) / values.length;
}
