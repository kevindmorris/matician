/**
 * Returns the value at the given percentile in a dataset using linear interpolation.
 *
 * @param values - An array of numeric values.
 * @param p - Percentile (0 to 100).
 * @returns The value at the specified percentile.
 *
 * @throws If the array is empty.
 * @throws If the percentile is out of range.
 *
 * @example
 * ```ts
 * percentile([1, 2, 3, 4, 5], 50); // returns 3 (median)
 * percentile([10, 20, 30], 25);   // returns 15
 * ```
 */
export default function percentile(values: number[], p: number): number {
  if (values.length === 0) {
    throw new Error("Cannot compute percentile of an empty array.");
  }

  if (p < 0 || p > 100) {
    throw new Error("Percentile must be between 0 and 100.");
  }

  const sorted = [...values].sort((a, b) => a - b);
  const rank = (p / 100) * (sorted.length - 1);
  const lowerIndex = Math.floor(rank);
  const upperIndex = Math.ceil(rank);
  const weight = rank - lowerIndex;

  const lowerValue = sorted[lowerIndex];
  const upperValue = sorted[upperIndex];

  return lowerValue + weight * (upperValue - lowerValue);
}
