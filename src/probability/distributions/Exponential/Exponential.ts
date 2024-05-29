/**
 * **Exponential distribution**: A *continuous* probability
 * distribution that describes the time between events
 * in a Poisson process, with constant rate `λ`.
 */
export default class Exponential {
  /** The rate parameter. */
  lambda: number;
  /** The mean of the distribution. */
  mean: number;
  /** The variance of the distribution. */
  variance: number;
  /** The standard deviation of the distribution. */
  stdev: number;

  /**
   * Create an expoential distribution.
   * @param {number} lambda The rate parameter.
   */
  constructor(lambda: number) {
    if (lambda <= 0) throw new Error("Invalid parameters");

    this.lambda = lambda;
    this.mean = 1 / lambda;
    this.variance = Math.pow(lambda, -2);
    this.stdev = 1 / lambda;
  }

  /**
   * Get the probability that the distance to an event is less than or equal to `x`.
   * @param {number} x A value. (`x≥0`)
   * @return {number} Return `P(X≤x)`.
   */
  pLessThanOrEqualTo(x: number): number {
    if (x < 0) return NaN;

    return 1 - Math.exp(-this.lambda * x);
  }
}
