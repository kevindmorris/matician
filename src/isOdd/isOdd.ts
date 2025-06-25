/**
 * Determines if a number is odd.
 *
 * @param value - The number to check.
 * @returns `true` if the number is odd, otherwise `false`.
 *
 * @example
 * ```ts
 * isOdd(3);   // true
 * isOdd(4);   // false
 * ```
 */
export default function isOdd(value: number): boolean {
  return value % 2 !== 0;
}
