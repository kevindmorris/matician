/**
 * **Discrete uniform distribution**: A *discrete* probability
 * distribution where a finite number of values are equally
 * likely to be observed.
 */
export default class Uniform {
  /** The minimum of the distribution. */
  a: number;
  /** The maximum of the distribution. */
  b: number;
  /** The number of outcomes. */
  n: number;
  /** The mean of the distribution. */
  mean: number;
  /** The variance of the distribution. */
  variance: number;
  /** The standard deviation of the distribution. */
  stdev: number;

  /**
   * Create a uniform distribution.
   * @param {number} a The minimum of the distribution.
   * @param {number} b The maximum of the distribution.
   */
  constructor(a: number, b: number) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || b < a)
      throw new Error("Invalid parameters");

    this.a = a;
    this.b = b;
    this.n = b - a + 1;
    this.mean = (a + b) / 2;
    this.variance = (Math.pow(b - a + 1, 2) - 1) / 12;
    this.stdev = Math.sqrt((Math.pow(b - a + 1, 2) - 1) / 12);
  }

  /**
   * Get the probability of `x`.
   * @param {number} x The value. (`x` must be an integer and `a≤x≤b`)
   * @return {number} Return `P(X=x)`.
   */
  pEqualTo(x: number): number {
    if (!Number.isInteger(x) || x < 1 || x > this.n) return NaN;

    return 1 / this.n;
  }

  /**
   * Get the probability of a value less than or equal to `x`.
   * @param {number} x The value. (`x` must be an integer and `a≤x≤b`)
   * @return {number} Return `P(X≤x)`.
   */
  pLessThanOrEqualTo(x: number): number {
    if (!Number.isInteger(x) || x < 1 || x > this.n) return NaN;

    return (x - this.a + 1) / this.n;
  }
}
