/**
 * Calculates the force of interest (δ), assuming continuous compounding.
 *
 * δ = ln(1 + i), where i is the effective annual interest rate.
 *
 * @param effectiveRate - The effective annual interest rate (as a decimal, e.g., 0.05 for 5%).
 * @returns The force of interest δ.
 */
export default function forceOfInterest(effectiveRate: number): number {
  if (effectiveRate < -1) throw new Error("Effective rate must be greater than -100%");
  return Math.log(1 + effectiveRate);
}
