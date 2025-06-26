/**
 * Finds the minimum numeric value of a specified property in an array of objects.
 *
 * @template T - The type of objects in the array.
 * @param {T[]} items - The array of objects.
 * @param {keyof T} key - The key whose numeric values will be compared.
 * @returns {number} The minimum value, or Infinity if no valid number is found.
 *
 * @example
 * const data = [{ a: 5 }, { a: 2 }, { a: 9 }];
 * minBy(data, 'a'); // Returns 2
 */
export default function minBy<T extends Record<string, any>>(
  items: T[],
  key: keyof T
): number {
  let min = Infinity;

  for (const item of items) {
    const value = item[key];
    if (typeof value === "number" && value < min) {
      min = value;
    }
  }

  return min;
}
