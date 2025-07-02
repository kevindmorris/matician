/**
 * Class representing the Binomial distribution.
 */
export default class Binomial {
  private readonly _n: number;
  private readonly _p: number;

  /**
   * @param n - Number of trials (non-negative integer).
   * @param p - Probability of success (0 ≤ p ≤ 1).
   */
  constructor(n: number, p: number) {
    if (!Number.isInteger(n) || n < 0) {
      throw new Error("Number of trials n must be a non-negative integer.");
    }
    if (p < 0 || p > 1) {
      throw new Error("Probability p must be between 0 and 1.");
    }
    this._n = n;
    this._p = p;
  }

  /** Number of trials */
  public get n(): number {
    return this._n;
  }

  /** Probability of success */
  public get p(): number {
    return this._p;
  }

  /** Probability of failure */
  public get q(): number {
    return 1 - this._p;
  }

  /**
   * Probability mass function (PMF).
   * @param k - Number of successes.
   * @returns Probability of observing k successes.
   */
  public pmf(k: number): number {
    if (!Number.isInteger(k) || k < 0 || k > this.n) return 0;
    return (
      this.binomialCoefficient(this.n, k) *
      Math.pow(this.p, k) *
      Math.pow(this.q, this.n - k)
    );
  }

  /**
   * Cumulative distribution function (CDF).
   * @param k - Number of successes.
   * @returns Probability of observing ≤ k successes.
   */
  public cdf(k: number): number {
    if (k < 0) return 0;
    if (k >= this.n) return 1;
    let sum = 0;
    for (let i = 0; i <= Math.floor(k); i++) {
      sum += this.pmf(i);
    }
    return sum;
  }

  /** Expected number of successes */
  public mean(): number {
    return this.n * this.p;
  }

  /** Variance of the distribution */
  public variance(): number {
    return this.n * this.p * this.q;
  }

  /** Generate a sample from the binomial distribution */
  public sample(): number {
    let successes = 0;
    for (let i = 0; i < this.n; i++) {
      if (Math.random() < this.p) successes++;
    }
    return successes;
  }

  /** Compute binomial coefficient "n choose k" */
  private binomialCoefficient(n: number, k: number): number {
    if (k < 0 || k > n) return 0;
    let res = 1;
    for (let i = 1; i <= k; i++) {
      res *= (n - i + 1) / i;
    }
    return res;
  }
}
