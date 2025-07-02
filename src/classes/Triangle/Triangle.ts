/**
 * Represents a triangle and provides geometric computations.
 */
export default class Triangle {
  private _base: number;
  private _height: number;
  private _sideA?: number;
  private _sideB?: number;
  private _sideC?: number;

  /**
   * Creates a new Triangle instance.
   * @param base - The base of the triangle. Must be positive.
   * @param height - The height of the triangle. Must be positive.
   * @param sides - Optional full side lengths [a, b, c] for perimeter calculation.
   */
  constructor(base: number, height: number, sides?: [number, number, number]) {
    if (base <= 0 || height <= 0) {
      throw new Error("Base and height must be positive numbers.");
    }

    if (sides && sides.some((side) => side <= 0)) {
      throw new Error("All side lengths must be positive.");
    }

    this._base = base;
    this._height = height;

    if (sides) {
      [this._sideA, this._sideB, this._sideC] = sides;
    }
  }

  /** Gets the base of the triangle. */
  get base(): number {
    return this._base;
  }

  /** Gets the height of the triangle. */
  get height(): number {
    return this._height;
  }

  /** Gets the area of the triangle. */
  get area(): number {
    return 0.5 * this._base * this._height;
  }

  /**
   * Gets the perimeter of the triangle if all three sides are provided.
   * @throws If sides are not fully defined.
   */
  get perimeter(): number {
    if (
      this._sideA === undefined ||
      this._sideB === undefined ||
      this._sideC === undefined
    ) {
      throw new Error(
        "Cannot compute perimeter without all three side lengths."
      );
    }
    return this._sideA + this._sideB + this._sideC;
  }

  /**
   * Scales the triangle's base and height (and sides if provided).
   * @param factor - Must be positive.
   */
  scale(factor: number): void {
    if (factor <= 0) {
      throw new Error("Scale factor must be positive.");
    }

    this._base *= factor;
    this._height *= factor;

    if (this._sideA !== undefined) this._sideA *= factor;
    if (this._sideB !== undefined) this._sideB *= factor;
    if (this._sideC !== undefined) this._sideC *= factor;
  }
}
