/**
 * Compute the median of numbers in an array.
 * @param {Array} array An array of numbers.
 * @returns {number} Returns the median.
 */
export default function median(array: number[]): number {

  array = [...array].sort((a, b) => a - b);
  
  const half = Math.floor(array.length / 2);

  return (array.length % 2
    ? array[half]
    : (array[half - 1] + array[half]) / 2
  );
}
