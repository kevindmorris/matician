/**
 * Determines if a number is within a specified range.
 *
 * @param value - The number to test.
 * @param min - The lower bound of the range.
 * @param max - The upper bound of the range.
 * @param inclusive - Whether the range includes the bounds (default: true).
 * @returns True if the number is within the range, false otherwise.
 *
 * @example
 * ```ts
 * inRange(5, 1, 10); // true (inclusive by default)
 * inRange(1, 1, 10); // true
 * inRange(10, 1, 10, false); // false (exclusive)
 * inRange(5, 6, 10); // false
 * ```
 */
export default function inRange(
  value: number,
  min: number,
  max: number,
  inclusive: boolean = true
): boolean {
  return inclusive
    ? value >= min && value <= max
    : value > min && value < max;
}
