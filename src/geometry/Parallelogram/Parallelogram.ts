/**
 * Represents a parallelogram and provides geometric computations.
 */
export default class Parallelogram {
  private _base: number;
  private _height: number;
  private _side: number;

  /**
   * Creates a new Parallelogram.
   * @param base - The base length (must be positive).
   * @param height - The perpendicular height (must be positive).
   * @param side - The length of the other side (must be positive).
   */
  constructor(base: number, height: number, side: number) {
    if (base <= 0 || height <= 0 || side <= 0) {
      throw new Error("Base, height, and side must be positive numbers.");
    }
    this._base = base;
    this._height = height;
    this._side = side;
  }

  /** Gets the base of the parallelogram. */
  get base(): number {
    return this._base;
  }

  /** Gets the height of the parallelogram. */
  get height(): number {
    return this._height;
  }

  /** Gets the side length of the parallelogram. */
  get side(): number {
    return this._side;
  }

  /** Gets the area of the parallelogram. */
  get area(): number {
    return this._base * this._height;
  }

  /** Gets the perimeter of the parallelogram. */
  get perimeter(): number {
    return 2 * (this._base + this._side);
  }

  /**
   * Scales the parallelogram's dimensions by a factor.
   * @param factor - Must be a positive number.
   */
  scale(factor: number): void {
    if (factor <= 0) {
      throw new Error("Scale factor must be positive.");
    }
    this._base *= factor;
    this._height *= factor;
    this._side *= factor;
  }
}
