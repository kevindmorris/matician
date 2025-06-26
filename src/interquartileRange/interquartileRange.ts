/**
 * Calculates the interquartile range (IQR) of a dataset.
 * IQR = Q3 - Q1
 *
 * @param values - An array of numeric values.
 * @returns The interquartile range.
 * @throws If the input array is empty.
 */
export default function interquartileRange(values: number[]): number {
  if (values.length === 0) throw new Error("Input array cannot be empty");

  const sorted = [...values].sort((a, b) => a - b);

  const percentile = (arr: number[], p: number): number => {
    const rank = (p / 100) * (arr.length - 1);
    const lower = Math.floor(rank);
    const upper = Math.ceil(rank);
    const weight = rank - lower;

    if (lower === upper) return arr[lower];
    return arr[lower] * (1 - weight) + arr[upper] * weight;
  };

  const q1 = percentile(sorted, 25);
  const q3 = percentile(sorted, 75);

  return q3 - q1;
}
