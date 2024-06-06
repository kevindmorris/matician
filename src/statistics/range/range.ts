/**
 * Find the range of an array of numbers.
 *
 * @since 0.5.1
 * @param {number[]} array An array of numbers.
 * @returns {number} Returns the range.
 *
 * @example
 * range([4, 3, 2, 1])
 * // => 3
 */
export default function range(array: number[]): number {
  let min: number = NaN,
    max: number = NaN;

  if (array.length === 0) return NaN;

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (Number.isNaN(min) || element < min) min = element;
    if (Number.isNaN(max) || element > max) max = element;
  }

  return max - min;
}
