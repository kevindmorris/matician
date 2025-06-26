/**
 * Class representing the continuous uniform distribution over [a, b].
 * The PDF is constant over the interval and zero elsewhere.
 */
export default class ContinuousUniform {
  private a: number;
  private b: number;

  /**
   * @param {number} a - Lower bound (a < b)
   * @param {number} b - Upper bound (b > a)
   */
  constructor(a: number, b: number) {
    if (a >= b) {
      throw new Error("Lower bound a must be less than upper bound b.");
    }
    this.a = a;
    this.b = b;
  }

  /**
   * Probability density function (PDF).
   * @param {number} x - Value at which to evaluate the PDF
   * @returns {number}
   */
  public pdf(x: number): number {
    if (x < this.a || x > this.b) return 0;
    return 1 / (this.b - this.a);
  }

  /**
   * Cumulative distribution function (CDF).
   * @param {number} x - Value at which to evaluate the CDF
   * @returns {number}
   */
  public cdf(x: number): number {
    if (x < this.a) return 0;
    if (x > this.b) return 1;
    return (x - this.a) / (this.b - this.a);
  }
}
