/**
 * Class representing the exponential distribution.
 * Models time between events in a Poisson process.
 */
export default class Exponential {
  private lambda: number;

  /**
   * @param {number} lambda - The rate parameter (λ > 0)
   */
  constructor(lambda: number) {
    if (lambda <= 0) {
      throw new Error("lambda must be greater than 0.");
    }
    this.lambda = lambda;
  }

  /**
   * Probability density function (PDF).
   * @param {number} x - The value to evaluate (x ≥ 0)
   * @returns {number} P(X = x)
   */
  public pdf(x: number): number {
    if (x < 0) return 0;
    return this.lambda * Math.exp(-this.lambda * x);
  }

  /**
   * Cumulative distribution function (CDF).
   * @param {number} x - The value to evaluate (x ≥ 0)
   * @returns {number} P(X ≤ x)
   */
  public cdf(x: number): number {
    if (x < 0) return 0;
    return 1 - Math.exp(-this.lambda * x);
  }
}
