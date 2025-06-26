/**
 * Class representing the Gamma distribution.
 * Generalization of the exponential distribution.
 */
export default class Gamma {
  private shape: number; // k
  private rate: number;  // θ⁻¹ = λ

  /**
   * @param {number} shape - Shape parameter (k > 0)
   * @param {number} rate - Rate parameter (λ > 0)
   */
  constructor(shape: number, rate: number) {
    if (shape <= 0 || rate <= 0) {
      throw new Error("Shape and rate must be greater than 0.");
    }
    this.shape = shape;
    this.rate = rate;
  }

  /**
   * Probability density function (PDF).
   * @param {number} x - Value to evaluate (x ≥ 0)
   * @returns {number} PDF at x
   */
  public pdf(x: number): number {
    if (x < 0) return 0;
    return Math.pow(this.rate, this.shape) *
           Math.pow(x, this.shape - 1) *
           Math.exp(-this.rate * x) /
           this.gamma(this.shape);
  }

  /**
   * Cumulative distribution function (CDF).
   * @param {number} x - Value to evaluate (x ≥ 0)
   * @returns {number} CDF at x
   */
  public cdf(x: number): number {
    if (x < 0) return 0;
    return this.lowerIncompleteGamma(this.shape, this.rate * x) /
           this.gamma(this.shape);
  }

  /**
   * Approximate the gamma function Γ(n) for n > 0 using Lanczos approximation.
   * @param {number} z
   * @returns {number}
   */
  private gamma(z: number): number {
    const g = 7;
    const p = [
      0.99999999999980993, 676.5203681218851,   -1259.1392167224028,
      771.32342877765313,  -176.61502916214059, 12.507343278686905,
     -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7
    ];
    if (z < 0.5) {
      return Math.PI / (Math.sin(Math.PI * z) * this.gamma(1 - z));
    }
    z -= 1;
    let x = p[0];
    for (let i = 1; i < g + 2; i++) {
      x += p[i] / (z + i);
    }
    const t = z + g + 0.5;
    return Math.sqrt(2 * Math.PI) * Math.pow(t, z + 0.5) * Math.exp(-t) * x;
  }

  /**
   * Lower incomplete gamma function approximation using series expansion.
   * Only valid for small x.
   * @param {number} s - Shape
   * @param {number} x - x value
   * @returns {number}
   */
  private lowerIncompleteGamma(s: number, x: number): number {
    let sum = 0;
    let term = 1 / s;
    let k = 0;
    while (term > 1e-10) {
      sum += term;
      k++;
      term *= x / (s + k);
    }
    return Math.pow(x, s) * Math.exp(-x) * sum;
  }
}
