/**
 * Rounds a number to a specified number of significant figures.
 *
 * Significant figures are digits that contribute to a number's precision.
 * This function handles positive, negative, and small/large magnitude numbers.
 *
 * @param value - The number to round.
 * @param figures - The number of significant figures to retain (must be ≥ 1).
 * @returns The rounded number with the specified significant figures.
 *
 * @example
 * ```ts
 * sigFig(1234.567, 3);    // 1230
 * sigFig(0.012345, 2);    // 0.012
 * sigFig(-987.65, 2);     // -990
 * sigFig(0, 3);           // 0
 * ```
 */
export default function sigFig(value: number, figures: number): number {
  if (figures < 1 || !Number.isFinite(value)) {
    throw new Error(
      "Invalid input: figures must be ≥ 1 and value must be finite"
    );
  }
  if (value === 0) return 0;

  const digits = Math.floor(Math.log10(Math.abs(value)));
  const factor = Math.pow(10, figures - digits - 1);
  return Math.round(value * factor) / factor;
}
