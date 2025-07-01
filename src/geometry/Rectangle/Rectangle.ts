/**
 * Represents a rectangle and provides geometric computations.
 */
export default class Rectangle {
  private _width: number;
  private _height: number;

  /**
   * Creates a new Rectangle instance.
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

  /** Sets the width of the rectangle. */
  set width(value: number) {
    if (value <= 0) {
      throw new Error("Width must be a positive number.");
    }
    this._width = value;
  }

  /** Gets the height of the rectangle. */
  get height(): number {
    return this._height;
  }

  /** Sets the height of the rectangle. */
  set height(value: number) {
    if (value <= 0) {
      throw new Error("Height must be a positive number.");
    }
    this._height = value;
  }

  /** Gets the area of the rectangle. */
  get area(): number {
    return this._width * this._height;
  }

  /** Gets the perimeter of the rectangle. */
  get perimeter(): number {
    return 2 * (this._width + this._height);
  }

  /**
   * Scales the rectangle's dimensions by a factor.
   * @param factor - Must be positive.
   */
  scale(factor: number): void {
    if (factor <= 0) {
      throw new Error("Scale factor must be positive.");
    }
    this._width *= factor;
    this._height *= factor;
  }

  /**
   * Creates a rectangle from area and aspect ratio.
   * @param area - The total area (must be positive).
   * @param aspectRatio - The width-to-height ratio (must be positive).
   * @returns A new Rectangle instance.
   */
  static fromAreaAndAspect(area: number, aspectRatio: number): Rectangle {
    if (area <= 0 || aspectRatio <= 0) {
      throw new Error("Area and aspect ratio must be positive.");
    }
    const height = Math.sqrt(area / aspectRatio);
    const width = area / height;
    return new Rectangle(width, height);
  }
}
