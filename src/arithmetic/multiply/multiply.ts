/**
 * Multiply numbers.
 *
 * @since 0.1.0
 * @param {number} multiplier A number by which another number is multiplied.
 * @param {number} multiplicand A number which is multiplied by another.
 * @param {...number} [args] Additional numbers to multiply.
 * @returns {number} Returns the product.
 *
 * @example
 * multiply(3, 2)
 * // => 6
 *
 * multiply(3, 2, 2)
 * // => 12
 */
export default function multiply(
  multiplier: number,
  multiplicand: number,
  ...args: number[]
): number {
  let product = multiplier * multiplicand;

  for (const arg of args) {
    product *= arg;
  }

  return product;
}
