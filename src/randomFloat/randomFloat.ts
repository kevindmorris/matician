/**
 * Returns a random float between min (inclusive) and max (exclusive).
 * @param min - Minimum value (inclusive).
 * @param max - Maximum value (exclusive).
 */
export default function randomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
