/**
 * Calculates the annual effective discount rate (d) from the effective interest rate (i).
 *
 * Formula: d = i / (1 + i)
 *
 * @param i - The effective annual interest rate (e.g., 0.05 for 5%)
 * @returns The effective discount rate
 * @throws Error if i ≤ -1 (invalid for discount rate computation)
 */
export default function discountRate(i: number): number {
  if (i <= -1) {
    throw new Error("Interest rate must be greater than -1.");
  }
  return i / (1 + i);
}
