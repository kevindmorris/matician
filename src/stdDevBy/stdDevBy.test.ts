import stdDevBy from "./stdDevBy";

describe("stdDevBy", () => {
  it("calculates sample standard deviation correctly", () => {
    const data = [
      { a: 2 },
      { a: 4 },
      { a: 4 },
      { a: 4 },
      { a: 5 },
      { a: 5 },
      { a: 7 },
      { a: 9 }
    ];
    expect(stdDevBy(data, "a")).toBeCloseTo(2.138089935299395, 5);
  });

  it("returns NaN for arrays with fewer than 2 numbers", () => {
    expect(Number.isNaN(stdDevBy([{ a: 1 }], "a"))).toBe(true);
    expect(Number.isNaN(stdDevBy([], "a"))).toBe(true);
  });

  it("ignores non-numeric values", () => {
    const data = [{ a: 2 }, { a: "x" }, { a: 4 }];
    expect(stdDevBy(data, "a")).toBeCloseTo(Math.sqrt(2), 5);
  });

  it("returns NaN if no valid numbers exist", () => {
    const data = [{ a: "foo" }, { a: null }];
    expect(Number.isNaN(stdDevBy(data, "a"))).toBe(true);
  });

  it("handles missing keys safely", () => {
    const data = [{ a: 1 }, {}, { a: 3 }];
    expect(stdDevBy(data, "a")).toBeCloseTo(Math.sqrt(2), 5);
  });

  it("handles negative numbers correctly", () => {
    const data = [{ a: -1 }, { a: -3 }, { a: -5 }];
    expect(stdDevBy(data, "a")).toBeCloseTo(Math.sqrt(4), 5);
  });
});
