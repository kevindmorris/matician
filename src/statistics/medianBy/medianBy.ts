/**
 * Compute the median of numbers in an array by the specified `iteratee` invoked on each element in the array.
 *
 * @since 1.0.0
 * @param {Array} array An array.
 * @param {Function} [iteratee] The iteratee invoked on each element.
 * @returns {number} Returns the median.
 *
 * @example
 * const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }]
 * sumBy(objects, ({ n }) => n)
 * // => 5
 */
export default function medianBy(
  array: any[],
  iteratee?: (o: any) => number
): number {
  if (array === null || array.length === 0) return 0;

  array = [...array].sort((a, b) => {
    const newA = iteratee ? iteratee(a) : a;
    const newB = iteratee ? iteratee(b) : b;

    if (
      newA !== undefined &&
      newB !== undefined &&
      typeof newA === "number" &&
      typeof newB === "number"
    )
      return iteratee ? iteratee(a) - iteratee(b) : a - b;

    return 0;
  });

  const half = Math.floor(array.length / 2);

  let result;

  if (iteratee)
    result =
      array.length % 2
        ? iteratee(array[half])
        : (iteratee(array[half - 1]) + iteratee(array[half])) / 2;
  else
    result =
      array.length % 2 ? array[half] : (array[half - 1] + array[half]) / 2;

  return result;
}
