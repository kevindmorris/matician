/**
 * Calculates the force of interest (δ) given the effective annual interest rate.
 *
 * Formula: δ = ln(1 + i)
 *
 * @param i - The effective annual interest rate as a decimal (e.g., 0.06 for 6%).
 * @returns The force of interest δ.
 * @throws Will throw an error if i is less than or equal to -1 (which would make ln(1 + i) invalid).
 */
export default function forceOfInterest(i: number): number {
  if (i <= -1) {
    throw new Error("Interest rate must be greater than -1.");
  }
  return Math.log(1 + i);
}
