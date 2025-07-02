/**
 * Class representing the Normal (Gaussian) distribution.
 */
export default class Normal {
  private mean: number;
  private stddev: number;

  /**
   * @param {number} mean - The mean (μ) of the distribution.
   * @param {number} stddev - The standard deviation (σ) of the distribution.
   */
  constructor(mean: number = 0, stddev: number = 1) {
    this.mean = mean;
    this.stddev = stddev;
  }

  /**
   * Probability density function (PDF) of the normal distribution.
   * @param {number} x - The input value.
   * @returns {number} The value of the PDF at x.
   */
  public pdf(x: number): number {
    const coefficient = 1 / (this.stddev * Math.sqrt(2 * Math.PI));
    const exponent = -((x - this.mean) ** 2) / (2 * this.stddev ** 2);
    return coefficient * Math.exp(exponent);
  }

  /**
   * Cumulative distribution function (CDF) of the normal distribution.
   * @param {number} x - The input value.
   * @returns {number} The probability that a value is ≤ x.
   */
  public cdf(x: number): number {
    const z = (x - this.mean) / (this.stddev * Math.sqrt(2));
    return 0.5 * (1 + this.erf(z));
  }

  /**
   * Approximation of the error function (erf) used in computing the CDF.
   * @param {number} x - The input value.
   * @returns {number} Approximation to the error function at x.
   */
  private erf(x: number): number {
    // Numerical approximation (Abramowitz and Stegun formula 7.1.26)
    const a1 = 0.254829592;
    const a2 = -0.284496736;
    const a3 = 1.421413741;
    const a4 = -1.453152027;
    const a5 = 1.061405429;
    const p = 0.3275911;

    const sign = x < 0 ? -1 : 1;
    const absX = Math.abs(x);

    const t = 1.0 / (1.0 + p * absX);
    const y =
      1.0 -
      ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) *
        t *
        Math.exp(-absX * absX);

    return sign * y;
  }
}
