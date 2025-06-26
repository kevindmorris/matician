/**
 * Calculates the sample excess kurtosis of a dataset.
 * Excess kurtosis is 0 for a normal distribution.
 *
 * @param values - An array of numbers.
 * @returns The excess kurtosis.
 * @throws If the array has fewer than 4 elements.
 */
export default function kurtosis(values: number[]): number {
  const n = values.length;
  if (n < 4) throw new Error("Kurtosis requires at least 4 data points");

  const mean = values.reduce((acc, x) => acc + x, 0) / n;
  const s2 = values.reduce((acc, x) => acc + Math.pow(x - mean, 2), 0) / (n - 1);
  const s = Math.sqrt(s2);

  const fourthMoment = values.reduce(
    (acc, x) => acc + Math.pow((x - mean) / s, 4),
    0
  );

  const numerator = n * (n + 1) * fourthMoment;
  const denominator = (n - 1) * (n - 2) * (n - 3);
  const correction = (3 * Math.pow(n - 1, 2)) / ((n - 2) * (n - 3));

  return numerator / denominator - correction;
}
