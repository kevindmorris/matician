import factorial from "../../combinatorics/factorial";

/**
 * **Poisson distribution**: A *discrete* probability
 * distribution that describes the number of events
 * occuring within a fixed interval of time or space
 * given these events occur with a constant mean rate
 * `λ` and independently of the time since the last
 * event.
 */
export default class Poisson {
  /** The mean number of events in a given interval of time or space. */
  lambda: number;
  /** The mean of the distribution. */
  mean: number;
  /** The variance of the distribution. */
  variance: number;
  /** The standard deviation of the distribution. */
  stdev: number;

  /**
   * Create a Poisson distribution.
   * @param {number} lambda The mean number of events in a given interval of time or space.
   */
  constructor(lambda: number) {
    if (lambda <= 0) throw new Error("Invalid parameters");

    this.lambda = lambda;
    this.mean = lambda;
    this.variance = lambda;
    this.stdev = Math.sqrt(lambda);
  }

  /**
   * Get the probability of exactly `x` successes in a given interval of time or space.
   * @param {number} x The number of successes. (`x` must be an integer and `x≥0`)
   * @return {number} Return `P(X=x)`.
   */
  pEqualTo(x: number): number {
    if (!Number.isInteger(x) || x < 0) return NaN;

    return (Math.exp(-this.lambda) * Math.pow(this.lambda, x)) / factorial(x);
  }
}
