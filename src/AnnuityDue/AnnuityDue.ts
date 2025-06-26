/**
 * Class representing an annuity-due.
 * Pays a fixed amount at the beginning of each period for `n` periods.
 */
export default class AnnuityDue {
  private readonly _i: number;
  private readonly _n: number;
  private readonly _P: number;

  /**
   * @param i - Interest rate per period (as a decimal, non-negative)
   * @param n - Number of periods (positive integer)
   * @param P - The payment amount per period (must be ≥ 0). Defaults to 1 if not provided.
   */
  constructor(i: number, n: number, P: number = 1) {
    if (i < 0) throw new Error("Interest rate must be non-negative.");
    if (!Number.isInteger(n) || n <= 0) {
      throw new Error("Number of periods must be a positive integer.");
    }
    if (P < 0) throw new Error("Payment must be non-negative.");

    this._i = i;
    this._n = n;
    this._P = P;
  }

  /**
   * Present value of the annuity-due.
   * Formula: PV = P * a-angle-n * (1 + i)
   */
  public presentValue(): number {
    if (this._i === 0) return this._P * this._n;
    const v = 1 / (1 + this._i);
    const aDue = ((1 - Math.pow(v, this._n)) / this._i) * (1 + this._i);
    return this._P * aDue;
  }

  /**
   * Future value of the annuity-due.
   * Formula: FV = P * s-angle-n * (1 + i)
   */
  public futureValue(): number {
    if (this._i === 0) return this._P * this._n;
    const factor = 1 + this._i;
    const sDue = ((Math.pow(factor, this._n) - 1) / this._i) * factor;
    return this._P * sDue;
  }

  /** Interest rate per period */
  get i(): number {
    return this._i;
  }

  /** Number of periods */
  get n(): number {
    return this._n;
  }

  /** Payment amount per period */
  get P(): number {
    return this._P;
  }
}
