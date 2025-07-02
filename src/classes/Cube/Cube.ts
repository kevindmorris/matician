/**
 * Represents a cube.
 */
export default class Cube {
  private s: number; // Side length

  /**
   * @param s - Side length of the cube (must be positive).
   */
  constructor(s: number) {
    if (s <= 0) throw new Error("Side length must be positive.");
    this.s = s;
  }

  /** Gets the side length. */
  get side(): number {
    return this.s;
  }

  /** Calculates the surface area of the cube: A = 6 * s² */
  get surfaceArea(): number {
    return 6 * this.s * this.s;
  }

  /** Calculates the volume of the cube: V = s³ */
  get volume(): number {
    return Math.pow(this.s, 3);
  }
}
