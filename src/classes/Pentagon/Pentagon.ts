/**
 * Class representing a regular pentagon.
 */
export default class Pentagon {
  private _side: number;

  /**
   * @param side - Length of each side. Must be a positive number.
   */
  constructor(side: number) {
    if (side <= 0) {
      throw new Error("Side length must be a positive number.");
    }
    this._side = side;
  }

  /** Gets the side length of the pentagon. */
  get side(): number {
    return this._side;
  }

  /** Gets the perimeter of the pentagon. */
  get perimeter(): number {
    return this._side * 5;
  }

  /** Gets the area of the regular pentagon using the standard formula. */
  get area(): number {
    const a = this._side;
    return (5 * a ** 2) / (4 * Math.tan(Math.PI / 5));
  }
}
