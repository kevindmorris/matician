import ellipsoid from "./ellipsoid";

describe("ellipsoid", () => {
  test("should find the volume of an ellipsoid", () => {
    expect(ellipsoid(1, 2, 3)).toBeCloseTo(25.13274, 4);
    expect(ellipsoid(2, 3, 4)).toBeCloseTo(100.53096, 4);
    expect(ellipsoid(3, 4, 5)).toBeCloseTo(251.32741, 4);
  });
});
