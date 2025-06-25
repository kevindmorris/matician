import summation from "../summation";

/**
 * Calculates the average (arithmetic mean) of an array of numbers.
 *
 * @param values - An array of numbers.
 * @returns The average value.
 * @throws Will throw an error if the input array is empty.
 *
 * @example
 * ```ts
 * average([1, 2, 3]); // returns 2
 * average([10, 20]); // returns 15
 * ```
 */
export default function average(values: number[]): number {
  if (values.length === 0)
    throw new Error("Cannot compute average of empty array");
  return summation(values) / values.length;
}
