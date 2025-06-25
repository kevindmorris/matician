import distance2D from "./distance2D";

describe("distance2D", () => {
  it("returns 0 for identical points", () => {
    expect(distance2D(1, 1, 1, 1)).toBeCloseTo(0);
  });

  it("computes correct distance for right triangle", () => {
    expect(distance2D(0, 0, 3, 4)).toBeCloseTo(5); // 3-4-5 triangle
  });

  it("works for negative coordinates", () => {
    expect(distance2D(-1, -2, -4, -6)).toBeCloseTo(5);
  });

  it("works for mixed positive and negative coordinates", () => {
    expect(distance2D(2, 3, -1, -1)).toBeCloseTo(5);
  });

  it("handles floating point coordinates", () => {
    expect(distance2D(0.5, 0.5, 2.5, 2.5)).toBeCloseTo(Math.sqrt(8));
  });
});
