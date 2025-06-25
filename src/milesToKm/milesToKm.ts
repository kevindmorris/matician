/**
 * Converts miles to kilometers.
 *
 * Uses the conversion factor: 1 mile ≈ 1.60934 kilometers.
 *
 * @param miles - The distance in miles.
 * @returns The equivalent distance in kilometers.
 *
 * @example
 * ```ts
 * milesToKm(1);    // 1.60934
 * milesToKm(0);    // 0
 * milesToKm(5);    // 8.0467
 * ```
 */
export default function milesToKm(miles: number): number {
  return miles * 1.60934;
}
