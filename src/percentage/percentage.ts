/**
 * Calculates what percentage the 'part' is of the 'whole'.
 *
 * @param part - The portion of the whole.
 * @param whole - The total or whole value.
 * @returns The percentage value of `part` relative to `whole`.
 * @throws Will throw an error if `whole` is 0.
 *
 * @example
 * ```ts
 * percentage(25, 100); // returns 25
 * percentage(50, 200); // returns 25
 * percentage(0, 100);  // returns 0
 * ```
 */
export default function percentage(part: number, whole: number): number {
  if (whole === 0) throw new Error("Division by zero");
  return (part / whole) * 100;
}
