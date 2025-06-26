/**
 * Returns a random integer between min and max, inclusive.
 * @param min - Minimum integer (inclusive).
 * @param max - Maximum integer (inclusive).
 */
export default function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
