/**
 * Calculates accumulated value using simple interest.
 *
 * Formula: A = P * (1 + i * t)
 *
 * @param P - Principal (initial amount)
 * @param i - Annual interest rate (e.g. 0.05 for 5%)
 * @param t - Time in years
 * @returns Accumulated value under simple interest
 */
export default function simpleInterest(
  P: number,
  i: number,
  t: number
): number {
  return P * (1 + i * t);
}
