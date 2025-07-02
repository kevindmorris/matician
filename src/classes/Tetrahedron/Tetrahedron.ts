/**
 * Represents a regular tetrahedron (4 equilateral triangle faces).
 */
export default class Tetrahedron {
  private a: number; // Side length

  /**
   * @param a - Side length (must be positive)
   */
  constructor(a: number) {
    if (a <= 0) {
      throw new Error("Side length must be positive.");
    }
    this.a = a;
  }

  /** Gets the side length. */
  get side(): number {
    return this.a;
  }

  /** Calculates the surface area: A = √3 * a² */
  get surfaceArea(): number {
    return Math.sqrt(3) * this.a * this.a;
  }

  /** Calculates the volume: V = (a³) / (6√2) */
  get volume(): number {
    return (Math.pow(this.a, 3)) / (6 * Math.sqrt(2));
  }
}
