/**
 * Formats a number to a fixed number of decimal places as a string.
 *
 * This function wraps `Number.toFixed()` to convert a number into
 * a string with the specified number of decimal places.
 *
 * Note: The result is always a string. It rounds the number as needed.
 *
 * @param value - The number to format.
 * @param decimals - The number of decimal places to include.
 * @returns The formatted number as a string.
 *
 * @example
 * ```ts
 * formatNumber(1.2345, 2);  // "1.23"
 * formatNumber(1, 2);       // "1.00"
 * formatNumber(0.1 + 0.2, 2); // "0.30"
 * ```
 */
export default function formatNumber(value: number, decimals: number): string {
  const factor = Math.pow(10, decimals);
  const rounded =
    (Math.round((Math.abs(value) + Number.EPSILON) * factor) / factor) *
    Math.sign(value);
  return rounded.toFixed(decimals);
}
