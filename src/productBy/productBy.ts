/**
 * Calculates the product of all numeric values of a specified property in an array of objects.
 *
 * @template T - The type of objects in the array.
 * @param {T[]} items - The array of objects.
 * @param {keyof T} key - The key whose numeric values will be multiplied.
 * @returns {number} The product of values, or 1 if no valid numbers are found.
 *
 * @example
 * const data = [{ a: 2 }, { a: 3 }, { a: 4 }];
 * productBy(data, 'a'); // Returns 24
 */
export default function productBy<T extends Record<string, any>>(
  items: T[],
  key: keyof T
): number {
  let product = 1;
  let hasValid = false;

  for (const item of items) {
    const value = item[key];
    if (typeof value === "number") {
      product *= value;
      hasValid = true;
    }
  }

  return hasValid ? product : 1;
}
