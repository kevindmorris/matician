/**
 * Adds two or more numbers together.
 *
 * @param augend - The number to which another number (the addend) is added.
 * @param addend - The number that is added to the augend.
 * @param {...number} args - Additional numbers to include in the sum.
 * @returns The sum of the `augend`, `addend`, and additional numbers.
 *
 * @example
 * ```ts
 * add(2, 3); // returns 5
 * add(-1, 1); // returns 0
 * add(1, 2, 3, 4); // returns 10
 * ```
 */
export default function add(
  augend: number,
  addend: number,
  ...args: number[]
): number {
  return args.reduce((prev, curr) => {
    return prev + curr;
  }, augend + addend);
}
