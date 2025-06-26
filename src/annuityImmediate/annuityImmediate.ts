/**
 * Calculates the present value of an ordinary annuity (annuity immediate).
 *
 * @param payment - The periodic payment amount.
 * @param rate - The interest rate per period (as a decimal, e.g. 0.05 for 5%).
 * @param periods - The total number of periods.
 * @returns The present value of the annuity.
 */
export default function annuityImmediate(payment: number, rate: number, periods: number): number {
  if (rate === 0) return payment * periods;
  return payment * (1 - Math.pow(1 + rate, -periods)) / rate;
}
