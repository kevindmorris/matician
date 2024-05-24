/** A class representing an annuity. */
export default class Annuity {
  p: number;
  pmt: number;
  i: number;
  n: number;
  options?: { type: "immediate" | "due" };

  /**
   * Create an annuity.
   * @param {number} p The principal.
   * @param {number} pmt The contribution per period.
   * @param {number} i The interest rate per period.
   * @param {number} n The number of periods.
   * @param {Object} [options] The options object.
   * @param {Object} [options.type=immediate] The type of annuity.
   */
  constructor(
    p: number,
    pmt: number,
    i: number,
    n: number,
    options: { type: "immediate" | "due" } = { type: "immediate" }
  ) {
    this.p = p;
    this.pmt = pmt;
    this.i = i;
    this.n = n;
    this.options = options;
  }

  /**
   * Calculate the present value of the annuity.
   * @return {number} Return the present value.
   */
  presentValue(): number {
    let principal = this.p;
    let payments = (this.pmt * (1 - Math.pow(1 + this.i, -this.n))) / this.i;

    if (this.options?.type === "due") payments = (1 + this.i) * payments;

    return principal + payments;
  }

  /**
   * Calculate the future value of the annuity.
   * @return {number} Return the future value.
   */
  futureValue(): number {
    let principal = this.p * Math.pow(1 + this.i, this.n);
    let payments = (this.pmt * (Math.pow(1 + this.i, this.n) - 1)) / this.i;

    if (this.options?.type === "due") payments = (1 + this.i) * payments;

    return principal + payments;
  }
}
