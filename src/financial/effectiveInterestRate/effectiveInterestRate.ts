/**
 * Calculate the rate of interest actually earned
 * on an investment or paid on a loan as a result
 * of compounding the interest over a given
 * period of time.
 *
 * @since 0.3.0
 * @param {number} r The nominal rate.
 * @param {number} m The number of times compounted per year.
 * (`m>0 and m=Infinity for continuous compounding`)
 * @returns {number} Returns the effective interest rate.
 */
export default function effectiveInterestRate(r: number, m: number): number {
  if (m <= 0) return NaN;

  if (m === Infinity) return Math.exp(r) - 1;

  return Math.pow(1 + r / m, m) - 1;
}
