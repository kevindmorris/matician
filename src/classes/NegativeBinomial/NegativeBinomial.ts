/**
 * Class representing the Negative Binomial distribution.
 * Models the number of failures before `r` successes in Bernoulli trials.
 */
export default class NegativeBinomial {
  private readonly _r: number;
  private readonly _p: number;

  /**
   * @param r - Number of successes (r > 0, integer)
   * @param p - Probability of success in each trial (0 < p ≤ 1)
   */
  constructor(r: number, p: number) {
    if (!Number.isInteger(r) || r <= 0) {
      throw new Error("r must be a positive integer.");
    }
    if (p <= 0 || p > 1) {
      throw new Error("p must be in (0, 1].");
    }
    this._r = r;
    this._p = p;
  }

  /** Number of successes */
  get r(): number {
    return this._r;
  }

  /** Probability of success */
  get p(): number {
    return this._p;
  }

  /** Probability of failure */
  get q(): number {
    return 1 - this._p;
  }

  /**
   * Probability mass function (PMF).
   * @param k - Number of failures before r successes (k ≥ 0)
   * @returns P(X = k)
   */
  public pmf(k: number): number {
    if (!Number.isInteger(k) || k < 0) return 0;
    return (
      this.binomialCoefficient(k + this._r - 1, k) *
      Math.pow(this._p, this._r) *
      Math.pow(1 - this._p, k)
    );
  }

  /**
   * Cumulative distribution function (CDF).
   * @param k - Number of failures
   * @returns P(X ≤ k)
   */
  public cdf(k: number): number {
    if (k < 0) return 0;
    let sum = 0;
    for (let x = 0; x <= k; x++) {
      sum += this.pmf(x);
    }
    return sum;
  }

  /**
   * Mean of the distribution.
   * @returns r * (1 - p) / p
   */
  public mean(): number {
    return (this._r * (1 - this._p)) / this._p;
  }

  /**
   * Variance of the distribution.
   * @returns r * (1 - p) / p²
   */
  public variance(): number {
    return (this._r * (1 - this._p)) / (this._p * this._p);
  }

  /**
   * Generate a random sample using the method of summing geometric variables.
   */
  public sample(): number {
    let failures = 0;
    for (let i = 0; i < this._r; i++) {
      let count = 0;
      while (Math.random() > this._p) {
        count++;
      }
      failures += count;
    }
    return failures;
  }

  /**
   * Compute binomial coefficient (n choose k).
   */
  private binomialCoefficient(n: number, k: number): number {
    if (k > n) return 0;
    if (k === 0 || k === n) return 1;

    k = Math.min(k, n - k); // Take advantage of symmetry
    let result = 1;
    for (let i = 1; i <= k; i++) {
      result *= n - (k - i);
      result /= i;
    }
    return result;
  }
}
