/**
 * Calculates the discount function v(t) = (1 + i)^(-t),
 * representing the present value of $1 due in t periods at interest rate i.
 *
 * @param rate - The interest rate per period (as a decimal, e.g., 0.05 for 5%).
 * @param time - The number of periods (can be fractional).
 * @returns The discount factor v(t).
 */
export default function discountFunction(rate: number, time: number): number {
  return Math.pow(1 + rate, -time);
}
