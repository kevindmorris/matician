/**
 * Calculates the present value of a future amount using compound interest.
 *
 * @param futureValue - The future value to discount.
 * @param rate - The interest rate (as a decimal, e.g., 0.05 for 5%).
 * @param periods - The number of periods until the payment.
 * @returns The present value.
 */
export default function presentValue(futureValue: number, rate: number, periods: number): number {
  return futureValue / Math.pow(1 + rate, periods);
}
