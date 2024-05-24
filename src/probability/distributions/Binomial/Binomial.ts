import factorial from "../../factorial";

/** Class representing a binomial distribution. */
export default class Binomial {
  n: number;
  p: number;
  mean: number;
  variance: number;
  stdev: number;

  /**
   * Create a binomial distribution.
   * @param {number} n The number of trials.
   * @param {number} p The probability of a success.
   */
  constructor(n: number, p: number) {
    this.n = n;
    this.p = p;
    this.mean = n * p;
    this.variance = n * p * (1 - p);
    this.stdev = Math.sqrt(n * p * (1 - p));
  }

  /**
   * Get the probability of exactly `x` successes in `n` trials.
   * @param {number} x The number of successes.
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
