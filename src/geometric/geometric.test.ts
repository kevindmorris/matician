import geometric from "./geometric";

describe("geometric module", () => {
  test("should calcluate the geometric distribution", () => {
    expect(geometric(1, 0.5)).toBeCloseTo(0.5, 4);
    expect(geometric(2, 0.5)).toBeCloseTo(0.25, 4);
    expect(geometric(3, 0.5)).toBeCloseTo(0.125, 4);
    expect(geometric(4, 0.5)).toBeCloseTo(0.0625, 4);
    expect(geometric(1, 0.6)).toBeCloseTo(0.6, 4);
    expect(geometric(2, 0.6)).toBeCloseTo(0.24, 4);
    expect(geometric(3, 0.6)).toBeCloseTo(0.096, 4);
    expect(geometric(4, 0.6)).toBeCloseTo(0.0384, 4);
  });
  test("should return NaN", () => {
    expect(geometric(1.5, 0.5)).toBeNaN();
    expect(geometric(0, 0.5)).toBeNaN();
    expect(geometric(1, -0.5)).toBeNaN();
    expect(geometric(1, 1.5)).toBeNaN();
  });
});
