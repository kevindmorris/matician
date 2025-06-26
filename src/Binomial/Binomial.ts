/**
 * Class representing the Binomial distribution.
 */
export default class Binomial {
  private n: number;
  private p: number;

  /**
   * Create a Binomial distribution.
   * @param {number} n - Number of trials (non-negative integer).
   * @param {number} p - Probability of success (0 ≤ p ≤ 1).
   */
  constructor(n: number, p: number) {
    if (!Number.isInteger(n) || n < 0) {
      throw new Error("Number of trials n must be a non-negative integer.");
    }
    if (p < 0 || p > 1) {
      throw new Error("Probability p must be between 0 and 1.");
    }
    this.n = n;
    this.p = p;
  }

  /**
   * Probability mass function (PMF).
   * @param {number} k - Number of successes.
   * @returns {number} Probability of observing k successes.
   */
  public pmf(k: number): number {
    if (!Number.isInteger(k) || k < 0 || k > this.n) return 0;
    return this.binomialCoefficient(this.n, k) *
           Math.pow(this.p, k) *
           Math.pow(1 - this.p, this.n - k);
  }

  /**
   * Cumulative distribution function (CDF).
   * @param {number} k - Number of successes.
   * @returns {number} Probability of observing ≤ k successes.
   */
  public cdf(k: number): number {
    if (k < 0) return 0;
    if (k >= this.n) return 1;
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
