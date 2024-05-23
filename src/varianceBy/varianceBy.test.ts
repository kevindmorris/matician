import varianceBy from "./varianceBy";

describe("varianceBy module", () => {
  test("should find the variance of an array", () => {
    expect(varianceBy([], (o) => o)).toBe(0);
    expect(varianceBy([1, 2, 3], (o) => o)).toBe(1);
    expect(
      varianceBy([{ x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }, { x: 5 }], (o) => o.x)
    ).toBeCloseTo(2.5);
    expect(
      varianceBy([{ x: -1 }, { x: -1 }, { x: 2 }, { x: 2 }], (o) => o.x)
    ).toBeCloseTo(3);
  });
});
