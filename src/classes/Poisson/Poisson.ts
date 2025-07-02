/**
 * Class representing the Poisson distribution.
 * Models the number of events in a fixed interval given a constant rate λ.
 */
export default class Poisson {
  private readonly _lambda: number;

  /**
   * @param lambda - Expected number of events (λ > 0)
   */
  constructor(lambda: number) {
    if (lambda <= 0) {
      throw new Error("Lambda must be greater than 0.");
    }
    this._lambda = lambda;
  }

  /** Rate λ */
  get lambda(): number {
    return this._lambda;
  }

  /**
   * Probability mass function (PMF)
   * @param k - Number of occurrences (non-negative integer)
   * @returns P(X = k)
   */
  public pmf(k: number): number {
    if (!Number.isInteger(k) || k < 0) return 0;
    return (
      (Math.pow(this._lambda, k) * Math.exp(-this._lambda)) / this.factorial(k)
    );
  }

  /**
   * Cumulative distribution function (CDF)
   * @param k - Number of occurrences
   * @returns P(X ≤ k)
   */
  public cdf(k: number): number {
    if (k < 0) return 0;
    let sum = 0;
    const max = Math.floor(k);
    for (let i = 0; i <= max; i++) {
      sum += this.pmf(i);
    }
    return sum;
  }

  /**
   * Mean of the distribution
   */
  public mean(): number {
    return this._lambda;
  }

  /**
   * Variance of the distribution
   */
  public variance(): number {
    return this._lambda;
  }

  /**
   * Generate a random sample using Knuth’s algorithm
   */
  public sample(): number {
    const L = Math.exp(-this._lambda);
    let k = 0;
    let p = 1;
    do {
      k++;
      p *= Math.random();
    } while (p > L);
    return k - 1;
  }

  /**
   * Computes factorial of n
   */
  private factorial(n: number): number {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
  }
}
