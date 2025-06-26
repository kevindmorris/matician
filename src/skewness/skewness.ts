/**
 * Calculates the sample skewness of a dataset.
 *
 * @param values - Array of numeric values.
 * @returns The skewness value (positive = right-skewed, negative = left-skewed).
 * @throws If array has fewer than 3 elements.
 */
export default function skewness(values: number[]): number {
  const n = values.length;
  if (n < 3) throw new Error("Skewness requires at least 3 data points");

  const mean = values.reduce((acc, v) => acc + v, 0) / n;
  const s = Math.sqrt(
    values.reduce((acc, v) => acc + Math.pow(v - mean, 2), 0) / (n - 1)
  );

  const thirdMoment = values.reduce((acc, v) => acc + Math.pow((v - mean) / s, 3), 0);

  return (n / ((n - 1) * (n - 2))) * thirdMoment;
}
