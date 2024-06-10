/**
 * Divide numbers.
 *
 * @since 0.1.0
 * @param {number} dividend A number which is divided by another number.
 * @param {number} divisor A number by which another number is divided.
 * @param {...number} [args] Additional numbers to divide.
 * @returns {number} Returns the quotient.
 *
 * @example
 * divide(9, 3)
 * // => 3
 *
 * divide(9, 3, -3)
 * // => -1
 */
export default function divide(
  dividend: number,
  divisor: number,
  ...args: number[]
): number {
  let quotient = dividend / divisor;

  for (const arg of args) {
    quotient /= arg;
  }

  return quotient;
}
