/**
 * Class representing an annuity-immediate.
 * Pays a fixed amount at the end of each period for `n` periods.
 */
export default class AnnuityImmediate {
  private readonly _i: number;
  private readonly _n: number;
  private readonly _P: number;

  /**
   * @param i - The interest rate per period (as a decimal, must be ≥ 0).
   * @param n - The number of periods (must be a positive integer).
   * @param P - The payment amount per period (must be ≥ 0). Defaults to 1 if not provided.
   */
  constructor(i: number, n: number, P: number = 1) {
    if (i < 0) throw new Error("Interest rate must be non-negative.");
    if (!Number.isInteger(n) || n <= 0)
      throw new Error("Periods must be a positive integer.");
    if (P < 0) throw new Error("Payment must be non-negative.");

    this._i = i;
    this._n = n;
    this._P = P;
  }

  /** Present value of the annuity-immediate */
  public presentValue(): number {
    if (this._i === 0) return this._P * this._n;
    const v = 1 / (1 + this._i);
    const aImmediate = (1 - Math.pow(v, this._n)) / this._i;
    return this._P * aImmediate;
  }

  /** Future value of the annuity-immediate */
  public futureValue(): number {
    if (this._i === 0) return this._P * this._n;
    const sImmediate = (Math.pow(1 + this._i, this._n) - 1) / this._i;
    return this._P * sImmediate;
  }

  /** Future values of the annuity-immediate */
  public futureValues(): number[] {
    const schedule: number[] = [];
    const i = this._i;
    const P = this._P;

    for (let t = 0; t <= this._n; t++) {
      if (i === 0) {
        schedule.push(P * t);
      } else {
        const value = P * ((Math.pow(1 + i, t) - 1) / i);
        schedule.push(value);
      }
    }

    return schedule;
  }

  /** Interest rate */
  get i(): number {
    return this._i;
  }

  /** Number of periods */
  get n(): number {
    return this._n;
  }

  /** Payment per period */
  get P(): number {
    return this._P;
  }
}
