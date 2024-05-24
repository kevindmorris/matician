/** Class representing a uniform distribution. */
export default class Uniform {
  a: number;
  b: number;
  mean: number;
  variance: number;
  stdev: number;

  /**
   * Create a uniform distribution.
   * @param {number} a The minimum value.
   * @param {number} b The maximum value.
   */
  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
    this.mean = (a + b) / 2;
    this.variance = Math.pow(b - a, 2) / 12;
    this.stdev = Math.sqrt(Math.pow(b - a, 2) / 12);
  }

  /**
   * Get the probability of a value less than `x`.
   * @param {number} x A value.
   * @return {number} Return `P(X<x)`.
   */
  pLessThan(x: number): number {
    if (x < this.a) return 0;
    if (x > this.b) return 1;

    return (x - this.a) / (this.b - this.a);
  }
}
