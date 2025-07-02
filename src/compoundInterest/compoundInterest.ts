/**
 * Calculates accumulated value using compound interest.
 *
 * Formula: A = P * (1 + i)^t
 *
 * @param P - Principal (initial amount)
 * @param i - Annual effective interest rate (e.g. 0.05 for 5%)
 * @param t - Time in years
 * @returns Accumulated value under compound interest
 */
export default function compoundInterest(
  P: number,
  i: number,
  t: number
): number {
  return P * Math.pow(1 + i, t);
}
