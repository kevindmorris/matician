/**
 * Calculates the accumulation function a(t) = (1 + i)^t,
 * representing the future value of $1 after t periods at interest rate i.
 *
 * @param rate - The interest rate per period (as a decimal, e.g., 0.05 for 5%).
 * @param time - The number of periods (can be fractional).
 * @returns The accumulation factor a(t).
 */
export default function accumulationFunction(rate: number, time: number): number {
  return Math.pow(1 + rate, time);
}
