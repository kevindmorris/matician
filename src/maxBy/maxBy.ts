/**
 * Finds the maximum numeric value of a specified property in an array of objects.
 *
 * @template T - The type of objects in the array.
 * @param {T[]} items - The array of objects.
 * @param {keyof T} key - The key whose numeric values will be compared.
 * @returns {number} The maximum value, or -Infinity if no valid number is found.
 *
 * @example
 * const data = [{ a: 5 }, { a: 2 }, { a: 9 }];
 * maxBy(data, 'a'); // Returns 9
 */
export default function maxBy<T extends Record<string, any>>(
  items: T[],
  key: keyof T
): number {
  let max = -Infinity;

  for (const item of items) {
    const value = item[key];
    if (typeof value === "number" && value > max) {
      max = value;
    }
  }

  return max;
}
