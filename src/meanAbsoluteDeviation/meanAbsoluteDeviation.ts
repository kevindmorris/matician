/**
 * Computes the average of absolute differences from the mean.
 */

export default function meanAbsoluteDeviation(values: number[]): number {
  if (values.length === 0) throw new Error("Cannot compute MAD of empty array");
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  return (
    values.reduce((acc, val) => acc + Math.abs(val - mean), 0) / values.length
  );
}
