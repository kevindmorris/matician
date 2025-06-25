/**
 * Subtracts the second number from the first.
 *
 * @param a - The number to subtract from (minuend).
 * @param b - The number to subtract (subtrahend).
 * @returns The result of `a - b`.
 *
 * @example
 * ```ts
 * subtract(10, 3);  // returns 7
 * subtract(3, 10);  // returns -7
 * subtract(-5, -2); // returns -3
 * ```
 */
export default function subtract(a: number, b: number): number {
  return a - b;
}
