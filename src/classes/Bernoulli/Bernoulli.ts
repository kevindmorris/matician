/**
 * Class representing the Bernoulli distribution.
 */
export default class Bernoulli {
  private readonly _p: number;

  /**
   * @param p - Probability of success (1). Must be between 0 and 1.
   */
  constructor(p: number) {
    if (p < 0 || p > 1) {
      throw new Error("Probability p must be between 0 and 1.");
    }
    this._p = p;
  }

  /**
   * The probability of success (1).
   */
  public get p(): number {
    return this._p;
  }

  /**
   * The probability of failure (0), defined as q = 1 - p.
   */
  public get q(): number {
    return 1 - this._p;
  }

  /**
   * Returns the probability mass function value at x.
   * @param x - Outcome (0 or 1).
   * @returns Probability of observing x.
   */
  public pmf(x: number): number {
    if (x === 0) return this.q;
    if (x === 1) return this.p;
    return 0;
  }

  /**
   * Returns the cumulative distribution function value at x.
   * @param x - Outcome value.
   * @returns Cumulative probability up to x.
   */
  public cdf(x: number): number {
    if (x < 0) return 0;
    if (x < 1) return this.q;
    return 1;
  }

  /**
   * Returns the mean (expected value) of the distribution.
   * @returns The mean.
   */
  public mean(): number {
    return this.p;
  }

  /**
   * Returns the variance of the distribution.
   * @returns The variance.
   */
  public variance(): number {
    return this.p * this.q;
  }

  /**
   * Generates a random sample (0 or 1) from the distribution.
   * @returns A sampled value from the distribution.
   */
  public sample(): number {
    return Math.random() < this.p ? 1 : 0;
  }
}
