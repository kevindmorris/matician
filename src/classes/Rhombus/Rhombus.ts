/**
 * Represents a rhombus and provides geometric computations.
 */
export default class Rhombus {
  private _side: number;
  private _height?: number;
  private _d1?: number;
  private _d2?: number;

  /**
   * Creates a new Rhombus instance.
   * @param side - Length of each side (must be positive).
   * @param height - Optional perpendicular height from base.
   * @param diagonals - Optional [d1, d2] lengths of diagonals.
   */
  constructor(side: number, height?: number, diagonals?: [number, number]) {
    if (side <= 0) throw new Error("Side must be a positive number.");
    if (height !== undefined && height <= 0) {
      throw new Error("Height must be positive if provided.");
    }
    if (diagonals && diagonals.some((d) => d <= 0)) {
      throw new Error("Diagonals must be positive numbers.");
    }

    this._side = side;
    this._height = height;
    if (diagonals) {
      [this._d1, this._d2] = diagonals;
    }
  }

  /** Gets the side length of the rhombus. */
  get side(): number {
    return this._side;
  }

  /** Gets the perimeter of the rhombus. */
  get perimeter(): number {
    return this._side * 4;
  }

  /**
   * Gets the area of the rhombus.
   * Uses base × height if height is available;
   * otherwise uses (d1 × d2) / 2 if diagonals are provided.
   */
  get area(): number {
    if (this._height !== undefined) {
      return this._side * this._height;
    }
    if (this._d1 !== undefined && this._d2 !== undefined) {
      return (this._d1 * this._d2) / 2;
    }
    throw new Error("Cannot calculate area: provide height or diagonals.");
  }

  /**
   * Scales the rhombus dimensions by a factor.
   * @param factor - Must be positive.
   */
  scale(factor: number): void {
    if (factor <= 0) throw new Error("Scale factor must be positive.");
    this._side *= factor;
    if (this._height !== undefined) this._height *= factor;
    if (this._d1 !== undefined) this._d1 *= factor;
    if (this._d2 !== undefined) this._d2 *= factor;
  }
}
