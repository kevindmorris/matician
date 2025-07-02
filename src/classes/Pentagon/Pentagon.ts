/**
 * Represents a regular pentagon (equal sides and angles).
 */
export default class Pentagon {
  private _side: number;

  /**
   * Creates a new regular pentagon.
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

  /**
   * Sets the side length of the pentagon.
   * @param value - Must be positive.
   */
  set side(value: number) {
    if (value <= 0) {
      throw new Error("Side length must be a positive number.");
    }
    this._side = value;
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

  /**
   * Scales the pentagon's side by a given factor.
   * @param factor - Must be a positive number.
   */
  scale(factor: number): void {
    if (factor <= 0) {
      throw new Error("Scale factor must be positive.");
    }
    this._side *= factor;
  }
}
