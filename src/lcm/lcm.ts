/**
 * Calculates the least common multiple (LCM) of two integers.
 *
 * @param a - First integer.
 * @param b - Second integer.
 * @returns The least common multiple of `a` and `b`.
 * @throws Will throw an error if either number is not an integer.
 *
 * @example
 * ```ts
 * lcm(4, 6);  // returns 12
 * lcm(7, 5);  // returns 35
 * ```
 */
function gcd(a: number, b: number): number {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

export default function lcm(a: number, b: number): number {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error("Both arguments must be integers");
  }

  if (a === 0 || b === 0) return 0;

  return Math.abs(a * b) / gcd(Math.abs(a), Math.abs(b));
}
