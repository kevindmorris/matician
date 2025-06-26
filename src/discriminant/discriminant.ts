/**
 * Calculates the discriminant of a quadratic equation ax² + bx + c = 0.
 *
 * The discriminant is defined as: D = b² - 4ac
 *
 * @param a - Coefficient of x²
 * @param b - Coefficient of x
 * @param c - Constant term
 * @returns The discriminant value
 *
 * @example
 * ```ts
 * discriminant(1, 0, -4); // returns 16
 * discriminant(1, 0, 4);  // returns -16
 * ```
 */
export default function discriminant(a: number, b: number, c: number): number {
  return b * b - 4 * a * c;
}
