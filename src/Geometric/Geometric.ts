/**
 * Class representing the Geometric distribution.
 * Models the number of trials until the first success (support: k = 1, 2, 3, ...).
 */
export default class Geometric {
  private p: number;

  /**
   * Create a Geometric distribution.
   * @param {number} p - Probability of success on a single trial (0 < p ≤ 1).
   */
  constructor(p: number) {
    if (p <= 0 || p > 1) {
      throw new Error("Probability p must be in the interval (0, 1].");
    }
    this.p = p;
  }

  /**
   * Probability mass function (PMF).
   * @param {number} k - Trial number (must be integer ≥ 1).
   * @returns {number} Probability of first success occurring at trial k.
   */
  public pmf(k: number): number {
    if (!Number.isInteger(k) || k < 1) return 0;
    return Math.pow(1 - this.p, k - 1) * this.p;
  }

  /**
   * Cumulative distribution function (CDF).
   * @param {number} k - Maximum trial number.
   * @returns {number} Probability that the first success is on or before trial k.
   */
  public cdf(k: number): number {
    if (k < 1) return 0;
    return 1 - Math.pow(1 - this.p, Math.floor(k));
  }
}
