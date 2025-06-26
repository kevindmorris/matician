/**
 * Calculates the mode (most frequent numeric value) of a specified property in an array of objects.
 *
 * @template T - The type of objects in the array.
 * @param {T[]} items - The array of objects.
 * @param {keyof T} key - The key whose numeric values will be used.
 * @returns {number} The mode value, or NaN if no valid numbers are found.
 *
 * @example
 * const data = [{ a: 1 }, { a: 2 }, { a: 2 }, { a: 3 }];
 * modeBy(data, 'a'); // Returns 2
 */
export default function modeBy<T extends Record<string, any>>(
  items: T[],
  key: keyof T
): number {
  const frequency: Record<number, number> = {};

  for (const item of items) {
    const value = item[key];
    if (typeof value === "number") {
      frequency[value] = (frequency[value] || 0) + 1;
    }
  }

  let mode = NaN;
  let maxCount = 0;

  for (const [valStr, count] of Object.entries(frequency)) {
    const val = Number(valStr);
    if (count > maxCount) {
      maxCount = count;
      mode = val;
    }
  }

  return mode;
}
