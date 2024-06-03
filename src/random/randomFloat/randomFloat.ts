/**
 * Get a random number between the inclusive bounds.
 *
 * @since 0.4.2
 * @param {number} [lower=0] The lower bound.
 * @param {number} [upper=1] The upper bound.
 * @returns {number} Returns a random number.
 *
 * @example
 * randomFloat()
 * // => a number between 0 or 1
 * randomFloat(2)
 * // => a number between 0 and 2
 * randomFloat(1, 2)
 * // => a number between 1 and 2
 */
export default function randomFloat(lower?: number, upper?: number): number {
  if (lower !== undefined && upper !== undefined && upper < lower)
    throw new Error("Invalid parameters");

  if (lower !== undefined && upper !== undefined)
    return Math.random() * (upper - lower) + lower;

  if (lower !== undefined && upper === undefined) {
    upper = lower;
    return Math.random() * upper;
  }

  return Math.random();
}
