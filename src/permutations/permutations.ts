/**
 * Calculates the number of permutations of r elements from a set of n.
 *
 * Formula: P(n, r) = n! / (n - r)!
 *
 * @param n - Total number of items.
 * @param r - Number of items to arrange.
 * @returns Number of permutations.
 * @throws If n or r is negative or r > n.
 */
export default function permutations(n: number, r: number): number {
  if (!Number.isInteger(n) || !Number.isInteger(r))
    throw new Error("Inputs must be integers");
  if (n < 0 || r < 0) throw new Error("Inputs must be non-negative");
  if (r > n) throw new Error("r cannot be greater than n");

  let result = 1;
  for (let i = 0; i < r; i++) {
    result *= n - i;
  }
  return result;
}
