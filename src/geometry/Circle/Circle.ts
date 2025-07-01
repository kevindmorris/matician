/**
 * Represents a circle and provides geometric computations.
 */
export default class Circle {
  private _radius: number;

  /**
   * Creates a new Circle instance.
   * @param radius - The radius of the circle. Must be a positive number.
   */
  constructor(radius: number) {
    if (radius <= 0) {
      throw new Error("Radius must be a positive number.");
    }
    this._radius = radius;
  }

  /** Gets the radius of the circle. */
  get radius(): number {
    return this._radius;
  }

  /**
   * Sets the radius of the circle.
   * @param value - The new radius. Must be a positive number.
   */
  set radius(value: number) {
    if (value <= 0) {
      throw new Error("Radius must be a positive number.");
    }
    this._radius = value;
  }

  /** Gets the diameter of the circle. */
  get diameter(): number {
    return this._radius * 2;
  }

  /** Gets the circumference of the circle. */
  get circumference(): number {
    return 2 * Math.PI * this._radius;
  }

  /** Gets the area of the circle. */
  get area(): number {
    return Math.PI * this._radius ** 2;
  }

  /**
   * Scales the radius of the circle by a given factor.
   * @param factor - Must be positive.
   */
  scale(factor: number): void {
    if (factor <= 0) {
      throw new Error("Scale factor must be positive.");
    }
    this._radius *= factor;
  }

  /**
   * Creates a circle from a given diameter.
   * @param diameter - Must be positive.
   * @returns A new Circle instance.
   */
  static fromDiameter(diameter: number): Circle {
    if (diameter <= 0) {
      throw new Error("Diameter must be a positive number.");
    }
    return new Circle(diameter / 2);
  }
}
