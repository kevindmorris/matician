/**
 * Class representing a discrete uniform distribution over integers [a, b].
 * Each integer in the range has equal probability.
 */
export default class DiscreteUniform {
  private readonly _a: number;
  private readonly _b: number;

  /**
   * @param a - Lower bound (inclusive)
   * @param b - Upper bound (inclusive), must be ≥ a
   */
  constructor(a: number, b: number) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
      throw new Error("Bounds a and b must be integers.");
    }
    if (a > b) {
      throw new Error(
        "Lower bound a must be less than or equal to upper bound b."
      );
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

  /** Support size (number of discrete values) */
  get size(): number {
    return this._b - this._a + 1;
  }

  /**
   * Probability mass function (PMF).
   * @param x - Value to evaluate.
   * @returns Probability of x.
   */
  public pmf(x: number): number {
    if (!Number.isInteger(x)) return 0;
    return x >= this._a && x <= this._b ? 1 / this.size : 0;
  }

  /**
   * Cumulative distribution function (CDF).
   * @param x - Value to evaluate.
   * @returns Probability that value ≤ x.
   */
  public cdf(x: number): number {
    if (x < this._a) return 0;
    if (x >= this._b) return 1;
    return Math.floor(x - this._a + 1) / this.size;
  }

  /** Expected value (mean) */
  public mean(): number {
    return (this._a + this._b) / 2;
  }

  /** Variance */
  public variance(): number {
    const n = this.b - this.a + 1;
    return (n * n - 1) / 12;
  }

  /** Generate a random sample from the distribution */
  public sample(): number {
    return Math.floor(Math.random() * this.size) + this._a;
  }
}
