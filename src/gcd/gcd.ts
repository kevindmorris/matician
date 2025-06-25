/**
 * Calculates the greatest common divisor (GCD) of two integers using the Euclidean algorithm.
 *
 * @param a - First integer.
 * @param b - Second integer.
 * @returns The greatest common divisor of `a` and `b`.
 * @throws Will throw an error if either number is not an integer.
 *
 * @example
 * ```ts
 * gcd(48, 18); // returns 6
 * gcd(7, 1);   // returns 1
 * ```
 */
export default function gcd(a: number, b: number): number {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error("Both arguments must be integers");
  }

  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}
