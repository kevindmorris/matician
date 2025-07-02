/**
 * Class representing the Geometric distribution.
 * Models the number of Bernoulli trials needed for the first success.
 */
export default class Geometric {
  private readonly _p: number;

  /**
   * @param p - Probability of success in each trial (0 < p ≤ 1)
   */
  constructor(p: number) {
    if (p <= 0 || p > 1) {
      throw new Error(
        "Probability p must be between 0 (exclusive) and 1 (inclusive)."
      );
    }
    this._p = p;
  }

  /** Probability of success */
  get p(): number {
    return this._p;
  }

  /** Probability of failure */
  get q(): number {
    return 1 - this._p;
  }

  /**
   * Probability mass function (PMF).
   * @param k - Number of trials until first success (k ≥ 1)
   * @returns P(X = k)
   */
  public pmf(k: number): number {
    if (!Number.isInteger(k) || k < 1) return 0;
    return Math.pow(1 - this._p, k - 1) * this._p;
  }

  /**
   * Cumulative distribution function (CDF).
   * @param k - Number of trials
   * @returns P(X ≤ k)
   */
  public cdf(k: number): number {
    if (k < 1) return 0;
    return 1 - Math.pow(1 - this._p, Math.floor(k));
  }

  /**
   * Mean of the distribution
   * @returns 1 / p
   */
  public mean(): number {
    return 1 / this._p;
  }

  /**
   * Variance of the distribution
   * @returns (1 - p) / p²
   */
  public variance(): number {
    return (1 - this._p) / (this._p * this._p);
  }

  /**
   * Generate a random sample using inverse transform sampling
   * @returns Sample number of trials until first success
   */
  public sample(): number {
    return Math.ceil(Math.log(1 - Math.random()) / Math.log(1 - this._p));
  }
}
