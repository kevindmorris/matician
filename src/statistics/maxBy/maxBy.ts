/**
 * Find the maximum in an array by the specified `iteratee` invoked on each element.
 *
 * @since 0.5.1
 * @param {Array} array An array.
 * @param {Function} [iteratee] The iteratee invoked on each element.
 * @returns {number} Returns the maximum.
 *
 * @example
 * const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }]
 * maxBy(objects, ({ n }) => n)
 * // => 8
 */
export default function maxBy(
  array: any[],
  iteratee?: (o: any) => number
): number {
  let curr: number = NaN;

  if (array.length === 0) return NaN;

  for (let index = 0; index < array.length; index++) {
    const element = iteratee ? iteratee(array[index]) : array[index];
    if (
      element !== undefined &&
      typeof element === "number" &&
      (!curr || element > curr)
    )
      curr = element;
  }

  return curr;
}
