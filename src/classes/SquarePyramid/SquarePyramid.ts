/**
 * Represents a right square pyramid.
 */
export default class SquarePyramid {
  private b: number; // Base side length
  private h: number; // Height (vertical)

  /**
   * @param b - Length of the base (must be positive)
   * @param h - Height of the pyramid (must be positive)
   */
  constructor(b: number, h: number) {
    if (b <= 0 || h <= 0) {
      throw new Error("Base length and height must be positive.");
    }
    this.b = b;
    this.h = h;
  }

  /** Gets the base length. */
  get baseLength(): number {
    return this.b;
  }

  /** Gets the vertical height. */
  get height(): number {
    return this.h;
  }

  /** Calculates slant height: l = √(h² + (b/2)²) */
  get slantHeight(): number {
    return Math.sqrt(this.h ** 2 + (this.b / 2) ** 2);
  }

  /** Calculates surface area: A = b² + 2b * slantHeight */
  get surfaceArea(): number {
    return this.b * this.b + 2 * this.b * this.slantHeight;
  }

  /** Calculates volume: V = (1/3) * b² * h */
  get volume(): number {
    return (1 / 3) * this.b * this.b * this.h;
  }
}
