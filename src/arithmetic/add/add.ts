/**
 * Add numbers.
 *
 * @since 0.1.0
 * @param {number} augend A number to which another number is added.
 * @param {number} addend A number which is added to another number.
 * @param {...number} [args] Additional numbers to add.
 * @returns {number} Returns the sum.
 *
 * @example
 * add(1, 2)
 * // => 3
 *
 * add(1, 2, 3)
 * // => 6
 */
export default function add(
  augend: number,
  addend: number,
  ...args: number[]
): number {
  let sum = augend + addend;

  for (const arg of args) {
    sum += arg;
  }

  return sum;
}
