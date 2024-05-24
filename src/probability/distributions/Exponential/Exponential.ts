/** Class representing an exponential distribution. */
export default class Exponential {
  lambda: number;
  mean: number;
  variance: number;
  stdev: number;

  /**
   * Create an expoential distribution.
   * @param {number} lambda The distribution rate.
   */
  constructor(lambda: number) {
    this.lambda = lambda;
    this.mean = 1 / lambda;
    this.variance = Math.pow(lambda, -2);
    this.stdev = 1 / lambda;
  }

  /**
   * Get the probability that the distance to an event is less than `x`.
   * @param {number} x A value.
   * @return {number} Return `P(X<x)`.
   */
  pLessThan(x: number): number {
    if (x < 0) return NaN;

    return 1 - Math.exp(-this.lambda * x);
  }

  /**
   * Get the probability that the distance to an event is greater than `x`.
   * @param {number} x A value.
   * @return {number} Return `P(X>x)`.
   */
  pGreaterThan(x: number): number {
    if (x < 0) return NaN;

    return Math.exp(-this.lambda * x);
  }
}
