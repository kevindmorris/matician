/**
 * Calculate the simple interest earned on a principal over time.
 *
 * @since 0.4.2
 * @param {number} P The principal. (`P>0`)
 * @param {number} r The interest rate. (`0≤r≤1`)
 * @param {number} t The number of periods. (`t` is an integer and `t>0`)
 * @returns {Object} Returns an object with the accrued amount and interest earned.
 */
export default function simpleInterest(
  P: number,
  r: number,
  t: number
): {
  A: number;
  I: number;
} {
  if (P <= 0 || r < 0 || r > 1 || !Number.isInteger(t) || t < 0)
    return { A: NaN, I: NaN };

  return {
    A: P * (1 + r * t),
    I: P * r * t
  };
}
