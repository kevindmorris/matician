/**
 * Represents a right circular cone.
 */
export default class Cone {
  private r: number; // Radius
  private h: number; // Height

  /**
   * @param r - Radius of the base (must be positive)
   * @param h - Height of the cone (must be positive)
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

  /** Calculates the slant height: √(r² + h²) */
  get slantHeight(): number {
    return Math.sqrt(this.r ** 2 + this.h ** 2);
  }

  /** Calculates the surface area: A = πr² + πrl */
  get surfaceArea(): number {
    return Math.PI * this.r * (this.r + this.slantHeight);
  }

  /** Calculates the volume: V = (1/3)πr²h */
  get volume(): number {
    return (1 / 3) * Math.PI * this.r ** 2 * this.h;
  }
}
