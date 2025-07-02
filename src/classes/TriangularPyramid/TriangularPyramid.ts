/**
 * Represents a regular triangular pyramid (tetrahedron-like, but named for clarity).
 */
export default class TriangularPyramid {
  private a: number; // Side length of base (equilateral)
  private h: number; // Height from base to apex

  /**
   * @param a - Side length of the equilateral base (must be positive)
   * @param h - Vertical height from base to apex (must be positive)
   */
  constructor(a: number, h: number) {
    if (a <= 0 || h <= 0) {
      throw new Error("Base side length and height must be positive.");
    }
    this.a = a;
    this.h = h;
  }

  /** Gets the base side length. */
  get baseSide(): number {
    return this.a;
  }

  /** Gets the vertical height. */
  get height(): number {
    return this.h;
  }

  /** Calculates the base area: A = (√3 / 4) * a² */
  get baseArea(): number {
    return (Math.sqrt(3) / 4) * this.a * this.a;
  }

  /** Calculates the volume: V = (1/3) * baseArea * height */
  get volume(): number {
    return (1 / 3) * this.baseArea * this.h;
  }
}
