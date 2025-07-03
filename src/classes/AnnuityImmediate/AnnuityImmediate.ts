/**
 * Class representing an annuity-immediate.
 * Pays a fixed amount at the end of each period for `n` periods.
 */
export default class AnnuityImmediate {
  private readonly _i: number;
  private readonly _n: number;
  private readonly _PMT: number;
  private readonly _P: number;

  /**
   * @param i - The interest rate per period (as a decimal, must be ≥ 0).
   * @param n - The number of periods (must be a positive integer).
   * @param PMT - The payment amount per period (must be ≥ 0). Defaults to 1 if not provided.
   * @param P - The starting principal amount (must be ≥ 0). Defaults to 0 if not provided.
   */
  constructor(i: number, n: number, PMT: number = 1, P: number = 0) {
    if (i < 0) throw new Error("Interest rate must be non-negative.");
    if (!Number.isInteger(n) || n <= 0)
      throw new Error("Periods must be a positive integer.");
    if (PMT < 0) throw new Error("Payment must be non-negative.");
    if (P < 0) throw new Error("Principal must be non-negative.");

    this._i = i;
    this._n = n;
    this._PMT = PMT;
    this._P = P;
  }

  /** Present value of the annuity-immediate */
  public presentValue(): number {
    if (this._i === 0) return this._PMT * this._n + this._P;
    const v = 1 / (1 + this._i);
    const aImmediate = (1 - Math.pow(v, this._n)) / this._i;
    return this._PMT * aImmediate + this._P;
  }

  /** Future value of the annuity-immediate */
  public futureValue(): number {
    if (this._i === 0) return this._PMT * this._n + this._P;
    const sImmediate = (Math.pow(1 + this._i, this._n) - 1) / this._i;
    return this._PMT * sImmediate + this._P * Math.pow(1 + this._i, this._n);
  }

  /** Future values of the annuity-immediate */
  public futureValues(): number[] {
    const schedule: number[] = [];
    const i = this._i;
    const PMT = this._PMT;
    const P = this._P;

    for (let t = 0; t <= this._n; t++) {
      let value: number;
      if (i === 0) {
        value = PMT * t + P;
      } else {
        value = PMT * ((Math.pow(1 + i, t) - 1) / i) + P * Math.pow(1 + i, t);
      }
      schedule.push(value);
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
  get PMT(): number {
    return this._PMT;
  }

  /** Starting principal amount */
  get P(): number {
    return this._P;
  }
}
