/**
 * Returns a new array with elements shuffled using Fisher–Yates algorithm.
 * @param array - Array to shuffle.
 * @returns Shuffled array.
 */
export default function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
