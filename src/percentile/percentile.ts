/**
 * Returns the value at the given percentile in a dataset.
 */

export default function percentile(values: number[], p: number): number {
  if (values.length === 0)
    throw new Error("Cannot compute percentile of empty array");
  if (p < 0 || p > 100) throw new Error("Percentile must be between 0 and 100");

  const sorted = [...values].sort((a, b) => a - b);
  const index = (p / 100) * (sorted.length - 1);
  const lower = Math.floor(index);
  const upper = Math.ceil(index);

  if (lower === upper) return sorted[lower];

  return sorted[lower] + (index - lower) * (sorted[upper] - sorted[lower]);
}
