import RectangularPrism from "./RectangularPrism";

describe("RectangularPrism", () => {
  it("returns correct dimensions", () => {
    const prism = new RectangularPrism(2, 3, 4);
    expect(prism.length).toBe(2);
    expect(prism.width).toBe(3);
    expect(prism.height).toBe(4);
  });

  it("calculates surface area correctly", () => {
    const prism = new RectangularPrism(2, 3, 4);
    expect(prism.surfaceArea).toBe(2 * (6 + 8 + 12)); // 52
  });

  it("calculates volume correctly", () => {
    const prism = new RectangularPrism(2, 3, 4);
    expect(prism.volume).toBe(24);
  });

  it("throws error on non-positive dimensions", () => {
    expect(() => new RectangularPrism(0, 2, 2)).toThrow();
    expect(() => new RectangularPrism(1, -1, 1)).toThrow();
    expect(() => new RectangularPrism(1, 1, 0)).toThrow();
  });
});
