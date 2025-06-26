/**
 * Calculates the present value of a growing perpetuity.
 * Assumes payments grow at a constant rate and continue indefinitely.
 *
 * @param payment - The initial periodic payment amount.
 * @param rate - The interest rate per period (as a decimal, e.g., 0.05 for 5%).
 * @param growth - The growth rate per period (as a decimal).
 * @returns The present value of the growing perpetuity.
 */
export default function growingPerpetuity(payment: number, rate: number, growth: number): number {
  if (rate <= growth) throw new Error('Rate must be greater than growth rate');
  return payment / (rate - growth);
}
