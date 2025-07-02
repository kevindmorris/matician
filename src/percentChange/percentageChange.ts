/**
 * Calculates the percentage change between an initial and a final value, returned as a decimal.
 *
 * @param initial - The starting value.
 * @param final - The ending value.
 * @returns The percentage change as a decimal (e.g., 0.2 for 20%, -0.25 for -25%).
 *
 * @throws If the initial value is zero (to avoid division by zero).
 *
 * @example
 * ```ts
 * percentageChange(100, 120); // returns 0.2
 * percentageChange(200, 150); // returns -0.25
 * ```
 */
export default function percentageChange(
  initial: number,
  final: number
): number {
  if (initial === 0) {
    throw new Error("Initial value cannot be zero.");
  }
  return (final - initial) / initial;
}
