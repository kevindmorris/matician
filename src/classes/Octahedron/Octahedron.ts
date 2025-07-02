/**
 * Represents a regular octahedron.
 */
export default class Octahedron {
  private a: number; // Edge length

  /**
   * @param a - Side length of the octahedron (must be positive)
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

  /** Calculates the surface area: A = 2√3 * a² */
  get surfaceArea(): number {
    return 2 * Math.sqrt(3) * this.a ** 2;
  }

  /** Calculates the volume: V = (1/3)√2 * a³ */
  get volume(): number {
    return (Math.sqrt(2) / 3) * this.a ** 3;
  }
}
