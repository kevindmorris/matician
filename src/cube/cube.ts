/**
 * Returns the cube of a number.
 *
 * @param value - The number to cube.
 * @returns The cube of the given number.
 *
 * @example
 * ```ts
 * cube(3);    // returns 27
 * cube(-2);   // returns -8
 * cube(0);    // returns 0
 * ```
 */
export default function cube(value: number): number {
  return value * value * value;
}
