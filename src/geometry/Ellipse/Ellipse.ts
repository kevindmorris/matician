/**
 * Represents an ellipse and provides geometric computations.
 */
export default class Ellipse {
  private _a: number; // semi-major axis
  private _b: number; // semi-minor axis

  /**
   * Creates a new Ellipse instance.
   * @param a - Semi-major axis (must be positive).
   * @param b - Semi-minor axis (must be positive).
   */
  constructor(a: number, b: number) {
    if (a <= 0 || b <= 0) {
      throw new Error("Semi-major and semi-minor axes must be positive.");
    }
    this._a = a;
    this._b = b;
  }

  /** Gets the semi-major axis. */
  get a(): number {
    return this._a;
  }

  /** Gets the semi-minor axis. */
  get b(): number {
    return this._b;
  }

  /** Gets the area of the ellipse. */
  get area(): number {
    return Math.PI * this._a * this._b;
  }

  /**
   * Gets the approximate circumference using Ramanujan's first approximation.
   */
  get circumference(): number {
    const a = this._a;
    const b = this._b;
    return Math.PI * (3 * (a + b) - Math.sqrt((3 * a + b) * (a + 3 * b)));
  }

  /**
   * Scales the ellipse axes by a given factor.
   * @param factor - Must be positive.
   */
  scale(factor: number): void {
    if (factor <= 0) {
      throw new Error("Scale factor must be positive.");
    }
    this._a *= factor;
    this._b *= factor;
  }
}
