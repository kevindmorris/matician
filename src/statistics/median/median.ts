/**
 * Find the median of an array.
 *
 * @since 0.1.0
 * @param {Array} array An array.
 * @param {Function} [iteratee] The iteratee invoked on each element.
 * @returns {number} Returns the median.
 *
 * @example
 * median([1, 2, 3])
 * // => 2
 *
 * const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }]
 * median(objects, ({ n }) => n)
 * // => 5
 */
export default function median<T>(
  array: Array<T>,
  iteratee?: (obj: T) => number
): number {
  array = [...array].sort((a, b) => {
    const newA = iteratee ? iteratee(a) : a;
    const newB = iteratee ? iteratee(b) : b;

    if (typeof newA === "number" && typeof newB === "number")
      return newA - newB;

    return 0;
  });

  const half = Math.floor(array.length / 2);

  let median = NaN;

  if (array.length % 2) {
    const element = array[half];

    if (typeof element === "number") {
      median = element;
    } else if (iteratee) {
      median = iteratee(element);
    }
  } else {
    const element1 = array[half - 1];
    const element2 = array[half];

    if (typeof element1 === "number" && typeof element2 === "number") {
      median = (element1 + element2) / 2;
    } else if (iteratee) {
      median = (iteratee(array[half - 1]) + iteratee(array[half])) / 2;
    }
  }

  return median;
}
