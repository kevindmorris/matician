import trapezoid from "./trapezoid";

describe("trapezoid", () => {
  test("should find the area of a trapezoid", () => {
    expect(trapezoid(1, 2, 1)).toBeCloseTo(1.5, 4);
    expect(trapezoid(2, 3, 2)).toBeCloseTo(5, 4);
    expect(trapezoid(3, 4, 1)).toBeCloseTo(3.5, 4);
    expect(trapezoid(4, 5, 2)).toBeCloseTo(9, 4);
  });
});
