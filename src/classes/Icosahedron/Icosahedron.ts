/**
 * Represents a regular icosahedron.
 */
export default class Icosahedron {
  private a: number; // Edge length

  /**
   * @param a - Edge length (must be positive)
   */
  constructor(a: number) {
    if (a <= 0) {
      throw new Error("Edge length must be positive.");
    }
    this.a = a;
  }

  /** Gets the edge length. */
  get edge(): number {
    return this.a;
  }

  /** Calculates surface area: A = 5√3 * a² */
  get surfaceArea(): number {
    return 5 * Math.sqrt(3) * this.a ** 2;
  }

  /** Calculates volume: V = (5(3 + √5)/12) * a³ */
  get volume(): number {
    return ((5 * (3 + Math.sqrt(5))) / 12) * this.a ** 3;
  }
}
