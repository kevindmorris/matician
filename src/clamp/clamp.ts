/**
 * Clamps a number between a minimum and a maximum value.
 *
 * @param value - The number to clamp.
 * @param min - The minimum allowable value.
 * @param max - The maximum allowable value.
 * @returns The clamped value between min and max.
 * @throws Will throw an error if min > max.
 *
 * @example
 * ```ts
 * clamp(5, 1, 10);  // returns 5
 * clamp(0, 1, 10);  // returns 1
 * clamp(15, 1, 10); // returns 10
 * ```
 */
export default function clamp(value: number, min: number, max: number): number {
  if (min > max) throw new Error("Minimum cannot be greater than maximum");
  return Math.min(Math.max(value, min), max);
}
