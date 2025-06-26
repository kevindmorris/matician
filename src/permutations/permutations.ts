/**
 * Calculates the number of permutations of `k` items selected from `n` items.
 * If `replacement` is true, calculates n^k (with replacement).
 * If false, calculates n! / (n - k)! (without replacement).
 *
 * @param n - Total number of items (n ≥ 0)
 * @param k - Number of items to arrange (k ≥ 0)
 * @param replacement - Whether replacement is allowed (default: true)
 * @returns The number of permutations
 *
 * @example
 * permutations(5, 2); // 25 (with replacement)
 * permutations(5, 2, false); // 20 (no replacement)
 */
export default function permutations(
  n: number,
  k: number,
  replacement: boolean = true
): number {
  if (n < 0 || k < 0) {
    throw new Error("n and k must be non-negative integers");
  }

  if (!Number.isInteger(n) || !Number.isInteger(k)) {
    throw new Error("n and k must be integers");
  }

  if (replacement) {
    return Math.pow(n, k);
  }

  if (k > n) return 0;

  let result = 1;
  for (let i = 0; i < k; i++) {
    result *= n - i;
  }

  return result;
}
