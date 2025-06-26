/**
 * Calculates the mean (average) of a specified numeric property in an array of objects.
 *
 * @template T - The type of objects in the array.
 * @param {T[]} items - The array of objects.
 * @param {keyof T} key - The key whose numeric values will be averaged.
 * @returns {number} The mean value for the specified key, or 0 if no valid numbers are found.
 *
 * @example
 * const data = [{ a: 2 }, { a: 4 }, { a: 6 }];
 * meanBy(data, 'a'); // Returns 4
 */
export default function meanBy<T extends Record<string, any>>(
  items: T[],
  key: keyof T
): number {
  let sum = 0;
  let count = 0;

  for (const item of items) {
    const value = item[key];
    if (typeof value === "number") {
      sum += value;
      count++;
    }
  }

  return count === 0 ? 0 : sum / count;
}
