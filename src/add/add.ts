/**
 * Adds two numbers together.
 *
 * @param augend - The number to which another number (the addend) is added.
 * @param addend - The number that is added to the augend.
 * @returns The sum of the `augend` and `addend`.
 *
 * @example
 * ```ts
 * add(2, 3); // returns 5
 * add(-1, 1); // returns 0
 * ```
 */
export default function add(augend: number, addend: number): number {
  return augend + addend;
}
