/**
 * Divides one number by another.
 *
 * @param a - The dividend.
 * @param b - The divisor.
 * @returns The result of `a` divided by `b`.
 * @throws Will throw an error if `b` is zero.
 *
 * @example
 * ```ts
 * divide(10, 2); // returns 5
 * divide(7, -1); // returns -7
 * ```
 */
export default function divide(a: number, b: number): number {
  if (b === 0) throw new Error("Division by zero");
  return a / b;
}
