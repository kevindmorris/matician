/**
 * Represents a rectangular prism (cuboid).
 */
export default class RectangularPrism {
  private l: number; // length
  private w: number; // width
  private h: number; // height

  /**
   * @param l - Length (must be positive)
   * @param w - Width (must be positive)
   * @param h - Height (must be positive)
   */
  constructor(l: number, w: number, h: number) {
    if (l <= 0 || w <= 0 || h <= 0) {
      throw new Error("All dimensions must be positive.");
    }
    this.l = l;
    this.w = w;
    this.h = h;
  }

  /** Gets the length */
  get length(): number {
    return this.l;
  }

  /** Gets the width */
  get width(): number {
    return this.w;
  }

  /** Gets the height */
  get height(): number {
    return this.h;
  }

  /** Calculates surface area: A = 2(lw + lh + wh) */
  get surfaceArea(): number {
    return 2 * (this.l * this.w + this.l * this.h + this.w * this.h);
  }

  /** Calculates volume: V = l * w * h */
  get volume(): number {
    return this.l * this.w * this.h;
  }
}
