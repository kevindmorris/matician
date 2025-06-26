/**
 * Calculates the future value of a present amount using compound interest.
 *
 * @param presentValue - The current amount.
 * @param rate - The interest rate per period (as a decimal, e.g., 0.05 for 5%).
 * @param periods - The number of compounding periods.
 * @returns The future value.
 */
export default function futureValue(presentValue: number, rate: number, periods: number): number {
  return presentValue * Math.pow(1 + rate, periods);
}
