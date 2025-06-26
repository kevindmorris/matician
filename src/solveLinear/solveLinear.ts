/**
 * Solves a linear equation of the form ax + b = 0.
 *
 * @param a - Coefficient of x.
 * @param b - Constant term.
 * @returns The solution x, or throws if a is zero.
 *
 * @example
 * ```ts
 * solveLinear(2, -4); // returns 2
 * solveLinear(1, 3);  // returns -3
 * ```
 */
export default function solveLinear(a: number, b: number): number {
  if (a === 0) {
    throw new Error('Coefficient "a" cannot be zero in a linear equation.');
  }

  const normalize = (x: number): number => (Object.is(x, -0) ? 0 : x);

  return normalize(-b / a);
}
