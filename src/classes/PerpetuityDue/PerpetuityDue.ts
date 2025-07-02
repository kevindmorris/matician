/**
 * Class representing a perpetuity-due — a stream of fixed payments made at the beginning of each period indefinitely.
 *
 * The present value (PV) of a perpetuity-due is calculated as:
 *    PV = P / i × (1 + i) = P × (1 + i) / i
 *
 * Where:
 * - P is the periodic payment
 * - i is the interest rate per period (as a decimal)
 */
export default class PerpetuityDue {
  private _payment: number;
  private _interestRate: number;

  /**
   * @param payment - The fixed payment amount per period. Must be positive.
   * @param interestRate - The interest rate per period (decimal form, e.g. 0.05 for 5%). Must be positive.
   */
  constructor(payment: number, interestRate: number) {
    if (payment <= 0) throw new Error("Payment must be a positive number.");
    if (interestRate <= 0)
      throw new Error("Interest rate must be a positive number.");
    this._payment = payment;
    this._interestRate = interestRate;
  }

  /** Gets the current payment amount. */
  get payment(): number {
    return this._payment;
  }

  /** Gets the current interest rate per period. */
  get interestRate(): number {
    return this._interestRate;
  }

  /**
   * Calculates the present value of the perpetuity-due.
   * @returns The present value, using PV = P × (1 + i) / i
   */
  presentValue(): number {
    return (this._payment * (1 + this._interestRate)) / this._interestRate;
  }
}
