/**
 * Class representing the Bernoulli distribution.
 */
export default class Bernoulli {
  private p: number;

  /**
   * Create a Bernoulli distribution.
   * @param {number} p - Probability of success (1). Must be between 0 and 1.
   */
  constructor(p: number) {
    if (p < 0 || p > 1) {
      throw new Error("Probability p must be between 0 and 1.");
    }
    this.p = p;
  }

  /**
   * Probability mass function (PMF).
   * @param {number} x - Outcome (0 or 1).
   * @returns {number} The probability of observing x.
   */
  public pmf(x: number): number {
    if (x === 0) return 1 - this.p;
    if (x === 1) return this.p;
    return 0;
  }

  /**
   * Cumulative distribution function (CDF).
   * @param {number} x - Outcome value.
   * @returns {number} The cumulative probability up to x.
   */
  public cdf(x: number): number {
    if (x < 0) return 0;
    if (x < 1) return 1 - this.p;
    return 1;
  }
}
