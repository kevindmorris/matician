/**
 * Class representing the Poisson distribution.
 * Models the number of events in a fixed interval of time or space.
 */
export default class Poisson {
  private lambda: number;

  /**
   * Create a Poisson distribution.
   * @param {number} lambda - The average number of events (λ > 0).
   */
  constructor(lambda: number) {
    if (lambda <= 0) {
      throw new Error("Lambda must be a positive number.");
    }
    this.lambda = lambda;
  }

  /**
   * Probability mass function (PMF).
   * @param {number} k - Number of events (non-negative integer).
   * @returns {number} Probability of observing exactly k events.
   */
  public pmf(k: number): number {
    if (!Number.isInteger(k) || k < 0) return 0;
    return (
      (Math.pow(this.lambda, k) * Math.exp(-this.lambda)) / this.factorial(k)
    );
  }

  /**
   * Cumulative distribution function (CDF).
   * @param {number} k - Maximum number of events.
   * @returns {number} Probability of observing ≤ k events.
   */
  public cdf(k: number): number {
    if (k < 0) return 0;
    let sum = 0;
    for (let i = 0; i <= Math.floor(k); i++) {
      sum += this.pmf(i);
    }
    return sum;
  }

  /**
   * Compute factorial of a non-negative integer.
   * @param {number} n
   * @returns {number}
   */
  private factorial(n: number): number {
    if (n === 0 || n === 1) return 1;
    let res = 1;
    for (let i = 2; i <= n; i++) {
      res *= i;
    }
    return res;
  }
}
