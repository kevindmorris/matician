/**
 * Represents a triangular prism with an equilateral triangle base.
 */
export default class TriangularPrism {
  private a: number; // Side length of equilateral triangle base
  private h: number; // Height (length) of the prism

  /**
   * @param a - Side length of the base (must be positive)
   * @param h - Height (length) of the prism (must be positive)
   */
  constructor(a: number, h: number) {
    if (a <= 0 || h <= 0) {
      throw new Error("Base side length and height must be positive.");
    }
    this.a = a;
    this.h = h;
  }

  /** Gets the side length of the base. */
  get baseSide(): number {
    return this.a;
  }

  /** Gets the height (length) of the prism. */
  get height(): number {
    return this.h;
  }

  /** Calculates the base area: A = (√3 / 4) * a² */
  get baseArea(): number {
    return (Math.sqrt(3) / 4) * this.a ** 2;
  }

  /** Calculates the lateral surface area: 3a * h */
  get lateralSurfaceArea(): number {
    return 3 * this.a * this.h;
  }

  /** Calculates total surface area: SA = 2 * baseArea + lateralSurfaceArea */
  get surfaceArea(): number {
    return 2 * this.baseArea + this.lateralSurfaceArea;
  }

  /** Calculates volume: V = baseArea * height */
  get volume(): number {
    return this.baseArea * this.h;
  }
}
