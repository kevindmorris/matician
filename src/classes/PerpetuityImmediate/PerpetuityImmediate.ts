/**
 * Class representing a perpetuity-immediate — a stream of fixed payments made at the end of each period indefinitely.
 */
export default class PerpetuityImmediate {
  private _payment: number;
  private _interestRate: number;

  /**
   * @param payment - The fixed payment made each period. Must be positive.
   * @param interestRate - The interest rate per period (as a decimal, e.g., 0.05 for 5%). Must be positive.
   */
  constructor(payment: number, interestRate: number) {
    if (payment <= 0) {
      throw new Error("Payment must be a positive number.");
    }
    if (interestRate <= 0) {
      throw new Error("Interest rate must be a positive number.");
    }

    this._payment = payment;
    this._interestRate = interestRate;
  }

  /** Gets the payment amount per period. */
  get payment(): number {
    return this._payment;
  }

  /** Gets the interest rate per period (as a decimal). */
  get interestRate(): number {
    return this._interestRate;
  }

  /**
   * Calculates the present value of the perpetuity-immediate.
   * @returns The present value (PV) = payment / interestRate
   */
  presentValue(): number {
    return this._payment / this._interestRate;
  }
}
