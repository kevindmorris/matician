/**
 * Returns the mode(s) — the most frequently occurring number(s) — in an array.
 *
 * @param values - An array of numbers.
 * @returns An array of the mode(s). Multiple values are returned in case of a tie.
 * @throws Will throw an error if the input array is empty.
 *
 * @example
 * ```ts
 * mode([1, 2, 2, 3]);        // returns [2]
 * mode([1, 1, 2, 2, 3]);     // returns [1, 2]
 * mode([5, 5, 5]);           // returns [5]
 * ```
 */
export default function mode(values: number[]): number[] {
  if (values.length === 0) {
    throw new Error("Cannot compute mode of an empty array");
  }

  const frequencyMap = new Map<number, number>();

  for (const value of values) {
    frequencyMap.set(value, (frequencyMap.get(value) || 0) + 1);
  }

  const maxFrequency = Math.max(...frequencyMap.values());

  return [...frequencyMap.entries()]
    .filter(([, freq]) => freq === maxFrequency)
    .map(([value]) => value)
    .sort((a, b) => a - b);
}
