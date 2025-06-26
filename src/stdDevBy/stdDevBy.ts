/**
 * Calculates the sample standard deviation of a specified numeric property in an array of objects.
 * Uses the formula: stdDev = sqrt(variance) with sample variance = Σ((x - mean)²) / (n - 1)
 *
 * @template T - The type of objects in the array.
 * @param {T[]} items - The array of objects.
 * @param {keyof T} key - The key whose numeric values will be used.
 * @returns {number} The standard deviation, or NaN if fewer than 2 valid numbers exist.
 *
 * @example
 * const data = [{ a: 2 }, { a: 4 }, { a: 4 }, { a: 4 }, { a: 5 }, { a: 5 }, { a: 7 }, { a: 9 }];
 * stdDevBy(data, 'a'); // Returns 2
 */
export default function stdDevBy<T extends Record<string, any>>(
  items: T[],
  key: keyof T
): number {
  const numbers = items
    .map((item) => item[key])
    .filter((val) => typeof val === "number");

  const n = numbers.length;
  if (n < 2) return NaN;

  const mean = numbers.reduce((sum, x) => sum + x, 0) / n;
  const sumSqDiffs = numbers.reduce((sum, x) => sum + Math.pow(x - mean, 2), 0);
  const variance = sumSqDiffs / (n - 1);

  return Math.sqrt(variance);
}
