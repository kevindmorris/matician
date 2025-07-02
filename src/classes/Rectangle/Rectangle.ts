/**
 * Represents a rectangle and provides geometric computations.
 */
export default class Rectangle {
  private _width: number;
  private _height: number;

  /**
   * @param width - The width of the rectangle. Must be positive.
   * @param height - The height of the rectangle. Must be positive.
   */
  constructor(width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error("Width and height must be positive numbers.");
    }
    this._width = width;
    this._height = height;
  }

  /** Gets the width of the rectangle. */
  get width(): number {
    return this._width;
  }

  /** Gets the height of the rectangle. */
  get height(): number {
    return this._height;
  }

  /** Gets the area of the rectangle. */
  get area(): number {
    return this._width * this._height;
  }

  /** Gets the perimeter of the rectangle. */
  get perimeter(): number {
    return 2 * (this._width + this._height);
  }
}
