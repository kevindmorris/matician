/**
 * Determines if a number is even.
 *
 * @param value - The number to check.
 * @returns `true` if the number is even, otherwise `false`.
 *
 * @example
 * ```ts
 * isEven(4);  // true
 * isEven(5);  // false
 * ```
 */
export default function isEven(value: number): boolean {
  return value % 2 === 0;
}
