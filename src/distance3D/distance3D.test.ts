import distance3D from "./distance3D";

describe("distance3D", () => {
  it("returns 0 for identical points", () => {
    expect(distance3D(1, 2, 3, 1, 2, 3)).toBeCloseTo(0);
  });

  it("computes correct distance for unit step in each axis", () => {
    expect(distance3D(0, 0, 0, 1, 1, 1)).toBeCloseTo(Math.sqrt(3));
  });

  it("works for positive coordinates", () => {
    expect(distance3D(2, 3, 4, 5, 6, 7)).toBeCloseTo(Math.sqrt(27));
  });

  it("works for negative coordinates", () => {
    expect(distance3D(-1, -1, -1, -2, -2, -2)).toBeCloseTo(Math.sqrt(3));
  });

  it("works for mixed positive and negative values", () => {
    expect(distance3D(0, 0, 0, -3, 4, 0)).toBeCloseTo(5);
  });
});
