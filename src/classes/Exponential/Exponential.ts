/**
 * Class representing the Exponential distribution.
 * Models the time between events in a Poisson process.
 */
export default class Exponential {
  private readonly _lambda: number;

  /**
   * @param lambda - Rate parameter (λ > 0)
   */
  constructor(lambda: number) {
    if (lambda <= 0) {
      throw new Error("Lambda must be greater than 0.");
    }
    this._lambda = lambda;
  }

  /** Rate parameter λ */
  get lambda(): number {
    return this._lambda;
  }

  /**
   * Probability density function (PDF).
   * @param x - Value (x ≥ 0)
   * @returns Probability density at x
   */
  public pdf(x: number): number {
    if (x < 0) return 0;
    return this._lambda * Math.exp(-this._lambda * x);
  }

  /**
   * Cumulative distribution function (CDF).
   * @param x - Value (x ≥ 0)
   * @returns Cumulative probability up to x
   */
  public cdf(x: number): number {
    if (x < 0) return 0;
    return 1 - Math.exp(-this._lambda * x);
  }

  /**
   * Mean of the distribution.
   * @returns Mean = 1 / λ
   */
  public mean(): number {
    return 1 / this._lambda;
  }

  /**
   * Variance of the distribution.
   * @returns Variance = 1 / λ²
   */
  public variance(): number {
    return 1 / (this._lambda * this._lambda);
  }

  /**
   * Generate a random sample from the distribution.
   * Uses inverse transform sampling.
   * @returns Sample value
   */
  public sample(): number {
    return -Math.log(1 - Math.random()) / this._lambda;
  }
}
