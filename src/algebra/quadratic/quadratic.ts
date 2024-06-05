/**
 * Solve for `x` in a second-order polynomial such as `ax^2 + bx + c = 0` using the quadratic formula.
 *
 * @since 0.5.0
 * @param {number} a The quadratic coefficient.
 * @param {number} b The linear coefficient.
 * @param {number} c The constant coefficient.
 * @returns {number[]} Returns the roots.
 *
 * @example
 * quadratic(1, 2, 1)
 * // => [-1]
 * quadratic(2, 4, -6)
 * // => [1, -3]
 * quadratic(1, 1, 1)
 * // => [NaN, NaN]
 */
export default function quadratic(a: number, b: number, c: number): number[] {
  const determinant = Math.sqrt(b * b - 4 * a * c);

  const first = (-b + determinant) / (2 * a);
  const second = (-b - determinant) / (2 * a);

  if (first === second) return [first];

  return [first, second];
}
