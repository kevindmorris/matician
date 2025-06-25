/**
 * Measures data spread from the mean.
 */

export default function variance(values: number[]): number {
  if (values.length === 0)
    throw new Error("Cannot compute variance of empty array");
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  return (
    values.reduce((acc, val) => acc + (val - mean) ** 2, 0) / values.length
  );
}
