/**
 * Calculates the present value of a level perpetuity.
 * Assumes payments go on forever and are made at regular intervals.
 *
 * @param payment - The fixed periodic payment amount.
 * @param rate - The interest rate per period (as a decimal, e.g., 0.05 for 5%).
 * @returns The present value of the perpetuity.
 */
export default function perpetuity(payment: number, rate: number): number {
  if (rate === 0) throw new Error('Interest rate must be greater than zero');
  return payment / rate;
}
