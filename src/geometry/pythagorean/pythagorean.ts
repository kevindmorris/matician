/**
 * The **Pythagorean Theorem** states that the sum of the squared sides of a right triangle equals the length of the hypotenuse squared.
 *
 * @param {number} a The length of side `a`.
 * @param {number} b The length of side `b`.
 * @returns {number} Returns the length of the hypotenuse.
 */
export default function pythagorean(a: number, b: number): number {
  return Math.sqrt(a * a + b * b);
}
