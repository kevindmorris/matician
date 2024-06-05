import factorial from "../../combinatorics/factorial";

/**
 * **Binomial distribution**: A *discrete* probability
 * distribution that describes the number of successes
 * in a fixed number of Bernoulli trials, each with the
 * same probability of success `p`.
 */
export default class Binomial {
  /** The number of trials. */
  n: number;
  /** The probability of a success. */
  p: number;
  /** The probability of a failure. */
  q: number;
  /** The mean of the distribution. */
  mean: number;
  /** The variance of the distribution. */
  variance: number;
  /** The standard deviation of the distribution. */
  stdev: number;

  /**
   * Create a Binomial distribution.
   * @param {number} n The number of trials.
   * @param {number} p The probability of a success.
   */
  constructor(n: number, p: number) {
    if (!Number.isInteger(n) || n < 1 || p < 0 || p > 1)
      throw new Error("Invalid parameters");

    this.n = n;
    this.p = p;
    this.q = 1 - p;
    this.mean = n * p;
    this.variance = n * p * (1 - p);
    this.stdev = Math.sqrt(n * p * (1 - p));
  }

  /**
   * Get the probability of exactly `x` successes in `n` trials.
   * @param {number} x The number of successes. (`x` must be an integer and `0≤x≤n`)
   * @return {number} Return `P(X=x)`.
   */
  pEqualTo(x: number): number {
    if (!Number.isInteger(x) || x < 0 || x > this.n) return NaN;

    return (
      (factorial(this.n) *
        Math.pow(this.p, x) *
        Math.pow(1 - this.p, this.n - x)) /
      (factorial(x) * factorial(this.n - x))
    );
  }
}
