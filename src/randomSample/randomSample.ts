/**
 * Returns a random sample of 'size' unique elements from the array.
 * @param array - Source array.
 * @param size - Number of elements to sample.
 * @returns A new array with sampled elements.
 */
export default function randomSample<T>(array: T[], size: number): T[] {
  if (size > array.length) throw new Error("Sample size exceeds array length");

  const clone = [...array];
  const result: T[] = [];
  while (result.length < size) {
    const idx = Math.floor(Math.random() * clone.length);
    result.push(clone.splice(idx, 1)[0]);
  }
  return result;
}
