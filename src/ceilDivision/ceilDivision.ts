/**
 * Performs ceiling division, returning the smallest integer greater than or equal to a / b.
 *
 * @param a - The dividend.
 * @param b - The divisor.
 * @returns The smallest integer greater than or equal to a / b.
 * @throws Will throw an error if b is zero.
 *
 * @example
 * ```ts
 * ceilDivision(7, 3); // returns 3
 * ceilDivision(-7, 3); // returns -2
 * ```
 */
export default function ceilDivision(a: number, b: number): number {
  if (b === 0) throw new Error("Division by zero");
  return Math.ceil(a / b);
}
