/**
 * Class representing the Negative Binomial distribution.
 * Models the number of failures before achieving r successes in independent Bernoulli trials.
 */
export default class NegativeBinomial {
  private r: number;
  private p: number;

  /**
   * Create a Negative Binomial distribution.
   * @param {number} r - Number of successes (positive integer).
   * @param {number} p - Probability of success (0 < p ≤ 1).
   */
  constructor(r: number, p: number) {
    if (!Number.isInteger(r) || r <= 0) {
      throw new Error("r must be a positive integer.");
    }
    if (p <= 0 || p > 1) {
      throw new Error("p must be in the interval (0, 1].");
    }
    this.r = r;
    this.p = p;
  }

  /**
   * Probability mass function (PMF).
   * @param {number} k - Number of failures before r successes (k ≥ 0).
   * @returns {number} Probability of k failures before r successes.
   */
  public pmf(k: number): number {
    if (!Number.isInteger(k) || k < 0) return 0;
    return (
      this.binomialCoefficient(k + this.r - 1, k) *
      Math.pow(this.p, this.r) *
      Math.pow(1 - this.p, k)
    );
  }

  /**
   * Cumulative distribution function (CDF).
   * @param {number} k - Maximum number of failures.
   * @returns {number} Probability of observing ≤ k failures before r successes.
   */
  public cdf(k: number): number {
    if (k < 0) return 0;
    let sum = 0;
    for (let i = 0; i <= Math.floor(k); i++) {
      sum += this.pmf(i);
    }
    return sum;
  }

  /**
   * Compute binomial coefficient "n choose k".
   * @param {number} n
   * @param {number} k
   * @returns {number}
   */
  private binomialCoefficient(n: number, k: number): number {
    if (k < 0 || k > n) return 0;
    let res = 1;
    for (let i = 1; i <= k; i++) {
      res *= (n - i + 1) / i;
    }
    return res;
  }
}
