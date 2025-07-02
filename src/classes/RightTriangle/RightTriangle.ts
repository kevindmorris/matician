/**
 * Represents a right triangle and provides geometric computations.
 */
export default class RightTriangle {
  private _base: number;
  private _height: number;

  /**
   * Creates a right triangle given base and height (the two legs).
   * @param base - One leg of the triangle. Must be positive.
   * @param height - The other leg (perpendicular to base). Must be positive.
   */
  constructor(base: number, height: number) {
    if (base <= 0 || height <= 0) {
      throw new Error("Base and height must be positive numbers.");
    }
    this._base = base;
    this._height = height;
  }

  /** Gets the base (leg) of the triangle. */
  get base(): number {
    return this._base;
  }

  /** Gets the height (leg) of the triangle. */
  get height(): number {
    return this._height;
  }

  /** Gets the hypotenuse of the triangle. */
  get hypotenuse(): number {
    return Math.sqrt(this._base ** 2 + this._height ** 2);
  }

  /** Gets the area of the right triangle. */
  get area(): number {
    return 0.5 * this._base * this._height;
  }

  /** Gets the perimeter of the triangle (base + height + hypotenuse). */
  get perimeter(): number {
    return this._base + this._height + this.hypotenuse;
  }

  /**
   * Scales the triangle dimensions by a factor.
   * @param factor - Must be positive.
   */
  scale(factor: number): void {
    if (factor <= 0) {
      throw new Error("Scale factor must be positive.");
    }
    this._base *= factor;
    this._height *= factor;
  }
}
