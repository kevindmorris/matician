/**
 * Calculates the factorial of a non-negative integer `n`.
 *
 * The factorial of a number `n` is the product of all positive integers less than or equal to `n`.
 *
 * @param n - A non-negative integer.
 * @returns The factorial of `n`.
 * @throws Will throw an error if `n` is negative or not an integer.
 *
 * @example
 * ```ts
 * factorial(0); // returns 1
 * factorial(5); // returns 120
 * factorial(3); // returns 6
 * ```
 */
export default function factorial(n: number): number {
  if (n < 0) throw new Error("Factorial is not defined for negative numbers");
  if (!Number.isInteger(n)) throw new Error("Factorial requires an integer");
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
