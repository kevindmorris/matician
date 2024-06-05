/**
 * **Geometric distribution**: A *discrete* probability
 * distribution that models the number of Bernoulli trials
 * needed to get the first success, with each trial having
 * the same probability of success `p`.
 */
export default class Geometric {
  /** The probability of success. */
  p: number;
  /** The mean of the distribution. */
  mean: number;
  /** The variance of the distribution. */
  variance: number;
  /** The standard deviation of the distribution. */
  stdev: number;

  /**
   * Create a geometric distribution.
   * @param {number} p The probability of a success.
   */
  constructor(p: number) {
    if (p < 0 || p > 1) throw new Error("Invalid parameters");

    this.p = p;
    this.mean = 1 / p;
    this.variance = (1 - p) / Math.pow(p, 2);
    this.stdev = Math.sqrt((1 - p) / Math.pow(p, 2));
  }

  /**
   * Get the probability of a success on the `x`th trial.
   * @param {number} x The number of trials. (`x` must be an integer and `x>0`)
   * @return {number} Return `P(X=x)`.
   */
  pEqualTo(x: number): number {
    if (!Number.isInteger(x) || x < 1) return NaN;

    return this.p * Math.pow(1 - this.p, x - 1);
  }
}
