/**
 * Calculates the hypotenuse of a right triangle using the Pythagorean theorem.
 *
 * @param a - Length of one leg.
 * @param b - Length of the other leg.
 * @returns The length of the hypotenuse.
 *
 * @example
 * ```ts
 * hypotenuse(3, 4);   // returns 5
 * hypotenuse(5, 12);  // returns 13
 * ```
 */
export default function hypotenuse(a: number, b: number): number {
  return Math.sqrt(a * a + b * b);
}
