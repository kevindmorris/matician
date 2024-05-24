import stdevBy from "./stdevBy";

describe("stdevBy module", () => {
  test("should find the standard deviation of an array", () => {
    expect(stdevBy([], (o) => o)).toBe(0);
    expect(stdevBy([1, 2, 3], (o) => o)).toBe(1);
    expect(
      stdevBy([{ x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }, { x: 5 }], (o) => o.x)
    ).toBeCloseTo(Math.sqrt(2.5));
    expect(
      stdevBy([{ x: -1 }, { x: -1 }, { x: 2 }, { x: 2 }], (o) => o.x)
    ).toBeCloseTo(Math.sqrt(3));
  });
});
