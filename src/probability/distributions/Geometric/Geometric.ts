/** Class representing a geometric distribution. */
export default class Geometric {
  p: number;
  mean: number;
  variance: number;
  stdev: number;

  /**
   * Create a geometric distribution.
   * @param {number} p The probability of a success.
   */
  constructor(p: number) {
    this.p = p;
    this.mean = 1 / p;
    this.variance = 1 / p / Math.pow(p, 2);
    this.stdev = Math.sqrt(1 / p / Math.pow(p, 2));
  }

  /**
   * Get the probability of a success on the `x`th trial.
   * @param {number} x The number of trials.
   * @return {number} Return `P(X=x)`.
   */
  pEqualTo(x: number): number {
    if (!Number.isInteger(x) || x < 1) return NaN;

    return this.p * Math.pow(1 - this.p, x - 1);
  }
}
