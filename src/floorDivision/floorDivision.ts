/**
 * Performs floor division between two numbers.
 *
 * Floor division returns the largest integer less than or equal to the division result.
 *
 * @param a - The dividend.
 * @param b - The divisor.
 * @returns The floor of the result of `a` divided by `b`.
 * @throws Will throw an error if `b` is zero.
 *
 * @example
 * ```ts
 * floorDivision(7, 3);  // returns 2
 * floorDivision(-7, 3); // returns -3
 * floorDivision(7, -3); // returns -3
 * ```
 */
export default function floorDivision(a: number, b: number): number {
  if (b === 0) throw new Error("Division by zero");
  return Math.floor(a / b);
}
