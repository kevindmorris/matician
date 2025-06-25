/**
 * Rounds a number to the nearest multiple of the specified step.
 */
export default function roundToNearest(value: number, step: number): number {
  return Math.round(value / step) * step;
}
