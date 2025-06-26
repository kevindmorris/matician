/**
 * Class representing the Hypergeometric distribution.
 * Models the probability of drawing k successes without replacement from a population.
 */
export default class Hypergeometric {
  private N: number; // total population size
  private K: number; // total number of success states
  private n: number; // number of draws

  /**
   * @param {number} N - Population size
   * @param {number} K - Number of success states in the population
   * @param {number} n - Number of draws
   */
  constructor(N: number, K: number, n: number) {
    if (!Number.isInteger(N) || !Number.isInteger(K) || !Number.isInteger(n)) {
      throw new Error("N, K, and n must be integers.");
    }
    if (N <= 0 || K < 0 || n < 0 || K > N || n > N) {
      throw new Error("Invalid parameter values.");
    }
    this.N = N;
    this.K = K;
    this.n = n;
  }

  /**
   * Probability mass function (PMF).
   * @param {number} k - Number of observed successes
   * @returns {number} P(X = k)
   */
  public pmf(k: number): number {
    if (!Number.isInteger(k) || k < 0 || k > this.K || k > this.n) return 0;

    const minSuccess = Math.max(0, this.n - (this.N - this.K));
    const maxSuccess = Math.min(this.n, this.K);
    if (k < minSuccess || k > maxSuccess) return 0;

    const num = this.binomialCoefficient(this.K, k) * this.binomialCoefficient(this.N - this.K, this.n - k);
    const denom = this.binomialCoefficient(this.N, this.n);
    return num / denom;
  }

  /**
   * Cumulative distribution function (CDF).
   * @param {number} k - Maximum number of observed successes
   * @returns {number} P(X ≤ k)
   */
  public cdf(k: number): number {
    let sum = 0;
    for (let i = 0; i <= Math.floor(k); i++) {
      sum += this.pmf(i);
    }
    return sum;
  }

  /**
   * Compute "n choose k".
   * @param {number} n 
   * @param {number} k 
   * @returns {number}
   */
  private binomialCoefficient(n: number, k: number): number {
    if (k < 0 || k > n) return 0;
    if (k === 0 || k === n) return 1;
    let result = 1;
    for (let i = 1; i <= k; i++) {
      result *= (n - i + 1) / i;
    }
    return result;
  }
}
