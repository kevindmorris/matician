/**
 * Class representing the discrete uniform distribution.
 * All integers from a to b (inclusive) are equally likely.
 */
export default class DiscreteUniform {
  private a: number;
  private b: number;

  /**
   * @param {number} a - Lower bound (inclusive)
   * @param {number} b - Upper bound (inclusive)
   */
  constructor(a: number, b: number) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
      throw new Error("a and b must be integers.");
    }
    if (a > b) {
      throw new Error(
        "Lower bound a must be less than or equal to upper bound b."
      );
    }
    this.a = a;
    this.b = b;
  }

  /**
   * Probability mass function (PMF).
   * @param {number} x - Value to evaluate
   * @returns {number} Probability of x
   */
  public pmf(x: number): number {
    if (!Number.isInteger(x) || x < this.a || x > this.b) return 0;
    return 1 / (this.b - this.a + 1);
  }

  /**
   * Cumulative distribution function (CDF).
   * @param {number} x - Value to evaluate
   * @returns {number} Cumulative probability P(X ≤ x)
   */
  public cdf(x: number): number {
    if (x < this.a) return 0;
    if (x >= this.b) return 1;
    return Math.floor(x - this.a + 1) / (this.b - this.a + 1);
  }
}
