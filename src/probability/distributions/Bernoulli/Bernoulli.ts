/**
 * **Bernoulli distribution**: A *discrete* probability
 * distribution for a random variable that takes the value of
 * 1 with probability `p` (success) and the value 0 with
 * probability `1-p` (failure).
 */
export default class Bernoulli {
  /** The proability of a success. */
  p: number;
  /** The proability of a failure. */
  q: number;
  /** The mean of the distribution. */
  mean: number;
  /** The variance of the distribution. */
  variance: number;
  /** The standard deviation of the distribution. */
  stdev: number;

  /**
   * Create a Bernoulli distribution.
   * @param {number} p The probability of a success.
   */
  constructor(p: number) {
    if (p < 0 || p > 1) throw new Error("Invalid parameters");

    this.p = p;
    this.q = 1 - p;
    this.mean = p;
    this.variance = p * (1 - p);
    this.stdev = Math.sqrt(p * (1 - p));
  }

  /**
   * Get the probability of a success or failure.
   * @param {number} x The value. (0: failure, 1: success)
   * @return {number} Return `P(X=x)`.
   */
  pEqualTo(x: number): number {
    if (!Number.isInteger(x) || x < 0 || x > 1) return NaN;

    if (x === 0) return 1 - this.p;
    return this.p;
  }

  /**
   * Get the probability of a value less than or equal to `x`.
   * @param {number} x The value. (0: failure, 1: success)
   * @return {number} Return `P(X<=x)`.
   */
  pLessThanOrEqualTo(x: number): number {
    if (!Number.isInteger(x) || x < 0 || x > 1) return NaN;

    if (x < 1) return 1 - this.p;
    return 1;
  }

  /**
   * Get the probability of a value greater than or equal to `x`.
   * @param {number} x The value. (0: failure, 1: success)
   * @return {number} Return `P(X>=x)`.
   */
  pGreaterThanOrEqualTo(x: number): number {
    if (!Number.isInteger(x) || x < 0 || x > 1) return NaN;

    if (x > 0) return this.p;
    return 1;
  }
}
