/**
 * Returns Q1, Q2 (median), and Q3 of a sorted array.
 */

export default function quartiles(values: number[]): {
  Q1: number;
  Q2: number;
  Q3: number;
} {
  if (values.length === 0)
    throw new Error("Cannot compute quartiles of empty array");

  const sorted = [...values].sort((a, b) => a - b);
  const median = (arr: number[]) => {
    const mid = Math.floor(arr.length / 2);
    return arr.length % 2 === 0 ? (arr[mid - 1] + arr[mid]) / 2 : arr[mid];
  };

  const Q2 = median(sorted);
  const lowerHalf = sorted.slice(0, Math.floor(sorted.length / 2));
  const upperHalf = sorted.slice(Math.ceil(sorted.length / 2));

  const Q1 = median(lowerHalf);
  const Q3 = median(upperHalf);

  return { Q1, Q2, Q3 };
}
