/**
 * Calculates the number of combinations (n choose r).
 * 
 * Formula: C(n, r) = n! / (r! * (n - r)!)
 *
 * @param n - Total number of items.
 * @param r - Number of items to choose.
 * @returns The number of combinations.
 * @throws If inputs are invalid.
 */
export default function combinations(n: number, r: number): number {
  if (!Number.isInteger(n) || !Number.isInteger(r))
    throw new Error("Inputs must be integers");
  if (n < 0 || r < 0) throw new Error("Inputs must be non-negative");
  if (r > n) throw new Error("r cannot be greater than n");

  r = Math.min(r, n - r); // Take advantage of symmetry C(n, r) == C(n, n - r)

  let numerator = 1;
  let denominator = 1;
  for (let i = 1; i <= r; i++) {
    numerator *= n - i + 1;
    denominator *= i;
  }
  return numerator / denominator;
}
