/**
 * Class representing the log-normal distribution.
 * A variable X is log-normally distributed if ln(X) is normally distributed.
 */
export default class LogNormal {
  private mu: number;
  private sigma: number;

  /**
   * @param {number} mu - Mean of the log of the variable
   * @param {number} sigma - Standard deviation of the log (must be > 0)
   */
  constructor(mu: number, sigma: number) {
    if (sigma <= 0) {
      throw new Error("sigma must be > 0.");
    }
    this.mu = mu;
    this.sigma = sigma;
  }

  /**
   * Probability density function (PDF).
   * @param {number} x - Value at which to evaluate the PDF (must be > 0)
   * @returns {number} The probability density at x
   */
  public pdf(x: number): number {
    if (x <= 0) return 0;
    const denom = x * this.sigma * Math.sqrt(2 * Math.PI);
    const exponent = -Math.pow(Math.log(x) - this.mu, 2) / (2 * this.sigma * this.sigma);
    return (1 / denom) * Math.exp(exponent);
  }

  /**
   * Cumulative distribution function (CDF).
   * @param {number} x - Value at which to evaluate the CDF
   * @returns {number} The cumulative probability up to x
   */
  public cdf(x: number): number {
    if (x <= 0) return 0;
    const z = (Math.log(x) - this.mu) / (this.sigma * Math.sqrt(2));
    return 0.5 * (1 + this.erf(z));
  }

  /**
   * Approximate the error function (erf) using a numerical approximation.
   * @param {number} z
   * @returns {number}
   */
  private erf(z: number): number {
    // Abramowitz and Stegun formula 7.1.26
    const t = 1 / (1 + 0.3275911 * Math.abs(z));
    const a1 = 0.254829592,
          a2 = -0.284496736,
          a3 = 1.421413741,
          a4 = -1.453152027,
          a5 = 1.061405429;

    const poly = ((((a5 * t + a4) * t + a3) * t + a2) * t + a1);
    const erf = 1 - poly * Math.exp(-z * z);

    return z >= 0 ? erf : -erf;
  }
}
