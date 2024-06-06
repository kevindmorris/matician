/**
 * Subtract numbers.
 *
 * @since 0.1.0
 * @param {number} minuend A number from which another number is subtracted.
 * @param {number} subtrahend A number which is subtracted from another.
 * @param {...number} [args] Additional numbers to subtract.
 * @returns {number} Returns the difference.
 *
 * @example
 * subtract(3, 2)
 * // => 1
 *
 * subtract(3, 2, 2)
 * // => -1
 */
export default function subtract(
  minuend: number,
  subtrahend: number,
  ...args: number[]
): number {
  let difference = minuend - subtrahend;

  for (const arg of args) {
    difference -= arg;
  }

  return difference;
}
