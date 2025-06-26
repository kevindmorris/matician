/**
 * Calculates the median of a specified numeric property in an array of objects.
 *
 * @template T - The type of objects in the array.
 * @param {T[]} items - The array of objects.
 * @param {keyof T} key - The key whose numeric values will be used.
 * @returns {number} The median value, or NaN if no valid numbers are found.
 *
 * @example
 * const data = [{ a: 1 }, { a: 3 }, { a: 2 }];
 * medianBy(data, 'a'); // Returns 2
 */
export default function medianBy<T extends Record<string, any>>(
  items: T[],
  key: keyof T
): number {
  const numbers = items
    .map((item) => item[key])
    .filter((val) => typeof val === "number")
    .sort((a, b) => a - b);

  const len = numbers.length;
  if (len === 0) return NaN;

  const mid = Math.floor(len / 2);
  return len % 2 === 0 ? (numbers[mid - 1] + numbers[mid]) / 2 : numbers[mid];
}
