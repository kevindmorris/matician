/**
 * Represents a trapezoid and provides geometric computations.
 * Assumes a general (non-isosceles) trapezoid.
 */
export default class Trapezoid {
  private _base1: number;
  private _base2: number;
  private _side1: number;
  private _side2: number;
  private _height: number;

  /**
   * Creates a new Trapezoid.
   * @param base1 - First base (must be positive).
   * @param base2 - Second base (must be positive).
   * @param side1 - First non-parallel side (must be positive).
   * @param side2 - Second non-parallel side (must be positive).
   * @param height - Height between the bases (must be positive).
   */
  constructor(
    base1: number,
    base2: number,
    side1: number,
    side2: number,
    height: number
  ) {
    if ([base1, base2, side1, side2, height].some((n) => n <= 0)) {
      throw new Error("All dimensions must be positive numbers.");
    }
    this._base1 = base1;
    this._base2 = base2;
    this._side1 = side1;
    this._side2 = side2;
    this._height = height;
  }

  /** Gets the area of the trapezoid. */
  get area(): number {
    return 0.5 * (this._base1 + this._base2) * this._height;
  }

  /** Gets the perimeter of the trapezoid. */
  get perimeter(): number {
    return this._base1 + this._base2 + this._side1 + this._side2;
  }

  /** Gets base1. */
  get base1(): number {
    return this._base1;
  }

  /** Gets base2. */
  get base2(): number {
    return this._base2;
  }

  /** Gets side1. */
  get side1(): number {
    return this._side1;
  }

  /** Gets side2. */
  get side2(): number {
    return this._side2;
  }

  /** Gets height. */
  get height(): number {
    return this._height;
  }

  /**
   * Scales the trapezoid dimensions by a given factor.
   * @param factor - Must be positive.
   */
  scale(factor: number): void {
    if (factor <= 0) throw new Error("Scale factor must be positive.");
    this._base1 *= factor;
    this._base2 *= factor;
    this._side1 *= factor;
    this._side2 *= factor;
    this._height *= factor;
  }
}
