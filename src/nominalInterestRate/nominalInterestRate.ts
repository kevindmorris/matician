/**
 * Calculates the Nominal Annual Interest Rate from the Effective Annual Rate (EAR)
 * and number of compounding periods per year.
 *
 * @param effectiveRate - The effective annual interest rate (e.g., 0.1268 for 12.68%).
 * @param compoundingPeriods - The number of compounding periods per year (e.g., 12 for monthly).
 * @returns The nominal annual interest rate as a decimal.
 */
export default function nominalInterestRate(effectiveRate: number, compoundingPeriods: number): number {
  if (compoundingPeriods <= 0) throw new Error("Compounding periods must be positive");
  return compoundingPeriods * (Math.pow(1 + effectiveRate, 1 / compoundingPeriods) - 1);
}
