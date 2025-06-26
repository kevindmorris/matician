/**
 * Calculates the Effective Annual Rate (EAR) from a nominal interest rate.
 *
 * @param nominalRate - The nominal interest rate per year (e.g., 0.12 for 12%).
 * @param compoundingPeriods - The number of compounding periods per year (e.g., 12 for monthly).
 * @returns The effective annual rate as a decimal.
 */
export default function effectiveAnnualRate(
  nominalRate: number,
  compoundingPeriods: number
): number {
  if (compoundingPeriods <= 0)
    throw new Error("Compounding periods must be positive");
  return Math.pow(1 + nominalRate / compoundingPeriods, compoundingPeriods) - 1;
}
