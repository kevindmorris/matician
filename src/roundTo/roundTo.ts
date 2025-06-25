/**
 * Rounds a number to a specified number of decimal places.
 *
 * @param value - The number to round.
 * @param decimals - The number of decimal places to round to.
 * @returns The rounded number.
 *
 * @example
 * ```ts
 * roundTo(3.14159, 2);    // returns 3.14
 * roundTo(1.005, 2);      // returns 1.01
 * roundTo(123.456, 0);    // returns 123
 * ```
 */
export default function roundTo(value: number, decimals: number): number {
  const factor = Math.pow(10, decimals);
  return Math.round((value + Number.EPSILON) * factor) / factor;
}
