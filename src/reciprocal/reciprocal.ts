/**
 * Returns the multiplicative inverse (1 divided by the number).
 *
 * @param value - The number to find the reciprocal of.
 * @returns The reciprocal (1 / value).
 * @throws Will throw an error if the input is 0.
 *
 * @example
 * ```ts
 * reciprocal(2);   // returns 0.5
 * reciprocal(-4);  // returns -0.25
 * reciprocal(0);   // throws
 * ```
 */
export default function reciprocal(value: number): number {
  if (value === 0) throw new Error("Cannot compute reciprocal of zero");
  return 1 / value;
}
