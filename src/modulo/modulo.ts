/**
 * Returns the remainder after dividing `a` by `b`.
 *
 * This is the modulo operation, which follows the sign of the dividend (`a`).
 *
 * @param a - The dividend.
 * @param b - The divisor.
 * @returns The remainder of `a` divided by `b`.
 * @throws Will throw an error if `b` is zero.
 *
 * @example
 * ```ts
 * modulo(10, 3);  // returns 1
 * modulo(-10, 3); // returns -1
 * modulo(10, -3); // returns 1
 * ```
 */
export default function modulo(a: number, b: number): number {
  if (b === 0) throw new Error("Modulo by zero");
  return a % b;
}
