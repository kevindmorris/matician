import sum from "../sum";

/**
 * Calculates the mean (arithmetic mean) of an array of numbers.
 *
 * @param values - An array of numbers.
 * @returns The mean value.
 * @throws Will throw an error if the input array is empty.
 *
 * @example
 * ```ts
 * mean([1, 2, 3]); // returns 2
 * mean([10, 20]); // returns 15
 * ```
 */
export default function mean(values: number[]): number {
  if (values.length === 0)
    throw new Error("Cannot compute mean of empty array");
  return sum(values) / values.length;
}
