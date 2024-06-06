/**
 * Find the maximum in an array of numbers.
 *
 * @since 0.5.1
 * @param {number[]} array An array of numbers.
 * @returns {number} Returns the maximum.
 *
 * @example
 * max([1, 2, 3, 4])
 * // => 4
 */
export default function max(array: number[]): number {
  let curr: number = NaN;

  if (array.length === 0) return NaN;

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (!curr || element > curr) curr = element;
  }

  return curr;
}
