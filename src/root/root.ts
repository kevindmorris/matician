/**
 * Calculates the nth root of a number.
 *
 * By default, it computes the square root (i.e., degree = 2).
 *
 * @param value - The number to take the root of.
 * @param degree - The degree of the root (e.g., 2 for square root, 3 for cube root).
 * @returns The nth root of `value`.
 * @throws Will throw an error if `degree` is 0.
 *
 * @example
 * ```ts
 * root(9);        // returns 3 (square root)
 * root(27, 3);    // returns 3 (cube root)
 * root(16, 4);    // returns 2 (fourth root)
 * ```
 */
export default function root(value: number, degree: number = 2): number {
  if (degree === 0) throw new Error("Zeroth root is undefined");
  return Math.pow(value, 1 / degree);
}
