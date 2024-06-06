/**
 * Find the range of an array by the specified `iteratee` invoked on each element.
 *
 * @since 0.5.1
 * @param {number[]} array An array.
 * @param {Function} [iteratee] The iteratee invoked on each element.
 * @returns {number} Returns the range.
 *
 * @example
 * const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }]
 * range(objects, ({ n }) => n)
 * // => 6
 */
export default function range(
  array: any[],
  iteratee?: (o: any) => number
): number {
  let min: number = NaN,
    max: number = NaN;

  if (array.length === 0) return NaN;

  for (let index = 0; index < array.length; index++) {
    const element = iteratee ? iteratee(array[index]) : array[index];
    if (Number.isNaN(min) || element < min) min = element;
    if (Number.isNaN(max) || element > max) max = element;
  }

  return max - min;
}
