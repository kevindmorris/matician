/**
 * Class representing the Log-Normal distribution.
 * If X ~ LogNormal(μ, σ²), then ln(X) ~ Normal(μ, σ²).
 */
export default class LogNormal {
  private readonly _mu: number;
  private readonly _sigma: number;

  /**
   * @param mu - Mean of the underlying normal distribution
   * @param sigma - Standard deviation (σ > 0) of the underlying normal distribution
   */
  constructor(mu: number, sigma: number) {
    if (sigma <= 0) {
      throw new Error("Sigma must be greater than 0.");
    }
    this._mu = mu;
    this._sigma = sigma;
  }

  /** Mean of the underlying normal distribution */
  get mu(): number {
    return this._mu;
  }

  /** Standard deviation of the underlying normal distribution */
  get sigma(): number {
    return this._sigma;
  }

  /**
   * Probability density function (PDF)
   * @param x - Value (x > 0)
   * @returns Probability density at x
   */
  public pdf(x: number): number {
    if (x <= 0) return 0;
    const denom = x * this._sigma * Math.sqrt(2 * Math.PI);
    const expPart = Math.exp(
      -Math.pow(Math.log(x) - this._mu, 2) / (2 * this._sigma ** 2)
    );
    return expPart / denom;
  }

  /**
   * Cumulative distribution function (CDF)
   * @param x - Value (x > 0)
   * @returns Cumulative probability up to x
   */
  public cdf(x: number): number {
    if (x <= 0) return 0;
    const z = (Math.log(x) - this._mu) / (this._sigma * Math.sqrt(2));
    return 0.5 * (1 + this.erf(z));
  }

  /**
   * Mean of the distribution
   * @returns E[X] = exp(μ + σ² / 2)
   */
  public mean(): number {
    return Math.exp(this._mu + this._sigma ** 2 / 2);
  }

  /**
   * Variance of the distribution
   * @returns Var[X] = [exp(σ²) - 1] * exp(2μ + σ²)
   */
  public variance(): number {
    const expSigmaSq = Math.exp(this._sigma ** 2);
    return (expSigmaSq - 1) * Math.exp(2 * this._mu + this._sigma ** 2);
  }

  /**
   * Generate a random sample using inverse transform sampling.
   */
  public sample(): number {
    const normal = this.boxMuller();
    return Math.exp(this._mu + this._sigma * normal);
  }

  /** Approximate the error function erf(x) using numerical approximation */
  private erf(x: number): number {
    // Abramowitz and Stegun approximation
    const a1 = 0.254829592,
      a2 = -0.284496736,
      a3 = 1.421413741,
      a4 = -1.453152027,
      a5 = 1.061405429,
      p = 0.3275911;

    const sign = x < 0 ? -1 : 1;
    const absX = Math.abs(x);
    const t = 1 / (1 + p * absX);
    const y =
      1 -
      ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) *
        t *
        Math.exp(-absX * absX);

    return sign * y;
  }

  /** Generate a standard normal using the Box-Muller transform */
  private boxMuller(): number {
    let u = 0,
      v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  }
}
