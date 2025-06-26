/**
 * Sums the values of a specified numeric property in an array of objects.
 *
 * @template T - The type of objects in the array.
 * @param {T[]} items - The array of objects.
 * @param {keyof T} key - The key whose numeric values will be summed.
 * @returns {number} The total sum of the values for the specified key.
 *
 * @example
 * const data = [{ a: 2 }, { a: 3 }, { a: 5 }];
 * sumBy(data, 'a'); // Returns 10
 */
export default function sumBy<T extends Record<string, any>>(
  items: T[],
  key: keyof T
): number {
  return items.reduce((sum, item) => {
    const value = item[key];
    return sum + (typeof value === "number" ? value : 0);
  }, 0);
}
