/**
 * Returns a random number from a normal (Gaussian) distribution using the Box-Muller transform.
 * @param mean - The mean of the distribution.
 * @param stdDev - The standard deviation.
 */
export default function randomNormal(mean: number, stdDev: number): number {
  const u = Math.random();
  const v = Math.random();
  const z = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  return z * stdDev + mean;
}
