/**
 * Represents a regular dodecahedron.
 */
export default class Dodecahedron {
  private a: number; // Edge length

  /**
   * @param a - Side length of each edge (must be positive)
   */
  constructor(a: number) {
    if (a <= 0) {
      throw new Error("Side length must be positive.");
    }
    this.a = a;
  }

  /** Gets the side length */
  get side(): number {
    return this.a;
  }

  /** Calculates surface area: A = 3√25 + 10√5 * a² */
  get surfaceArea(): number {
    return 3 * Math.sqrt(25 + 10 * Math.sqrt(5)) * this.a ** 2;
  }

  /** Calculates volume: V = (1/4)(15 + 7√5) * a³ */
  get volume(): number {
    return ((15 + 7 * Math.sqrt(5)) / 4) * this.a ** 3;
  }
}
