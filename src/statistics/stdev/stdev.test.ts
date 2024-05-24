import stdev from "./stdev";

describe("stdev module", () => {
  test("should find the standard deviation of an array", () => {
    expect(stdev([])).toBe(0);
    expect(stdev([1, 2, 3])).toBe(1);
    expect(stdev([1, 2, 3, 4, 5])).toBeCloseTo(Math.sqrt(2.5));
    expect(stdev([-1, -1, 2, 2])).toBeCloseTo(Math.sqrt(3));
  });
});
