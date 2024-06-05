/**
 * Find the dot product of 2 or more vectors.
 *
 * @param {...number[]} args The vectors. (Each vector must have the same dimension)
 * @returns {number} Returns the dot product.
 *
 * @example
 * dot([1, 2], [2, 3])
 * // => (1 * 2) + (2 * 3) => 8
 */
export default function dot(...args: number[][]): number | undefined {
  if (
    !args ||
    args.length === 0 ||
    !args.every((arg) => arg.length === args[0].length)
  )
    return undefined;

  const dim = args[0].length;

  let sum = 0;

  for (let i = 0; i < dim; i++) {
    let product = args.reduce((total, curr) => total * curr[i], 1);
    sum = sum + product;
  }

  return sum;
}
