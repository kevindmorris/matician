/**
 * Determines whether a number is a prime number.
 *
 * @param value - The number to check.
 * @returns `true` if the number is prime, otherwise `false`.
 *
 * @example
 * ```ts
 * isPrime(2);   // true
 * isPrime(4);   // false
 * isPrime(17);  // true
 * ```
 */
export default function isPrime(value: number): boolean {
  if (value <= 1 || !Number.isInteger(value)) return false;
  if (value <= 3) return true;
  if (value % 2 === 0 || value % 3 === 0) return false;

  for (let i = 5; i * i <= value; i += 6) {
    if (value % i === 0 || value % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}
