import factorial from "../../factorial";

/** Class representing a poisson distribution. */
export default class Poisson {
  lambda: number;
  mean: number;
  variance: number;
  stdev: number;

  /**
   * Create a poisson distribution.
   * @param {number} lambda The mean rate of success in the time interval.
   */
  constructor(lambda: number) {
    this.lambda = lambda;
    this.mean = lambda;
    this.variance = lambda;
    this.stdev = Math.sqrt(lambda);
  }

  /**
   * Get the probability of exactly `x` successes in the time interval.
   * @param {number} x The number of trials.
   * @return {number} Return `P(X=x)`.
   */
  pEqualTo(x: number): number {
    if (!Number.isInteger(x) || x < 0) return NaN;

    return (Math.exp(-this.lambda) * Math.pow(this.lambda, x)) / factorial(x);
  }
}
