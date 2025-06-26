/**
 * Calculates the z-score of a value in a dataset.
 *
 * @param x - The value to standardize.
 * @param values - The dataset to calculate mean and standard deviation from.
 * @returns The z-score.
 * @throws If dataset has fewer than 2 values or zero standard deviation.
 */
export default function z(x: number, values: number[]): number {
  const n = values.length;
  if (n < 2)
    throw new Error("At least two values are required to compute z-score");

  const mean = values.reduce((sum, v) => sum + v, 0) / n;
  const variance =
    values.reduce((sum, v) => sum + (v - mean) ** 2, 0) / (n - 1);
  const stdDev = Math.sqrt(variance);

  if (stdDev === 0)
    throw new Error("Standard deviation is zero, cannot compute z-score");

  return (x - mean) / stdDev;
}
