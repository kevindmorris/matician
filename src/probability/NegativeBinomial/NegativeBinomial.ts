import combination from "../../combination";

/**
 * **Negative binomial distribution**: A *discrete* probability
 * distribution that models the number of trials needed to
 * achieve a specified number of successes in a series of
 * Bernoulli trials, each with the same probability of success
 * `p`.
 */
export default class NegativeBinomial {
  /** The number of successes. */
  r: number;
  /** The probability of success. */
  p: number;
  /** The mean of the distribution. */
  mean: number;
  /** The variance of the distribution. */
  variance: number;
  /** The standard deviation of the distribution. */
  stdev: number;

  /**
   * Create a Negative Binomial distribution.
   * @param {number} r The number of successes.
   * @param {number} p The probability of a success.
   */
  constructor(r: number, p: number) {
    if (!Number.isInteger(r) || r < 1 || p < 0 || p > 1)
      throw new Error("Invalid parameters");

    this.r = r;
    this.p = p;
    this.mean = (r * (1 - p)) / p;
    this.variance = (r * (1 - p)) / Math.pow(p, 2);
    this.stdev = Math.sqrt((r * (1 - p)) / Math.pow(p, 2));
  }

  /**
   * Get the probability of exactly `x` failures before `r` successes occur.
   * @param {number} x The number of failures.
   * @return {number} Return `P(X=x)`.
   */
  pEqualTo(x: number): number {
    if (!Number.isInteger(x) || x < 0) return NaN;

    return (
      combination(x + this.r - 1, this.r - 1) *
      Math.pow(1 - this.p, x) *
      Math.pow(this.p, this.r)
    );
  }
}
