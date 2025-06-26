/**
 * Calculates the present value of an annuity due.
 * Payments are made at the beginning of each period.
 *
 * @param payment - The periodic payment amount.
 * @param rate - The interest rate per period (as a decimal, e.g., 0.05 for 5%).
 * @param periods - The total number of periods.
 * @returns The present value of the annuity due.
 */
export default function annuityDue(payment: number, rate: number, periods: number): number {
  if (rate === 0) return payment * periods;
  return payment * (1 - Math.pow(1 + rate, -periods)) / rate * (1 + rate);
}
