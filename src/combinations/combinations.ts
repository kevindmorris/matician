/**
 * Calculates the number of combinations of `k` items chosen from `n` items.
 * If `replacement` is true, computes with replacement: (n + k - 1) choose k.
 * If false, computes without replacement: n choose k.
 *
 * @param n - Total number of items (n ≥ 0)
 * @param k - Number of items to choose (k ≥ 0)
 * @param replacement - Whether replacement is allowed (default: true)
 * @returns The number of combinations
 *
 * @example
 * combinations(5, 3); // 35 (with replacement)
 * combinations(5, 3, false); // 10 (no replacement)
 */
export default function combinations(
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

  const choose = (a: number, b: number): number => {
    if (b > a) return 0;
    if (b === 0 || b === a) return 1;
    b = Math.min(b, a - b); // use symmetry
    let result = 1;
    for (let i = 1; i <= b; i++) {
      result *= a - (b - i);
      result /= i;
    }
    return result;
  };

  if (replacement) {
    return choose(n + k - 1, k);
  } else {
    return choose(n, k);
  }
}
