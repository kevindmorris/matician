/**
 * Represents a sphere.
 */
export default class Sphere {
  private r: number; // Radius

  /**
   * @param r - Radius of the sphere (must be positive).
   */
  constructor(r: number) {
    if (r <= 0) throw new Error("Radius must be positive.");
    this.r = r;
  }

  /** Gets the radius. */
  get radius(): number {
    return this.r;
  }

  /** Calculates the surface area: A = 4πr² */
  get surfaceArea(): number {
    return 4 * Math.PI * this.r * this.r;
  }

  /** Calculates the volume: V = (4/3)πr³ */
  get volume(): number {
    return (4 / 3) * Math.PI * Math.pow(this.r, 3);
  }
}
