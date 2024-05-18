/**
 * Compute the mean of numbers in an array.
 * @param {Array} array An array of numbers.
 * @returns {number} Returns the mean.
 */
export default function mean(array: number[]): number {
  
  return (
    array.reduce((prev, curr) => {
      return prev + curr;
    }, 0) / array.length
  );
}
