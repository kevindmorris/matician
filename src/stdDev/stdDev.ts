/**
 * Calculates the square root of the variance.
 */

import variance from "../variance";

export default function stdDev(values: number[]): number {
  return Math.sqrt(variance(values));
}
