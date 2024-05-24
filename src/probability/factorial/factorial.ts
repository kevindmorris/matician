/**
 * Compute the factorial of non-negative integer `n`.
 * @param {number} n A non-negative integer.
 * @returns {number} Returns the product of all positive integers less than or equal to `n`.
 */
export default function factorial(n: number): number {
  if (n < 0) return NaN;
  if (n === 0) return 1;

  return n * factorial(n - 1);
}
