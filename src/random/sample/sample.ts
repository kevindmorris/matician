/**
 * Get a random element from an array.
 *
 * @since 0.4.2
 * @param {Array} array An array.
 * @returns A random element from an array.
 *
 * @example
 * sample([1, 2, 3])
 * // => 1, 2, or 3
 */
export default function sample(array: any[]): any {
  const index = Math.floor(Math.random() * (array.length + 1));
  return array[index];
}
