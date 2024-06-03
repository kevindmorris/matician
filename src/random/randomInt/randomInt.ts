/**
 * Get a random integer between the inclusive bounds.
 *
 * @since 0.4.2
 * @param {number} [lower=0] The lower bound. (Must be an integer)
 * @param {number} [upper=1] The upper bound. (Must be an integer)
 * @returns {number} Returns a random integer.
 *
 * @example
 * randomInt()
 * // => 0 or 1
 * randomInt(2)
 * // => an integer between 0 and 2
 * randomInt(1, 2)
 * // => an integer between 1 and 2
 */
export default function randomInt(lower?: number, upper?: number): number {
  if (
    (lower !== undefined && !Number.isInteger(lower)) ||
    (upper !== undefined && !Number.isInteger(upper)) ||
    (lower !== undefined && upper !== undefined && upper < lower)
  )
    throw new Error("Invalid parameters");

  if (lower !== undefined && upper !== undefined)
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;

  if (lower !== undefined && upper === undefined) {
    upper = lower;
    return Math.floor(Math.random() * (upper + 1));
  }

  return Math.floor(Math.random() * 2);
}
