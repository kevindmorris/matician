/**
 * Represents a cylinder.
 */
export default class Cylinder {
  private r: number; // Radius
  private h: number; // Height

  /**
   * @param r - Radius of the base (must be positive)
   * @param h - Height of the cylinder (must be positive)
   */
  constructor(r: number, h: number) {
    if (r <= 0 || h <= 0) {
      throw new Error("Radius and height must be positive.");
    }
    this.r = r;
    this.h = h;
  }

  /** Gets the radius. */
  get radius(): number {
    return this.r;
  }

  /** Gets the height. */
  get height(): number {
    return this.h;
  }

  /** Calculates the surface area: A = 2πr² + 2πrh */
  get surfaceArea(): number {
    return 2 * Math.PI * this.r * (this.r + this.h);
  }

  /** Calculates the volume: V = πr²h */
  get volume(): number {
    return Math.PI * this.r * this.r * this.h;
  }
}
