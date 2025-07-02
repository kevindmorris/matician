/**
 * Class representing the continuous uniform distribution over [a, b].
 * The PDF is constant over the interval and zero elsewhere.
 */
export default class ContinuousUniform {
  private readonly _a: number;
  private readonly _b: number;

  /**
   * @param a - Lower bound (a < b)
   * @param b - Upper bound (b > a)
   */
  constructor(a: number, b: number) {
    if (a >= b) {
      throw new Error("Lower bound a must be less than upper bound b.");
    }
    this._a = a;
    this._b = b;
  }

  /** Lower bound */
  get a(): number {
    return this._a;
  }

  /** Upper bound */
  get b(): number {
    return this._b;
  }

  /**
   * Probability density function (PDF).
   * @param x - Value at which to evaluate the PDF
   * @returns PDF at x
   */
  public pdf(x: number): number {
    if (x < this._a || x > this._b) return 0;
    return 1 / (this._b - this._a);
  }

  /**
   * Cumulative distribution function (CDF).
   * @param x - Value at which to evaluate the CDF
   * @returns CDF at x
   */
  public cdf(x: number): number {
    if (x < this._a) return 0;
    if (x > this._b) return 1;
    return (x - this._a) / (this._b - this._a);
  }

  /**
   * Mean of the distribution.
   * @returns (a + b) / 2
   */
  public mean(): number {
    return (this._a + this._b) / 2;
  }

  /**
   * Variance of the distribution.
   * @returns (b - a)^2 / 12
   */
  public variance(): number {
    return Math.pow(this._b - this._a, 2) / 12;
  }

  /**
   * Generate a random sample from the distribution.
   * @returns A number in [a, b]
   */
  public sample(): number {
    return this._a + Math.random() * (this._b - this._a);
  }
}
