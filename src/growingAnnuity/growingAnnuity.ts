/**
 * Calculates the present value of a growing annuity.
 * Payments grow at a constant rate and are made at the end of each period.
 *
 * @param payment - The first payment amount.
 * @param rate - The interest rate per period (as a decimal, e.g., 0.05 for 5%).
 * @param growth - The constant growth rate per period (as a decimal).
 * @param periods - The total number of periods.
 * @returns The present value of the growing annuity.
 */
export default function growingAnnuity(payment: number, rate: number, growth: number, periods: number): number {
  if (rate === growth) {
    return payment * periods / (1 + rate); // special case: zero real interest
  }
  return payment * (1 - Math.pow((1 + growth) / (1 + rate), periods)) / (rate - growth);
}
