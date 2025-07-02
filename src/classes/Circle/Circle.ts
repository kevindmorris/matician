/**
 * Class representing a circle.
 */
export default class Circle {
  private _radius: number;

  /**
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
