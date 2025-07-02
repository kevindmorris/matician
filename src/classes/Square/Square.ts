/**
 * Represents a square and provides geometric computations.
 */
export default class Square {
  private _side: number;

  /**
   * Creates a new Square instance.
   * @param side - The length of one side. Must be a positive number.
   */
  constructor(side: number) {
    if (side <= 0) {
      throw new Error("Side length must be a positive number.");
    }
    this._side = side;
  }

  /** Gets the side length of the square. */
  get side(): number {
    return this._side;
  }

  /** Gets the perimeter of the square. */
  get perimeter(): number {
    return this._side * 4;
  }

  /** Gets the area of the square. */
  get area(): number {
    return this._side ** 2;
  }

  /**
   * Creates a square from its area.
   * @param area - Must be a positive number.
   * @returns A new Square instance.
   */
  static fromArea(area: number): Square {
    if (area <= 0) {
      throw new Error("Area must be a positive number.");
    }
    return new Square(Math.sqrt(area));
  }
}
